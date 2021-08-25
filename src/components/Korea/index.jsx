import React, { useEffect } from 'react';
import HeaderContainer from '../../container/HeaderContainer';
import LiveClock from '../common/LiveClock';
import { CovidLocate, CovidState, KoreaBox, MainBox, NewCovid } from './styles';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import axios from 'axios';


const Korea = ({
    covidState,
    prevCovidState,
    covidLocate,
    prevCovidLocate,
    covidOption,
    setCovidOption,
    insertDot,
}) => {

    if (covidOption === "신규 확진자순") {
        covidLocate.sort((a, b) => Number(a[6].value) > Number(b[6].value) ? -1 : 1);
    }
    else if (covidOption === "누적 확진자순") {
        covidLocate.sort((a, b) => Number(a[2].value) > Number(b[2].value) ? -1 : 1);
    }
    else if (covidOption === "격리 해제자순") {
        covidLocate.sort((a, b) => Number(a[7].value) > Number(b[7].value) ? -1 : 1);
    }
    else {
        covidLocate.sort((a, b) => Number(a[1].value) > Number(b[1].value) ? -1 : 1);
    }

    return (
        <MainBox>
            <HeaderContainer />
            <KoreaBox>
                <LiveClock />
                <CovidState>
                    <div className="covidState_tit">감염현황</div>
                    <div className="covidState_lists">
                        <div className="covidState_item">
                            <div className="covidState_itemTit">확진자</div>
                            <div className="covidState_itemValue">{insertDot(covidState[7].value)}</div>
                            <div className="covidState_rate">
                                <div className="covidState_itemComp">{insertDot(String(Math.abs(covidState[7].value - prevCovidState[7].value)))}</div>
                                {
                                    covidState[7].value - prevCovidState[7].value > 0 ?
                                        (<img className="covidState_img" src="/images/icons/icoUp.png" alt="" />)
                                        :
                                        (<img className="covidState_img" src="/images/icons/icoDown.png" alt="" />)
                                }
                            </div>
                        </div>
                        <div className="covidState_item">
                            <div className="covidState_itemTit">격리 해제자</div>
                            <div className="covidState_itemValue">{insertDot(covidState[4].value)}</div>
                            <div className="covidState_rate">
                                <div className="covidState_itemComp">{insertDot(String(Math.abs(covidState[4].value - prevCovidState[4].value)))}</div>
                                {
                                    covidState[4].value - prevCovidState[4].value > 0 ?
                                        (<img className="covidState_img" src="/images/icons/icoUp.png" alt="" />)
                                        :
                                        (<img className="covidState_img" src="/images/icons/icoDown.png" alt="" />)
                                }
                            </div>
                        </div>
                        <div className="covidState_item">
                            <div className="covidState_itemTit">검사 진행자</div>
                            <div className="covidState_itemValue">{insertDot(covidState[8].value)}</div>
                            <div className="covidState_rate">
                                <div className="covidState_itemComp">{insertDot(String(Math.abs(covidState[8].value - prevCovidState[8].value)))}</div>
                                {
                                    covidState[8].value - prevCovidState[8].value > 0 ?
                                        (<img className="covidState_img" src="/images/icons/icoUp.png" alt="" />)
                                        :
                                        (<img className="covidState_img" src="/images/icons/icoDown.png" alt="" />)
                                }
                            </div>
                        </div>
                        <div className="covidState_item">
                            <div className="covidState_itemTit">치료중 환자</div>
                            <div className="covidState_itemValue">{insertDot(covidState[3].value)}</div>
                            <div className="covidState_rate">
                                <div className="covidState_itemComp">{insertDot(String(Math.abs(covidState[3].value - prevCovidState[3].value)))}</div>
                                {
                                    covidState[3].value - prevCovidState[3].value > 0 ?
                                        (<img className="covidState_img" src="/images/icons/icoUp.png" alt="" />)
                                        :
                                        (<img className="covidState_img" src="/images/icons/icoDown.png" alt="" />)
                                }
                            </div>
                        </div>
                        <div className="covidState_item">
                            <div className="covidState_itemTit">사망자</div>
                            <div className="covidState_itemValue">{insertDot(covidState[6].value)}</div>
                            <div className="covidState_rate">
                                <div className="covidState_itemComp">{insertDot(String(Math.abs(covidState[6].value - prevCovidState[6].value)))}</div>
                                {
                                    covidState[6].value - prevCovidState[6].value > 0 ?
                                        (<img className="covidState_img" src="/images/icons/icoUp.png" alt="" />)
                                        :
                                        (<img className="covidState_img" src="/images/icons/icoDown.png" alt="" />)
                                }
                            </div>
                        </div>
                    </div>
                </CovidState>
                <NewCovid>
                    <div className="newCovid_tit">오늘 신규 확진자 수는</div>
                    <div className="newCovid_value">{insertDot(String(covidState[7].value - prevCovidState[7].value))}</div>
                    <div className="newCovid_tit">명 입니다.</div>
                </NewCovid>
                <CovidLocate>
                    <div className="covidLocate_header">
                        <div className="covidLocate_tit">시·도별 감염현황</div>
                        <select name="covidSort" className="covidLocate_option" onChange={(e) => { setCovidOption(e.target.value) }}>
                            <option value="신규 확진자순">신규 확진자순</option>
                            <option value="누적 확진자순">누적 확진자순</option>
                            <option value="격리 해제자순">격리 해제자순</option>
                            <option value="사망자순">사망자순</option>

                        </select>
                    </div>


                    <div className="covidLocate_lists">
                        {
                            covidLocate &&
                            covidLocate.map((v, index) => (
                                <div className="covidLocate_item" key={index}>
                                    <div className="covidLocate_img">
                                        <img src={v.imgURL} alt="" />
                                    </div>
                                    <div className="covidLocate_dataLists">
                                        {/* <div className="covidLocate_name">{v[3].value}</div> */}

                                        <div className="covidLocate_dataItemBox">

                                            <div className="covidLocate_dataItem newCovid">
                                                <div className="covidLocate_dataItemTit">신규 확진자</div>
                                                <div className="covidLocate_dataItemValue">{insertDot(v[6].value)}</div>
                                            </div>
                                            <div className="covidLocate_dataItem cumulCovid">
                                                <div className="covidLocate_dataItemTit">누적 확진자</div>
                                                <div className="covidLocate_dataItemValue">{insertDot(v[2].value)}</div>
                                            </div>
                                            <div className="covidLocate_dataItem releaseCovid">
                                                <div className="covidLocate_dataItemTit">격리 해제자</div>
                                                <div className="covidLocate_dataItemValue">{insertDot(v[7].value)}</div>
                                            </div>
                                            <div className="covidLocate_dataItem deadCovid">
                                                <div className="covidLocate_dataItemTit">사망자</div>
                                                <div className="covidLocate_dataItemValue">{insertDot(v[1].value)}</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </CovidLocate>
            </KoreaBox>
        </MainBox >
    );
};

export default Korea;


/*
DECIDE_CNT	확진자 수 -> index: 7
CLEAR_CNT	격리해제 수 -> index: 4
EXAM_CNT	검사진행 수 -> index: 8
DEATH_CNT	사망자 수 -> index: 6
CARE_CNT	치료중 환자 수 -> index: 3
RESUTL_NEG_CNT	결과 음성 수 -> index: 9
ACC_EXAM_CNT	누적 검사 수 -> index: 1
ACC_EXAM_COMP_CNT	누적 검사 완료 수 -> index: 2

*/

/*
DEATH_CNT	사망자 수 -> index : 1              -> 쓸 예정 Clear
GUBUN	시도명(한글) -> index : 3
GUBUN_CN	시도명(중국어)  -> index : 4
GUBUN_EN	시도명(영어)    -> index : 5
INC_DEC	전일대비 증감 수    -> index : 6              -> 쓸 예정 clear
ISOL_CLEAR_CNT	격리 해제 수    -> index : 7              -> 쓸 예정 clear
DEF_CNT	확진자 수   -> index : 2              -> 쓸 예정  clear
ISOL_ING_CNT	격리중 환자수   -> index : 8              -> 쓸 예정
OVER_FLOW_CNT	해외유입 수     -> index : 10
LOCAL_OCC_CNT	지역발생 수     -> index : 9

*/
