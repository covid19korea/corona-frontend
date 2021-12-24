import React from 'react';
import LiveClock from '../common/LiveClock';
import { MainBox, DistanceBox, DistanceState } from './styled';
import { IoAlertCircleOutline } from "react-icons/io5";
import Header from '../common/Header';
import { LISTS } from '../../constants';

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
                                {
                                    LISTS.areaList.map(area => 
                                        <div className={clickLocalBox === `${area.engName}` ? `localBox menuOn ${area.engName}` : `localBox ${area.engName}`} onClick={() => onClickLocalBox(`${area.engName}`)}>
                                            <div className="localBoxTit">{area.korName}</div>
                                            <div className={`localBoxLevel level${distance[area.engName]}`}>{distance[area.engName]}</div>
                                        </div>
                                    )
                                }
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
