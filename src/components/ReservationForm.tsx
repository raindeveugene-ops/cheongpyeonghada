"use client";

import { useState, type FormEvent } from "react";
import type { Translations } from "@/i18n";

const PHONE_REGEX = /^01[016789]-?\d{3,4}-?\d{4}$/;

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 3) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
}

export default function ReservationForm({ t }: { t: Translations }) {
  const f = t.reservation.form;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [bbq, setBbq] = useState(false);
  const [message, setMessage] = useState("");

  const [phoneError, setPhoneError] = useState("");
  const [dateError, setDateError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const today = new Date().toISOString().split("T")[0];

  function validatePhone(value: string): boolean {
    const valid = PHONE_REGEX.test(value.replace(/-/g, ""));
    setPhoneError(valid ? "" : f.phoneError);
    return valid;
  }

  function validateDates(): boolean {
    if (checkIn && checkOut && checkOut <= checkIn) {
      setDateError(f.checkOutError);
      return false;
    }
    setDateError("");
    return true;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const phoneValid = validatePhone(phone);
    const datesValid = validateDates();
    if (!phoneValid || !datesValid) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          checkIn,
          checkOut,
          guests: Number(guests),
          bbq,
          message,
        }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setName("");
      setPhone("");
      setCheckIn("");
      setCheckOut("");
      setGuests("2");
      setBbq(false);
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-charcoal/15 bg-white px-4 py-3 text-charcoal placeholder:text-charcoal/30 transition-colors focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20";

  const labelClass = "block text-sm font-medium text-charcoal/70 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h3 className="text-lg font-bold text-charcoal text-center">
        {f.heading}
      </h3>

      {/* Name & Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="res-name" className={labelClass}>
            {f.name} <span className="text-gold">*</span>
          </label>
          <input
            id="res-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={f.namePlaceholder}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="res-phone" className={labelClass}>
            {f.phone} <span className="text-gold">*</span>
          </label>
          <input
            id="res-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => {
              setPhone(formatPhone(e.target.value));
              if (phoneError) setPhoneError("");
            }}
            onBlur={() => phone && validatePhone(phone)}
            placeholder={f.phonePlaceholder}
            className={inputClass}
          />
          {phoneError && (
            <p className="mt-1 text-xs text-red-500">{phoneError}</p>
          )}
        </div>
      </div>

      {/* Check-in & Check-out */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="res-checkin" className={labelClass}>
            {f.checkIn} <span className="text-gold">*</span>
          </label>
          <input
            id="res-checkin"
            type="date"
            required
            min={today}
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value);
              if (dateError) setDateError("");
            }}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="res-checkout" className={labelClass}>
            {f.checkOut} <span className="text-gold">*</span>
          </label>
          <input
            id="res-checkout"
            type="date"
            required
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => {
              setCheckOut(e.target.value);
              if (dateError) setDateError("");
            }}
            onBlur={validateDates}
            className={inputClass}
          />
          {dateError && (
            <p className="mt-1 text-xs text-red-500">{dateError}</p>
          )}
        </div>
      </div>

      {/* Guests & BBQ */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="res-guests" className={labelClass}>
            {f.guests} <span className="text-gold">*</span>
          </label>
          <select
            id="res-guests"
            required
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className={inputClass}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}{f.guestsUnit}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end pb-1">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={bbq}
              onChange={(e) => setBbq(e.target.checked)}
              className="h-5 w-5 rounded border-charcoal/20 text-sage accent-sage"
            />
            <span className="text-sm text-charcoal/70">{f.bbq}</span>
          </label>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="res-message" className={labelClass}>
          {f.message}
        </label>
        <textarea
          id="res-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={f.messagePlaceholder}
          className={inputClass + " resize-none"}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-sage py-3.5 text-sm font-semibold text-white transition-colors hover:bg-sage-dark focus:outline-none focus:ring-2 focus:ring-sage/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? f.submitting : f.submit}
      </button>

      {/* Status messages */}
      {status === "success" && (
        <p className="rounded-lg bg-sage/10 p-4 text-center text-sm text-sage-dark">
          {f.success}
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-4 text-center text-sm text-red-600">
          {f.error}
        </p>
      )}
    </form>
  );
}
