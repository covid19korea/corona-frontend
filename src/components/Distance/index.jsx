import React from 'react';
import LiveClock from '../common/LiveClock';
import { MainBox, DistanceBox, DistanceState } from './styled';
import { IoAlertCircleOutline } from "react-icons/io5";
import Header from '../common/Header';

const Distance =
    ({
        distance,
        onClickLocalBox,
        clickLocalBox,
        areaInfo,
        stageInfo,
        clickStage,
        setClickStage,
        clickStageIdx,
        setClickStageIdx,
    }) => {
        return (
            <MainBox>
                <Header />
                <DistanceBox>
                    <LiveClock />
                    <DistanceState className="distanceState">
                        <div className="distance_mainInfo">
                            <div className="distance_header">
                                <div className="distance_tit">거리두기 단계</div>
                                <div className="distance_alert">
                                    <IoAlertCircleOutline className="distance_alertIcon" />
                                    <div className="distance_alertTxt">시·도를 클릭하시면 상세 현황을 확인할 수 있습니다.</div>
                                </div>
                            </div>
                            <div className="distance_content">
                                <div className="distance_img">
                                    <img src="/images/logo/south.png" alt="" />
                                </div>
                                <div className={clickLocalBox === "gyeonggi" ? "localBox gyeonggi menuOn" : "localBox gyeonggi"} onClick={() => onClickLocalBox("gyeonggi")}>
                                    <div className="localBoxTit">경기</div>
                                    <div className={`localBoxLevel level${distance.gyeonggi}`}>{distance.gyeonggi}</div>
                                </div>
                                <div className={clickLocalBox === "incheon" ? "localBox incheon menuOn" : "localBox incheon"} onClick={() => onClickLocalBox("incheon")}>
                                    <div className="localBoxTit">인천</div>
                                    <div className={`localBoxLevel level${distance.incheon}`}>{distance.incheon}</div>
                                </div>
                                <div className={clickLocalBox === "gangwon" ? "localBox gangwon menuOn" : "localBox gangwon"} onClick={() => onClickLocalBox("gangwon")}>
                                    <div className="localBoxTit">강원</div>
                                    <div className={`localBoxLevel level${distance.gangwon}`}>{distance.gangwon}</div>
                                </div>
                                <div className={clickLocalBox === "seoul" ? "localBox seoul menuOn" : "localBox seoul"} onClick={() => onClickLocalBox("seoul")}>
                                    <div className="localBoxTit">서울</div>
                                    <div className={`localBoxLevel level${distance.seoul}`}>{distance.seoul}</div>
                                </div>
                                <div className={clickLocalBox === "chungbuk" ? "localBox chungbuk menuOn" : "localBox chungbuk"} onClick={() => onClickLocalBox("chungbuk")}>
                                    <div className="localBoxTit">충북</div>
                                    <div className={`localBoxLevel level${distance.chungbuk}`}>{distance.chungbuk}</div>
                                </div>
                                <div className={clickLocalBox === "gyeongbuk" ? "localBox gyeongbuk menuOn" : "localBox gyeongbuk"} onClick={() => onClickLocalBox("gyeongbuk")}>
                                    <div className="localBoxTit">경북</div>
                                    <div className={`localBoxLevel level${distance.gyeongbuk}`}>{distance.gyeongbuk}</div>
                                </div>
                                <div className={clickLocalBox === "daegu" ? "localBox daegu menuOn" : "localBox daegu"} onClick={() => onClickLocalBox("daegu")}>
                                    <div className="localBoxTit">대구</div>
                                    <div className={`localBoxLevel level${distance.daegu}`}>{distance.daegu}</div>
                                </div>
                                <div className={clickLocalBox === "daejeon" ? "localBox daejeon menuOn" : "localBox daejeon"} onClick={() => onClickLocalBox("daejeon")}>
                                    <div className="localBoxTit">대전</div>
                                    <div className={`localBoxLevel level${distance.daejeon}`}>{distance.daejeon}</div>
                                </div>
                                <div className={clickLocalBox === "sejong" ? "localBox sejong menuOn" : "localBox sejong"} onClick={() => onClickLocalBox("sejong")}>
                                    <div className="localBoxTit">세종</div>
                                    <div className={`localBoxLevel level${distance.sejong}`}>{distance.sejong}</div>
                                </div>
                                <div className={clickLocalBox === "chungnam" ? "localBox chungnam menuOn" : "localBox chungnam"} onClick={() => onClickLocalBox("chungnam")}>
                                    <div className="localBoxTit">충남</div>
                                    <div className={`localBoxLevel level${distance.chungnam}`}>{distance.chungnam}</div>
                                </div>
                                <div className={clickLocalBox === "jeonbuk" ? "localBox jeonbuk menuOn" : "localBox jeonbuk"} onClick={() => onClickLocalBox("jeonbuk")}>
                                    <div className="localBoxTit">전북</div>
                                    <div className={`localBoxLevel level${distance.jeonbuk}`}>{distance.jeonbuk}</div>
                                </div>
                                <div className={clickLocalBox === "gwangju" ? "localBox gwangju menuOn" : "localBox gwangju"} onClick={() => onClickLocalBox("gwangju")}>
                                    <div className="localBoxTit">광주</div>
                                    <div className={`localBoxLevel level${distance.gwangju}`}>{distance.gwangju}</div>
                                </div>
                                <div className={clickLocalBox === "jeonnam" ? "localBox jeonnam menuOn" : "localBox jeonnam"} onClick={() => onClickLocalBox("jeonnam")}>
                                    <div className="localBoxTit">전남</div>
                                    <div className={`localBoxLevel level${distance.jeonnam}`}>{distance.jeonnam}</div>
                                </div>
                                <div className={clickLocalBox === "gyeongnam" ? "localBox gyeongnam menuOn" : "localBox gyeongnam"} onClick={() => onClickLocalBox("gyeongnam")}>
                                    <div className="localBoxTit">경남</div>
                                    <div className={`localBoxLevel level${distance.gyeongnam}`}>{distance.gyeongnam}</div>
                                </div>
                                <div className={clickLocalBox === "busan" ? "localBox busan menuOn" : "localBox busan"} onClick={() => onClickLocalBox("busan")}>
                                    <div className="localBoxTit">부산</div>
                                    <div className={`localBoxLevel level${distance.busan}`}>{distance.busan}</div>
                                </div>
                                <div className={clickLocalBox === "ulsan" ? "localBox ulsan menuOn" : "localBox ulsan"} onClick={() => onClickLocalBox("ulsan")}>
                                    <div className="localBoxTit">울산</div>
                                    <div className={`localBoxLevel level${distance.ulsan}`}>{distance.ulsan}</div>
                                </div>
                            </div>
                        </div>
                        <div className="distance_subInfo">
                            <div className="distance_subInfoHeader">
                                {
                                    clickLocalBox && (
                                        <>
                                            <div className="subInfoHeaderTit">
                                                {areaInfo[clickLocalBox].name}
                                            </div>
                                            <div className="subInfoHeaderStage">
                                                {distance[clickLocalBox]}단계
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                            <div className="distance_areaInfo">
                                {
                                    clickLocalBox &&
                                    areaInfo[clickLocalBox].info.map(info =>
                                        <div className="distance_areaBox">
                                            <div className="distance_areaDot">*</div>
                                            <div className="distance_areaItem">{info}</div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="distance_stageInfo">
                                {
                                    clickLocalBox &&
                                    <>
                                        <div className="stageInfo_name">{areaInfo[clickLocalBox].name}지역은 </div>
                                        <div className="stageInfo_stagelist">
                                            {areaInfo[clickLocalBox].stage.map((v, index) => <div className={clickStageIdx === index ? "stagelist_btn stageOn" : "stagelist_btn"} onClick={() => { setClickStage(`${v}단계`); setClickStageIdx(index) }}>{v}단계</div>)}
                                        </div>
                                        <div className="stageInfo_txt">지역을 포함하고 있습니다.</div>
                                    </>
                                }

                            </div>
                            {
                                clickStage &&
                                <div className="distance_local_lists">
                                    <div className="distance_local_title">주요 방역수칙*</div>
                                    <div className="distance_local_list">
                                        <div className="distance_local_menu">
                                            <img src="/images/icons/meeting.png" alt="" />
                                            <div>모임</div>
                                        </div>
                                        <div className="distance_local_content">
                                            <div>{stageInfo[clickStage].모임.main}</div>
                                            <div>{stageInfo[clickStage].모임.sub}</div>
                                        </div>
                                    </div>
                                    <div className="distance_local_list">
                                        <div className="distance_local_menu">
                                            <img src="/images/icons/cafe.png" alt="" />
                                            <div>식당·카페</div>
                                        </div>
                                        <div className="distance_local_content">
                                            <div>{stageInfo[clickStage].식당.main}</div>
                                        </div>
                                    </div>

                                    <div className="distance_local_list">
                                        <div className="distance_local_menu">
                                            <img src="/images/icons/club.png" alt="" />
                                            <div>유흥시설</div>
                                        </div>
                                        <div className="distance_local_content">
                                            <div>{stageInfo[clickStage].유흥.main}</div>
                                        </div>
                                    </div>

                                    <div className="distance_local_list">
                                        <div className="distance_local_menu">
                                            <img src="/images/icons/micro.png" alt="" />
                                            <div>노래(코인) 연습장</div>
                                        </div>
                                        <div className="distance_local_content">
                                            <div>{stageInfo[clickStage].노래.main}</div>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </DistanceState>
                </DistanceBox>
            </MainBox >
        );
    };

export default Distance;
