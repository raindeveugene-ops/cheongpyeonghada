import FadeIn from "./FadeIn";

const INFO_ITEMS = [
  { label: "체크인", value: "15:00" },
  { label: "체크아웃", value: "11:00" },
  { label: "기준 인원", value: "2인" },
  { label: "최대 인원", value: "6인" },
];

export default function Reservation() {
  return (
    <section id="reservation" className="bg-beige py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-gold uppercase">
              예약안내
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-charcoal lg:text-4xl">
              예약 안내
            </h2>
          </div>

          <div className="mt-12 rounded-2xl bg-white p-8 shadow-sm lg:p-12">
            {/* Check-in / Check-out grid */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {INFO_ITEMS.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-2xl font-bold text-charcoal">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-charcoal/50">{item.label}</p>
                </div>
              ))}
            </div>

            <hr className="my-8 border-beige" />

            {/* BBQ info */}
            <div className="text-center">
              <h3 className="text-lg font-bold text-charcoal">
                🔥 바비큐 이용
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                별도 5만원 (참나무 장작, 사장님 직접 조리)
              </p>
            </div>


          </div>
        </FadeIn>
      </div>
    </section>
  );
}
