import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Distance from '../../components/Distance';

const DistancePage = () => {
    const { isContact } = useSelector(({ contactData }) => ({
        isContact: contactData.contact
    }))

    const mapContent = document.querySelector('.distance_content');

    if (mapContent) {
        isContact ? (mapContent.style.zIndex = -1) : (mapContent.style.zIndex = 0);
    }

    const distance = {
        "gyeonggi": 4,
        "incheon": 4,
        "seoul": 4,
        "gangwon": 3,
        "chungbuk": 3,
        "sejong": 3,
        "daejeon": 4,
        "gyeongbuk": 3,
        "daegu": 3,
        "jeonbuk": 3,
        "chungnam": 3,
        "gyeongnam": 3,
        "gwangju": 3,
        "jeonnam": 3,
        "busan": 4,
        "ulsan": 3,
        "jeju": 4,
    };
    //경기,인천,서울,대전,부산,제주

    const areaInfo = {
        "gyeonggi": {
            stage: [4],
            info: ["경기전지역 4단계(21.8.23~9.5.)"],
            name: "경기"
        },
        "incheon": {
            stage: [3, 4],
            info: ["인천일부지역 4단계(21.8.23~9.5.)", "강화군·옹진군 3단계(21.8.23~9.5.)"],
            name: "인천"
        },
        "seoul": {
            stage: [4],
            info: ["서울전지역 4단계(21.8.23~9.5.)"],
            name: "서울"
        },
        "gangwon": {
            stage: [2, 3],
            info: ["강원일부지역 3단계(21.8.23~9.5.)", "태백시·홍천군·횡성군·영월군·평창군·화천군·양구군·인제군·고성군·양양군 2단계(21.8.9~8.22.)"],
            name: "강원"
        },
        "chungbuk": {
            stage: [3, 4],
            info: ["충북일부지역 3단계(21.8.23~9.5.)", "충주시 4단계(21.8.19~8.29.)", "괴산군 4단계(21.8.25~9.29.)"],
            name: "충북"
        },
        "sejong": {
            stage: [3],
            info: ["세종전지역 3단계(21.8.23~9.5.)"],
            name: "세종"
        },
        "daejeon": {
            stage: [4],
            info: ["대전전지역 4단계(21.8.23~9.5.)"],
            name: "대전"
        },
        "gyeongbuk": {
            stage: [1, 2, 3],
            info: ["경북일부지역 3단계(21.8.23~9.5.)", "문경시 2단계(21.8.23~9.5.)", "울진군 2단계(21.8.23~8.29.)", "의성군 3단계(21.8.21~8.27.)", "군위군·청송군·영양군·영덕군·청도군·고령군·성주군·예천군·봉화군·울릉군 1단계(21.8.23~9.5.)"],
            name: "경북"
        },
        "daegu": {
            stage: [3],
            info: ["대구전지역 3단계(21.8.23~9.5.)"],
            name: "대구"
        },
        "jeonbuk": {
            stage: [2, 3],
            info: ["전북 일부지역 3단계(21.8.23~9.5.)", "무주군(무풍면) 3단계(21.8.20~8.29.)", "김제시·남원시·정읍시·고창군·무주군(무풍면 제외)·부안군·순창군·임실군·장수군·진안군·완주군(혁신도시제외) 2단계(21.8.23~9.5.)"],
            name: "전북"
        },
        "chungnam": {
            stage: [3],
            info: ["충남전지역 3단계(21.8.23~9.5.)"],
            name: "충남"
        },
        "gyeongnam": {
            stage: [3, 4],
            info: ["경남일부지역 3단계(21.8.23~9.5.)", "김해시·창원시4단계(21.8.17~8.29.)", "함안군 3단계(21.8.23~9.5.)"],
            name: "경남"
        },
        "gwangju": {
            stage: [3],
            info: ["광주전지역 3단계(21.8.23~9.5.)"],
            name: "광주"
        },
        "jeonnam": {
            stage: [3],
            info: ["전남전지역 3단계(21.8.23~9.5.)"],
            name: "전남"
        },
        "busan": {
            stage: [4],
            info: ["부산전지역 4단계(21.8.23~9.5.)"],
            name: "부산"
        },
        "ulsan": {
            stage: [3],
            info: ["울산전지역 3단계(21.8.23~9.5.)"],
            name: "울산"
        },
        "jeju": {
            stage: [4],
            info: ["제주전지역 4단계(21.8.18~8.29.)"],
            name: "제주"
        },
    };

    const stageInfo = {
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
                main: "4명까지 모임 가능",
                sub: "(5인 이상 사적모임 금지)",
            },
            유흥: {
                main: "22시 이후 운영제한",
            },
            식당: {
                main: "22시 이후 포장·배달만 허용",
            },
            노래: {
                main: "22시 이후 운영제한",
            },
        },
        "4단계": {
            모임: {
                main: "18시 이후 2명까지 모임 가능",
                sub: "(3인 이상 사적모임 금지)",
                add: "18시 이전에는 4인까지 모임 가능",
            },
            유흥: {
                main: "집합금지",
            },
            식당: {
                main: "22시 이후 포장·배달만 허용",
            },
            노래: {
                main: "22시 이후 운영제한",
            },
        },
    }

    const [clickLocalBox, setClickLocalBox] = useState(null);
    const [clickStage, setClickStage] = useState(null);
    const [clickStageIdx, setClickStageIdx] = useState(null);

    const onClickLocalBox = (local) => {
        clickLocalBox === local ? setClickLocalBox(null) : setClickLocalBox(local)
        setClickStage(null);
        setClickStageIdx(null);
    }

    useEffect(() => {
        const distanceState = document.querySelector(".distanceState");
        const distanceSub = document.querySelector(".distance_subInfo");

        if (clickLocalBox) {
            distanceState.style.width = "1000px";

            setTimeout(() => {
                distanceSub.style.display = "block";
            }, 400);
        }
        else {
            distanceState.style.width = "650px";
            distanceSub.style.display = "none";
        }

    }, [clickLocalBox]);

    return (
        <Distance
            distance={distance}
            onClickLocalBox={onClickLocalBox}
            clickLocalBox={clickLocalBox}
            areaInfo={areaInfo}
            stageInfo={stageInfo}
            clickStage={clickStage}
            setClickStage={setClickStage}
            clickStageIdx={clickStageIdx}
            setClickStageIdx={setClickStageIdx}
        />
    );
};

export default DistancePage;