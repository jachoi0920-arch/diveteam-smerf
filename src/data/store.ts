// 스마트스토어(2026-11-09 수집)에서 옮긴 사실. 가격 · 리뷰는 이 날짜 기준이에요.
export const STORE = "https://smartstore.naver.com/aquapartyroom";
export const PRODUCT = (id: string) => `${STORE}/products/${id}`;
export const PRICE_DATE = "2026년 11월 9일";

export const contact = {
  phone: "010-4779-3350",
  kakao: "다이브팀스머프",
  company: "주식회사 더씨 (The SEA Inc.)",
  ceo: "신영목",
};

export const disciplines = [
  {
    id: "freediving",
    name: "프리다이빙",
    tagline: "내 호흡에 집중하는 시간",
    img: "/images/free-lv4-crop.jpg",
    from: "30,000원",
    path: ["체험", "레벨 1", "레벨 2", "레벨 3", "레벨 4", "강사 과정"],
    orgs: "PADI · AIDA · PSA · SSI",
  },
  {
    id: "scuba",
    name: "스쿠버다이빙",
    tagline: "수중 세계를 가까이 만나는 시간",
    img: "/images/scuba-trial-crop.jpg",
    from: "88,000원",
    path: ["체험", "오픈워터", "어드밴스", "레스큐"],
    orgs: "PADI · SSI",
  },
  {
    id: "mermaid",
    name: "머메이드",
    tagline: "물속에서 표현하는 새로운 움직임",
    img: "/images/mermaid-trial-crop.jpg",
    from: "66,000원",
    path: ["체험 · 레벨 1", "단계별 강습", "강사 과정"],
    orgs: "PADI · PSA",
  },
];

export const products: Record<string, { name: string; detail: string; sessions: string; price: string; id: string; img?: string }[]> = {
  freediving: [
    { name: "프리다이빙 체험", detail: "호흡법 · 압력평형 이론, 장비 사용법, 스노클링 기초, 5m 잠영 실습", sessions: "원데이 클래스", price: "30,000원", id: "9942295512", img: "/images/free-trial-crop.jpg" },
    { name: "레벨 1 (이론 + 실습 1회)", detail: "숨참기(STA) · 피닝 · 스노클링 기초, 하강줄 이퀄라이징(FIM) · 잠영(DYN) · 덕다이빙(CWT)", sessions: "이론 + 풀장 1회", price: "66,000원", id: "9942308412" },
    { name: "레벨 1 + 2 (실습 2회)", detail: "1일차 5m 풀 제한수역, 2일차 딥 풀 개방수역 · 버디 · 레스큐", sessions: "이론 + 풀장 2회", price: "176,000원", id: "9942302255" },
    { name: "레벨 1 + 2 (실습 3회)", detail: "1 · 2일차 제한수역, 3일차 개방수역", sessions: "이론 + 풀장 3회", price: "242,000원", id: "10838800362" },
    { name: "레벨 3 어드밴스", detail: "DYN 중성부력 · 스타트 · 턴, 수심 중성부력, 프리폴, 다양한 레스큐", sessions: "풀장 4회", price: "495,000원", id: "10180575111", img: "/images/free-lv3-crop.jpg" },
    { name: "레벨 4 마스터", detail: "노핀 다이나믹(DNF), FRC 트레이닝, 마우스필, 노핀 수심 다이빙", sessions: "풀장 5회", price: "660,000원", id: "10839286435" },
    { name: "강사 과정 (LV1~LV3 강사)", detail: "PSA · PADI · SSI · AIDA 중 선택", sessions: "상담", price: "990,000원", id: "13640889598", img: "/images/free-instructor-crop.jpg" },
  ],
  scuba: [
    { name: "스쿠버다이빙 체험", detail: "스킨스쿠버 원데이 클래스", sessions: "원데이 클래스", price: "88,000원", id: "11001347991", img: "/images/scuba-trial-crop.jpg" },
    { name: "오픈워터 다이버", detail: "제한수역 + 개방수역 강습", sessions: "4회", price: "264,000원", id: "13655621990", img: "/images/scuba-ow-crop.jpg" },
    { name: "어드밴스 다이버", detail: "개방수역 강습", sessions: "5회", price: "264,000원", id: "13655625501", img: "/images/scuba-adv-crop.jpg" },
    { name: "레스큐 다이버", detail: "제한수역 + 개방수역 강습", sessions: "상담", price: "396,000원", id: "13655631059" },
  ],
  mermaid: [
    { name: "머메이드 체험 · 레벨 1", detail: "머메이드다이빙 원데이 클래스", sessions: "원데이 클래스", price: "66,000원", id: "11326085027", img: "/images/mermaid-trial-crop.jpg" },
    { name: "머메이드 강습 (입문에서 강사까지)", detail: "PADI · PSA 단계별 과정", sessions: "상담", price: "110,000원부터", id: "11395303975", img: "/images/mermaid-crop.jpg" },
  ],
};

