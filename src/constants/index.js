//시∙도별 거리두기 단계 데이터
export const DISTANCE = Object.freeze({
  gyeonggi: 4,
  incheon: 4,
  seoul: 4,
  gangwon: 4,
  chungbuk: 4,
  sejong: 4,
  daejeon: 4,
  gyeongbuk: 4,
  daegu: 4,
  jeonbuk: 4,
  chungnam: 4,
  gyeongnam: 4,
  gwangju: 4,
  jeonnam: 4,
  busan: 4,
  ulsan: 4,
  jeju: 4,
});

// 시∙도별 거리두기 단계 정보
export const AREAINFO = Object.freeze({
  gyeonggi: {
    stage: [4],
    info: ["경기전지역 4단계"],
    name: "경기",
  },
  incheon: {
    stage: [4],
    info: ["인천전지역 4단계"],
    name: "인천",
  },
  seoul: {
    stage: [4],
    info: ["서울전지역 4단계"],
    name: "서울",
  },
  gangwon: {
    stage: [4],
    info: ["강원전지역 4단계"],
    name: "강원",
  },
  chungbuk: {
    stage: [4],
    info: ["충북전지역 4단계"],
    name: "충북",
  },
  sejong: {
    stage: [4],
    info: ["세종전지역 4단계"],
    name: "세종",
  },
  daejeon: {
    stage: [4],
    info: ["대전전지역 4단계"],
    name: "대전",
  },
  gyeongbuk: {
    stage: [4],
    info: ["경북전지역 4단계"],
    name: "경북",
  },
  daegu: {
    stage: [4],
    info: ["대구전지역 4단계"],
    name: "대구",
  },
  jeonbuk: {
    stage: [4],
    info: ["전북 전지역 4단계"],
    name: "전북",
  },
  chungnam: {
    stage: [4],
    info: ["충남전지역 4단계"],
    name: "충남",
  },
  gyeongnam: {
    stage: [4],
    info: ["경남전지역 4단계"],
    name: "경남",
  },
  gwangju: {
    stage: [4],
    info: ["광주전지역 4단계"],
    name: "광주",
  },
  jeonnam: {
    stage: [4],
    info: ["전남전지역 4단계"],
    name: "전남",
  },
  busan: {
    stage: [4],
    info: ["부산전지역 4단계"],
    name: "부산",
  },
  ulsan: {
    stage: [4],
    info: ["울산전지역 4단계"],
    name: "울산",
  },
  jeju: {
    stage: [4],
    info: ["제주전지역 4단계"],
    name: "제주",
  },
});

//거리두기 단계별 정보
export const STAGEINFO = Object.freeze({
  "1단계": {
    모임: {
      main: "방역수칙 준수",
      sub: "",
    },
    유흥: {
      main: "운영시간 제한 X",
    },
    식당: {
      main: "운영시간 제한 X",
    },
    노래: {
      main: "운영시간 제한 X",
    },
  },
  "2단계": {
    모임: {
      main: "8명까지 모임 가능",
      sub: "(9인 이상 사적모임 금지)",
    },
    유흥: {
      main: "24시 이후 운영제한",
    },
    식당: {
      main: "24시 이후 포장·배달만 허용",
    },
    노래: {
      main: "24시 이후 운영제한",
    },
  },
  "3단계": {
    모임: {
      main: "접종 완료자 포함 최대 10명(미접종자 최대 4명)",
    },
    유흥: {
      main:
        "접종증명·음성확인제 도입 / 24시까지 완화(1차) → 시간제한 해제(2차)",
    },
    식당: {
      main: "시간제한 해제 · 미접종자 이용규모 제한",
    },
    노래: {
      main: "접종증명·음성확인제 도입 · 시간제한 해제",
    },
  },
  "4단계": {
    모임: {
      main: "사적 모임 전국 4인까지",
    },
    유흥: {
      main: "21시 제한",
    },
    식당: {
      main: "21시 제한",
    },
    노래: {
      main: "21시 제한",
    },
  },
});

// 시∙도별 인구수
export const POPULATION = Object.freeze({
  total: 51672400,
  seoul: 9565990,
  busan: 3364358,
  daegu: 2397646,
  incheon: 2936367,
  gwangju: 1442647,
  daejeon: 1456107,
  ulsan: 1126369,
  sejong: 362995,
  gyeonggi: 13500688,
  gangwon: 1535530,
  chungbuk: 1597503,
  chungnam: 2117400,
  jeonbuk: 1794345,
  jeonnam: 1840921,
  gyeongbuk: 2632401,
  gyeongnam: 3325840,
  jeju: 675293,
});

export const LISTS = Object.freeze({
  areaList: [
    { engName: "gyeonggi", korName: "경기", position: 8 },
    { engName: "incheon", korName: "인천", position: 3 },
    { engName: "gangwon", korName: "강원", position: 9 },
    { engName: "seoul", korName: "서울", position: 0 },
    { engName: "chungbuk", korName: "충북", position: 10 },
    { engName: "gyeongbuk", korName: "경북", position: 14 },
    { engName: "daegu", korName: "대구", position: 2 },
    { engName: "daejeon", korName: "대전", position: 5 },
    { engName: "sejong", korName: "세종", position: 7 },
    { engName: "chungnam", korName: "충남", position: 11 },
    { engName: "jeonbuk", korName: "전북", position: 12 },
    { engName: "gwangju", korName: "광주", position: 4 },
    { engName: "jeonnam", korName: "전남", position: 13 },
    { engName: "gyeongnam", korName: "경남", position: 15 },
    { engName: "busan", korName: "부산", position: 1 },
    { engName: "ulsan", korName: "울산", position: 6 },
    { engName: "jeju", korName: "제주", position: 16 },
  ],
  menuList: [
    { engName: "korea", korName: "국내", url: "/" },
    { engName: "distance", korName: "거리두기", url: "/distance" },
    { engName: "vaccine", korName: "백신접종", url: "/vaccine" },
  ],
});
