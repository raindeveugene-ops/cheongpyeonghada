export const SITE_URL = "https://www.xn--2j1bz20c95evtb.kr";

// 예약 문의를 받을 인스타그램 계정 (@ 없이)
export const INSTAGRAM_HANDLE = "cheongpyung_hada";
export const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_HANDLE}`;
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;

// 여기어때 숙소 페이지
export const YEOGI_URL = "https://www.yeogi.com/domestic-accommodations/75191";

// 검색엔진 소유권 확인 코드 (meta 태그 방식). 값을 넣으면 <head>에 자동으로 들어갑니다.
// Google Search Console: "HTML 태그" 방식에서 content="..." 값
export const GOOGLE_SITE_VERIFICATION = "";
// 네이버 서치어드바이저: "HTML 태그" 방식에서 content="..." 값
export const NAVER_SITE_VERIFICATION = "";
// Bing Webmaster Tools: "HTML Meta Tag" 방식에서 content="..." 값
export const BING_SITE_VERIFICATION = "";

// 갤러리·대표 이미지 (구조화 데이터, 이미지 사이트맵에 사용)
export const SITE_IMAGES = [
  "exterior.jpg",
  "living-fireplace.jpg",
  "garden-sunset.jpg",
  "garden-parasol.jpg",
  "bbq-river.jpg",
  "bedroom.jpg",
  "breakfast.jpg",
  "turntable.jpg",
  "vhs-display.jpg",
  "interior-hallway.jpg",
].map((file) => `${SITE_URL}/images/${file}`);
