import "../globals.css";
import type { Metadata } from "next";
import { robots, verification } from "@/lib/seo";

export const metadata: Metadata = { robots, verification };

// 한국어 가이드 페이지 전용 루트 레이아웃 (/ko/guide/...)
export default function GuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream">{children}</body>
    </html>
  );
}
