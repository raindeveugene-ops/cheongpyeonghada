"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    window.location.replace("/ko/");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-charcoal/50">Redirecting…</p>
    </div>
  );
}
