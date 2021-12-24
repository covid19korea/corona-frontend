export const GOOGLE_ANALYTICS_KEY = "G-C63HNJPW9N";

//시∙도별 거리두기 단계 데이터
export const DISTANCE = {
  gyeonggi: 4,
  incheon: 4,
  seoul: 4,
  gangwon: 3,
  chungbuk: 3,
  sejong: 3,
  daejeon: 3,
  gyeongbuk: 3,
  daegu: 3,
  jeonbuk: 3,
  chungnam: 3,
  gyeongnam: 3,
  gwangju: 3,
  jeonnam: 3,
  busan: 3,
  ulsan: 3,
  jeju: 3,
};

// 시∙도별 거리두기 단계 정보
export const AREAINFO = {
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
    stage: [3],
    info: ["강원전지역 3단계"],
    name: "강원",
  },
  chungbuk: {
    stage: [3],
    info: ["충북전지역 3단계"],
    name: "충북",
  },
  sejong: {
    stage: [3],
    info: ["세종전지역 3단계"],
    name: "세종",
  },
  daejeon: {
    stage: [3],
    info: ["대전전지역 3단계"],
    name: "대전",
  },
  gyeongbuk: {
    stage: [3],
    info: ["경북전지역 3단계"],
    name: "경북",
  },
  daegu: {
    stage: [3],
    info: ["대구전지역 3단계"],
    name: "대구",
  },
  jeonbuk: {
    stage: [3],
    info: ["전북 전지역 3단계"],
    name: "전북",
  },
  chungnam: {
    stage: [3],
    info: ["충남전지역 3단계"],
    name: "충남",
  },
  gyeongnam: {
    stage: [3],
    info: ["경남전지역 3단계"],
    name: "경남",
  },
  gwangju: {
    stage: [3],
    info: ["광주전지역 3단계"],
    name: "광주",
  },
  jeonnam: {
    stage: [3],
    info: ["전남전지역 3단계"],
    name: "전남",
  },
  busan: {
    stage: [3],
    info: ["부산전지역 3단계"],
    name: "부산",
  },
  ulsan: {
    stage: [3],
    info: ["울산전지역 3단계"],
    name: "울산",
  },
  jeju: {
    stage: [3],
    info: ["제주전지역 3단계"],
    name: "제주",
  },
};

//거리두기 단계별 정보
export const STAGEINFO = {
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
      main: "접종 완료자 포함 최대 8명(미접종자 최대 4명)",
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
};

// 시∙도별 인구수
export const POPULATION = {
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
};
