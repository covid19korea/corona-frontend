import React from 'react';
import Header from '../common/Header';
import LiveClock from '../common/LiveClock';
import PercentCircle from '../common/PercentCircle';
import { MainBox, VaccineBox, VaccineMap, VaccineState } from './styles';
import CountUp from 'react-countup';

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
                <Header />
                <VaccineBox>
                    <LiveClock />
                    <VaccineState>
                        <div className="vaccine_tit">백신접종현황</div>
                        <div className="vaccine_lists">
                            <div className="vaccine_item">
                                <div className="vaccine_itemTit">전국 1차 접종자</div>
                                <div className="vaccine_num">
                                    <div className="vaccine_circle">
                                        <PercentCircle percentage={(allVaccine.firstCnt / population.total * 100).toFixed(2)} />
                                    </div>
                                    <div className="vaccine_data">
                                        <div className="vaccine_itemValue">{insertDot(allVaccine.firstCnt)}</div>
                                        <div className="vaccine_rate">
                                            <div className="vaccine_itemComp">{insertDot(allVaccine.firstCntUp)}</div>
                                            <img className="vaccineImg" src="/images/icons/icoUp.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="vaccine_item">
                                <div className="vaccine_itemTit">전국 접종 완료자</div>
                                <div className="vaccine_num">
                                    <div className="vaccine_circle">
                                        <PercentCircle percentage={(allVaccine.secondCnt / population.total * 100).toFixed(2)} />
                                    </div>
                                    <div className="vaccine_data">
                                        <div className="vaccine_itemValue">{insertDot(allVaccine.secondCnt)}</div>
                                        <div className="vaccine_rate">
                                            <div className="vaccine_itemComp">{insertDot(allVaccine.secondCntUp)}</div>
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
                                            (<div className="localBoxRate">{(anyVaccine[8].firstTot / population.gyeonggi * 100).toFixed(2)}%</div>)

                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[8].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[8].secondTot / population.gyeonggi * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[8].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox incheon">
                                <div className="localBoxTit">인천</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[3].firstTot / population.incheon * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[3].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[3].secondTot / population.incheon * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[3].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox gangwon">
                                <div className="localBoxTit">강원</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[9].firstTot / population.gangwon * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[9].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[9].secondTot / population.gangwon * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[9].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox seoul">
                                <div className="localBoxTit">서울</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[0].firstTot / population.seoul * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[0].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[0].secondTot / population.seoul * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[0].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox chungbuk">
                                <div className="localBoxTit">충북</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[10].firstTot / population.chungbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[10].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[10].secondTot / population.chungbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[10].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox gyeongbuk">
                                <div className="localBoxTit">경북</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[14].firstTot / population.gyeongbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[14].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[14].secondTot / population.gyeongbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[14].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox daegu">
                                <div className="localBoxTit">대구</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[2].firstTot / population.daegu * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[2].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[2].secondTot / population.daegu * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[2].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox daejeon">
                                <div className="localBoxTit">대전</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[5].firstTot / population.daejeon * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[5].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[5].secondTot / population.daejeon * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[5].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox sejong">
                                <div className="localBoxTit">세종</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[7].firstTot / population.sejong * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[7].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[7].secondTot / population.sejong * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[7].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox chungnam">
                                <div className="localBoxTit">충남</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[11].firstTot / population.chungnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[11].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[11].secondTot / population.chungnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[11].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox jeonbuk">
                                <div className="localBoxTit">전북</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[12].firstTot / population.jeonbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[12].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[12].secondTot / population.jeonbuk * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[12].secondTot} />)
                                        )
                                })
                            </div>
                            <div className="localBox gwangju">
                                <div className="localBoxTit">광주</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[4].firstTot / population.gwangju * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[4].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[4].secondTot / population.gwangju * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[4].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox jeonnam">
                                <div className="localBoxTit">전남</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[13].firstTot / population.jeonnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[13].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[13].secondTot / population.jeonnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[13].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox gyeongnam">
                                <div className="localBoxTit">경남</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[15].firstTot / population.gyeongnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[15].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[15].secondTot / population.gyeongnam * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[15].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox busan">
                                <div className="localBoxTit">부산</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[1].firstTot / population.busan * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[1].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[1].secondTot / population.busan * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[1].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox ulsan">
                                <div className="localBoxTit">울산</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[6].firstTot / population.ulsan * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[6].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[6].secondTot / population.ulsan * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[6].secondTot} />)
                                        )
                                }
                            </div>
                            <div className="localBox jeju">
                                <div className="localBoxTit">제주</div>
                                {
                                    menuOn === "1차 접종" ?
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[16].firstTot / population.jeju * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[16].firstTot} />)
                                        )
                                        :
                                        (choiceOn === "백분율" ?
                                            (<div className="localBoxRate">{(anyVaccine[16].secondTot / population.jeju * 100).toFixed(2)}%</div>)
                                            :
                                            (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[16].secondTot} />)
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
