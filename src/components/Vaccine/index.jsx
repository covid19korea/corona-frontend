import React from 'react';
import HeaderContainer from '../../container/HeaderContainer';
import LiveClock from '../common/LiveClock';
import PercentCircle from '../common/PercentCircle';
import { MainBox, VaccineBox, VaccineMap, VaccineState } from './styles';

const Vaccine =
    ({
        allVaccine,
        anyVaccine,
        setMenuOn,
        menuOn,
        setChoiceOn,
        choiceOn,
        population,
        insertDot,
    }) => {
        return (
            <MainBox>
                <HeaderContainer />
                <VaccineBox>
                    <LiveClock />
                    <VaccineState>
                        <div className="vaccine_tit">백신접종현황</div>
                        <div className="vaccine_lists">
                            <div className="vaccine_item">
                                <div className="vaccine_itemTit">전국 1차 접종자</div>
                                <div className="vaccine_num">
                                    <div className="vaccine_circle">
                                        <PercentCircle percentage={(allVaccine[2][1].value / population.total * 100).toFixed(2)} />
                                    </div>
                                    <div className="vaccine_data">
                                        <div className="vaccine_itemValue">{insertDot(allVaccine[2][1].value)}</div>
                                        <div className="vaccine_rate">
                                            <div className="vaccine_itemComp">{insertDot(allVaccine[0][1].value)}</div>
                                            <img className="vaccineImg" src="/images/icons/icoUp.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vaccine_item">

                                <div className="vaccine_itemTit">전국 접종 완료자</div>
                                <div className="vaccine_num">
                                    <div className="vaccine_circle">
                                        <PercentCircle percentage={(allVaccine[2][2].value / population.total * 100).toFixed(2)} />
                                    </div>
                                    <div className="vaccine_data">
                                        <div className="vaccine_itemValue">{insertDot(allVaccine[2][2].value)}</div>
                                        <div className="vaccine_rate">
                                            <div className="vaccine_itemComp">{insertDot(allVaccine[0][2].value)}</div>
                                            <img className="vaccineImg" src="/images/icons/icoUp.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </VaccineState>
                    <VaccineMap>
                        <div className="vaccineMap_tit">시·도별 백신접종현황</div>
                        <div className="vaccineMap_option">
                            <div className="vaccineMap_menulist">
                                <div className={menuOn === "1차 접종" ? "vaccineMap_menu menuOn" : "vaccineMap_menu"}>
                                    <div className="menuDot">·</div>
                                    <div className="menuTit" onClick={() => setMenuOn("1차 접종")}>1차 접종</div>
                                </div>
                                <div className={menuOn === "접종 완료" ? "vaccineMap_menu menuOn" : "vaccineMap_menu"}>
                                    <div className="menuDot">·</div>
                                    <div className="menuTit" onClick={() => setMenuOn("접종 완료")}>접종 완료</div>
                                </div>
                            </div>

                            <div className="vaccineMap_choicelist">
                                <div className={choiceOn === "백분율" ? "vaccineMap_choice choiceOn" : "vaccineMap_choice"} onClick={() => setChoiceOn("백분율")}>
                                    <div className="choiceTit ">백분율</div>
                                </div>
                                <div className={choiceOn === "수치화" ? "vaccineMap_choice choiceOn" : "vaccineMap_choice"} onClick={() => setChoiceOn("수치화")}>
                                    <div className="choiceTit">수치</div>
                                </div>
                            </div>
                        </div>
                        <div className="vaccineMap_content">
                            <div className="vaccineMap_img">
                                <img src="/images/logo/south.png" alt="" />
                            </div>
                            <div className="localBox gyeonggi">
                                <div className="localBoxTit">경기</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[8][2].value / population.gyeonggi * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[8][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[8][4].value / population.gyeonggi * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[8][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox incheon">
                                <div className="localBoxTit">인천</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[3][2].value / population.incheon * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[3][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[3][4].value / population.incheon * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[3][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox gangwon">
                                <div className="localBoxTit">강원</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[9][2].value / population.gangwon * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[9][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[9][4].value / population.gangwon * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[9][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox seoul">
                                <div className="localBoxTit">서울</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[0][2].value / population.seoul * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[0][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[0][4].value / population.seoul * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[0][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox chungbuk">
                                <div className="localBoxTit">충북</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[10][2].value / population.chungbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[10][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[10][4].value / population.chungbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[10][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox gyeongbuk">
                                <div className="localBoxTit">경북</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[14][2].value / population.gyeongbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[14][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[14][4].value / population.gyeongbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[14][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox daegu">
                                <div className="localBoxTit">대구</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[2][2].value / population.daegu * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[2][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[2][4].value / population.daegu * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[2][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox daejeon">
                                <div className="localBoxTit">대전</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[5][2].value / population.daejeon * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[5][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[5][4].value / population.daejeon * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[5][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox sejong">
                                <div className="localBoxTit">세종</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[7][2].value / population.sejong * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[7][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[7][4].value / population.sejong * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[7][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox chungnam">
                                <div className="localBoxTit">충남</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[11][2].value / population.chungnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[11][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[11][4].value / population.chungnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[11][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox jeonbuk">
                                <div className="localBoxTit">전북</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[12][2].value / population.jeonbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[12][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[12][4].value / population.jeonbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[12][4].value)}</div>)
                                        )
                                })
                            </div>
                            <div className="localBox gwangju">
                                <div className="localBoxTit">광주</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[4][2].value / population.gwangju * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[4][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[4][4].value / population.gwangju * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[4][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox jeonnam">
                                <div className="localBoxTit">전남</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[13][2].value / population.jeonnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[13][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[13][4].value / population.jeonnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[13][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox gyeongnam">
                                <div className="localBoxTit">경남</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[15][2].value / population.gyeongnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[15][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[15][4].value / population.gyeongnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[15][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox busan">
                                <div className="localBoxTit">부산</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[1][2].value / population.busan * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[1][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[1][4].value / population.busan * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[1][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox ulsan">
                                <div className="localBoxTit">울산</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[6][2].value / population.ulsan * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[6][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[6][4].value / population.ulsan * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[6][4].value)}</div>)
                                        )
                                }
                            </div>
                            <div className="localBox jeju">
                                <div className="localBoxTit">제주</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[16][2].value / population.jeju * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[16][2].value)}</div>)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[16][4].value / population.jeju * 100).toFixed(2)}%</div>)
                                            :
                                            (<div className="localBoxLevel">{insertDot(anyVaccine[16][4].value)}</div>)
                                        )
                                }
                            </div>
                        </div>
                    </VaccineMap>
                </VaccineBox >
            </MainBox >
        );
    };

export default Vaccine;



// https://nip.kdca.go.kr/irgd/cov19stats.do?list=all
// https://nip.kdca.go.kr/irgd/cov19stats.do?list=sido