export const family = [
  { name: "키즈 · 주니어 프리다이빙 · 스노클링", detail: "물 적응 · 장비 적응, 스노클링 기초, 기본 안전 교육, 얕은 수심 잠수. 만 4~6세 · 만 7~9세 · 만 10~15세", price: "99,000원", id: "10154702559", img: "/images/kids-crop.jpg" },
  { name: "한 가족만을 위한 원데이 클래스", detail: "한 가족(1~4인)만 따로 수업해요. 장비 사용법, 스노클링 · 프리다이빙 기초, 수심 적응, 잠영", price: "176,000원", id: "10404159799", img: "/images/family-crop.jpg" },
];

export const pools = [
  { name: "KUA 잠실다이빙풀장", area: "서울 잠실", depth: "5m" },
  { name: "송파 올림픽수영장", area: "서울 송파", depth: "5m" },
  { name: "성남 아쿠아라인", area: "경기 성남", depth: "5m" },
  { name: "수원 스포츠 아일랜드", area: "경기 수원", depth: "5m" },
  { name: "용인 딥스테이션", area: "경기 용인", depth: "36m" },
  { name: "시흥 파라다이브", area: "경기 시흥", depth: "35m" },
  { name: "가평 K26", area: "경기 가평", depth: "25m" },
];

export const instructors = [
  {
    name: "신영목",
    role: "강사 트레이너",
    note: "10년차 프리다이빙 강사 훈련관",
    certs: ["PADI · PSA 프리다이빙 강사 훈련관", "PADI · PSA 머메이드다이빙 강사 훈련관", "EFR · PSA 응급처치법 강사 훈련관", "AIDA 프리다이빙 강사", "PADI 스쿠버다이빙 강사"],
  },
  {
    name: "권영채",
    role: "강사 트레이너",
    note: "펀다이빙에서 딥다이빙까지",
    certs: ["SSI · CMAS 프리다이빙 강사 훈련관", "SSI 머메이드 강사 훈련관", "SSI React Right(응급처치법) 강사 훈련관", "AIDA · PADI · MOLCHANOVS 강사", "SSI 스쿠버 강사 · SSI 생존수영 강사"],
  },
  {
    name: "김초롱",
    role: "강사",
    note: "긍정파워 프리다이빙 강사",
    certs: ["AIDA · PADI · PSA 프리다이빙 강사", "PADI · PSA 머메이드다이빙 강사", "PSA 유스 프리다이빙 강사", "EFR 응급처치법 강사", "라이프가드(인명구조요원)"],
  },
];

export const faq = [
  { q: "수영 못해도 할 수 있어요?", a: "네, 장비를 쓰기 때문에 수영을 못해도 강습할 수 있어요. 처음이라면 체험이나 레벨 1을 추천해요." },
  { q: "물 공포증이 있어도 할 수 있나요?", a: "물 공포증 극복을 위한 수업은 아니지만, 꾸준히 물에 적응하며 극복한 분이 많아요. 한 번의 체험보다 레벨 교육으로 이어 가길 추천해요." },
  { q: "아이는 몇 살부터 돼요?", a: "성인 체험 · 레벨 1 상품은 고등학생 이상이에요. 아이는 키즈 · 주니어 수업(만 4~15세)이나 한 가족 원데이 클래스로 신청해요. 풀장마다 나이에 따른 입장 제한이 있을 수 있어 일정 상담 때 미리 알려 주세요." },
  { q: "자격증 따는 데 며칠 걸려요?", a: "레벨 1은 이론과 풀장 실습 1회, 레벨 1 + 2는 풀장 2~3회 과정이 있어요. 날짜는 강사와 상담해서 맞춰요." },
  { q: "수업은 언제 있어요?", a: "평일 09:30 · 14:30 · 18:30, 주말 09:30 · 14:30에 진행해요. 상황에 따라 30분 앞뒤로 바뀔 수 있어요. 시흥 · 용인은 저녁 19:30 수업도 있어요." },
  { q: "무엇을 챙겨 가요?", a: "수영복과 래시가드, 샤워도구, 수건이 필요해요. 마스크 · 스노클 · 오리발 · 수모는 무료로 빌려 드려요. 체온 보호용 슈트는 풀장에서 따로 빌려요(3,000~5,000원). 시력이 나쁘면 렌즈를 추천해요." },
  { q: "예약은 어떻게 해요?", a: "스마트스토어에서 인원 수만큼 결제한 뒤, 네이버 톡톡 · 카카오채널 · 문자로 원하는 날짜와 장소를 보내 주세요. 강사와 일정을 맞춰 진행해요." },
];

export const refund = ["교육 7일 전까지 100% 환불", "6일 전 ~ 72시간 전 50% 환불", "72시간 이내에는 일정 변경 · 환불 불가", "일정 변경(연기)은 72시간 전까지 1회만 가능"];
