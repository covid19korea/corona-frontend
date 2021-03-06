import React from 'react';
import Header from '../common/Header';
import LiveClock from '../common/LiveClock';
import { CovidLocate,  KoreaBox, MainBox, NewCovid } from './styles';

const Main = ({
    covidLocate,
    covidOption,
    setCovidOption,
    insertDot,
    newConfirmedNum,
}) => {

    if (covidOption === "신규 확진자순") {
        covidLocate.sort((a, b) => Number(a.incDec) > Number(b.incDec) ? -1 : 1);
    }
    if (covidOption === "누적 확진자순") {
        covidLocate.sort((a, b) => Number(a.defCnt) > Number(b.defCnt) ? -1 : 1);
    }
    if (covidOption === "격리 해제자순") {
        covidLocate.sort((a, b) => Number(a.isolClearCnt) > Number(b.isolClearCnt) ? -1 : 1);
    }
    if (covidOption === "사망자순") {
        covidLocate.sort((a, b) => Number(a.deathCnt) > Number(b.deathCnt) ? -1 : 1);
    }

    return (
        <MainBox>
            <Header />
            <KoreaBox>
                <LiveClock />
                <NewCovid>
                    <div className="newCovid_tit">오늘 신규 확진자 수는</div>
                    <div className="newCovid_value">{newConfirmedNum}</div>
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
                                        <div className="covidLocate_dataItemBox">
                                            <div className="covidLocate_dataItem newCovid">
                                                <div className="covidLocate_dataItemTit">신규 확진자</div>
                                                <div className="covidLocate_dataItemValue">{insertDot(v.incDec)}</div>
                                            </div>
                                            <div className="covidLocate_dataItem cumulCovid">
                                                <div className="covidLocate_dataItemTit">누적 확진자</div>
                                                <div className="covidLocate_dataItemValue">{insertDot(v.defCnt)}</div>
                                            </div>
                                            <div className="covidLocate_dataItem releaseCovid">
                                                <div className="covidLocate_dataItemTit">격리 해제자</div>
                                                <div className="covidLocate_dataItemValue">{insertDot(v.isolClearCnt)}</div>
                                            </div>
                                            <div className="covidLocate_dataItem deadCovid">
                                                <div className="covidLocate_dataItemTit">사망자</div>
                                                <div className="covidLocate_dataItemValue">{insertDot(v.deathCnt)}</div>
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

export default Main;