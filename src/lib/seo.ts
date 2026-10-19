import type { Metadata } from "next";
import {
  BING_SITE_VERIFICATION,
  GOOGLE_SITE_VERIFICATION,
  NAVER_SITE_VERIFICATION,
} from "@/lib/site";

// 비어 있는 확인 코드는 meta 태그를 만들지 않음
const verificationOther: Record<string, string> = {};
if (NAVER_SITE_VERIFICATION) {
  verificationOther["naver-site-verification"] = NAVER_SITE_VERIFICATION;
}
if (BING_SITE_VERIFICATION) {
  verificationOther["msvalidate.01"] = BING_SITE_VERIFICATION;
}

export const verification: Metadata["verification"] = {
  google: GOOGLE_SITE_VERIFICATION || undefined,
  other: verificationOther,
};

// AI 개요·검색 결과에 긴 스니펫과 큰 이미지 미리보기를 허용
export const robots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};
