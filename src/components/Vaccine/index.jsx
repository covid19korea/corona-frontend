import React from 'react';
import Header from '../common/Header';
import LiveClock from '../common/LiveClock';
import PercentCircle from '../common/PercentCircle';
import { MainBox, VaccineBox, VaccineMap, VaccineState } from './styles';
import CountUp from 'react-countup';
import { LISTS } from '../../constants';

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
                            {
                                LISTS.areaList.map(area=>
                                    <div className={`localBox ${area.engName}`} >
                                        <div className="localBoxTit">{area.korName}</div>
                                        {
                                            menuOn === "1차 접종" ?
                                                (choiceOn === "백분율" ?
                                                    (<div className="localBoxRate">{(anyVaccine[area.position].firstTot / population[area.engName]  * 100).toFixed(2)}%</div>)
        
                                                    :
                                                    (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[area.position].firstTot} />)
                                                )
                                                :
                                                (choiceOn === "백분율" ?
                                                    (<div className="localBoxRate">{(anyVaccine[area.position].secondTot / population[area.engName] * 100).toFixed(2)}%</div>)
                                                    :
                                                    (<CountUp className="localBoxLevel" duration={1.5} end={anyVaccine[area.position].secondTot} />)
                                                )
                                        }
                                    </div>)
                            }
                        </div>
                    </VaccineMap>
                </VaccineBox >
            </MainBox >
        );
    };

export default Vaccine;
