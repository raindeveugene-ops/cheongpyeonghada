interface Env {
  DISCORD_WEBHOOK_URL: string;
}

interface ReservationBody {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  bbq: boolean;
  message: string;
}

const ALLOWED_ORIGINS = [
  "https://www.xn--2j1bz20c95evtb.kr",
  "https://xn--2j1bz20c95evtb.kr",
  "http://localhost:3000",
];

function corsHeaders(origin: string | null): Record<string, string> {
  const allowed = origin && ALLOWED_ORIGINS.some((o) => origin === o);
  return {
    "Access-Control-Allow-Origin": allowed ? origin! : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

const PHONE_REGEX = /^01[016789]\d{7,8}$/;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const MAX_NAME_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 1000;

export const onRequestOptions: PagesFunction<Env> = async (context) => {
  const origin = context.request.headers.get("Origin");
  return new Response(null, {
    status: 204,
    headers: corsHeaders(origin),
  });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const origin = context.request.headers.get("Origin");
  const headers = {
    ...corsHeaders(origin),
    "Content-Type": "application/json",
  };

  let body: ReservationBody;
  try {
    body = await context.request.json();
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON" }),
      { status: 400, headers },
    );
  }

  const { name, phone, checkIn, checkOut, guests, bbq, message } = body;

  // Validate required fields
  if (!name || !phone || !checkIn || !checkOut || !guests) {
    return new Response(
      JSON.stringify({ error: "Missing required fields" }),
      { status: 400, headers },
    );
  }

  // Validate field types and lengths (Discord rejects embed fields over 1024 chars)
  if (
    typeof name !== "string" ||
    typeof phone !== "string" ||
    name.trim().length > MAX_NAME_LENGTH ||
    (message != null &&
      (typeof message !== "string" || message.length > MAX_MESSAGE_LENGTH)) ||
    !DATE_REGEX.test(checkIn) ||
    !DATE_REGEX.test(checkOut) ||
    !Number.isInteger(guests)
  ) {
    return new Response(
      JSON.stringify({ error: "Invalid field values" }),
      { status: 400, headers },
    );
  }

  // Validate phone
  const phoneDigits = phone.replace(/-/g, "");
  if (!PHONE_REGEX.test(phoneDigits)) {
    return new Response(
      JSON.stringify({ error: "Invalid phone number format" }),
      { status: 400, headers },
    );
  }

  // Validate dates
  if (checkOut <= checkIn) {
    return new Response(
      JSON.stringify({ error: "Check-out must be after check-in" }),
      { status: 400, headers },
    );
  }

  // Validate guests
  if (guests < 1 || guests > 6) {
    return new Response(
      JSON.stringify({ error: "Guests must be between 1 and 6" }),
      { status: 400, headers },
    );
  }

  // Send Discord webhook
  const webhookUrl = context.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL is not configured");
    return new Response(
      JSON.stringify({ error: "Server configuration error" }),
      { status: 500, headers },
    );
  }

  const embed = {
    title: "📌 새 예약 문의",
    color: 8170094,
    fields: [
      { name: "👤 이름", value: name, inline: true },
      { name: "📞 연락처", value: phone, inline: true },
      { name: "📅 체크인", value: checkIn, inline: true },
      { name: "📅 체크아웃", value: checkOut, inline: true },
      { name: "👥 인원", value: `${guests}명`, inline: true },
      { name: "🔥 바비큐", value: bbq ? "추가" : "미추가", inline: true },
      { name: "💬 문의사항", value: message || "없음" },
    ],
    timestamp: new Date().toISOString(),
  };

  try {
    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!webhookRes.ok) {
      console.error("Discord webhook failed:", webhookRes.status);
      return new Response(
        JSON.stringify({ error: "Failed to send notification" }),
        { status: 502, headers },
      );
    }
  } catch (err) {
    console.error("Discord webhook error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to send notification" }),
      { status: 502, headers },
    );
  }

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200, headers },
  );
};
