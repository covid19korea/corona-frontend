import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Korea from '../components/Korea';
import * as Keys from '../constants/index';
import { useSelector } from 'react-redux';


const KoreaContainer = () => {
    const [covidState, setCovidState] = useState(null);
    const [prevCovidState, setPrevCovidState] = useState(null);

    const [covidLocate, setCovidLocate] = useState([]);
    const [prevCovidLocate, setPrevCovidLocate] = useState([]);

    const [covidOption, setCovidOption] = useState("신규 확진자순");



    const { isContact } = useSelector(({ contactData }) => ({
        isContact: contactData.contact
    }))

    const mapContent = document.querySelector('.covidLocate_header');

    if (mapContent) {
        isContact ? (mapContent.style.zIndex = -1) : (mapContent.style.zIndex = 0);
    }


    // 현재 날짜 구하는 곳
    let today = new Date();

    let year = today.getFullYear();
    let month = ('0' + (today.getMonth() + 1)).slice(-2);
    let day = ('0' + today.getDate()).slice(-2);

    let curDate = year + month + day;

    // 어제  날짜 구하는 곳
    let yesterday = new Date(today.setDate(today.getDate() - 1));

    year = yesterday.getFullYear();
    month = ('0' + (yesterday.getMonth() + 1)).slice(-2);
    day = ('0' + yesterday.getDate()).slice(-2);

    let prevDate = year + month + day;



    if ((today.getHours() < 9) || (today.getHours() === 9 && today.getMinutes() < 3)) {

        //하루 전 날짜 구하는 곳
        let oneDayBeforeDay = new Date(today.setDate(today.getDate()));

        year = oneDayBeforeDay.getFullYear();
        month = ('0' + (oneDayBeforeDay.getMonth() + 1)).slice(-2);
        day = ('0' + oneDayBeforeDay.getDate()).slice(-2);

        curDate = year + month + day;


        // 이틀 전 날짜 구하는 곳
        let twoDayBeforeDay = new Date(today.setDate(today.getDate() - 1));

        year = twoDayBeforeDay.getFullYear();
        month = ('0' + (twoDayBeforeDay.getMonth() + 1)).slice(-2);
        day = ('0' + twoDayBeforeDay.getDate()).slice(-2);

        prevDate = year + month + day;
    }



    useEffect(() => {
        const loadCovidState = async () => {
            const response = await axios.get(`https://secret-ocean-49799.herokuapp.com/http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${Keys.COVID_STATE_AUTH_KEY}&pageNo=1&numOfRows=10&startCreateDt=${prevDate}&endCreateDt=${curDate}`);

            let XMLParser = require('react-xml-parser');
            let xml = new XMLParser().parseFromString(response.data);    // Assume xmlText contains the example XML

            let items = xml.children[1].children[0].children[0].children;
            let prevItems = xml.children[1].children[0].children[1].children;


            setCovidState(items);
            setPrevCovidState(prevItems);
        }
        loadCovidState();
    }, [curDate, prevDate]);


    useEffect(() => {
        const loadCovidLocate = async () => {
            const response = await axios.get(`https://secret-ocean-49799.herokuapp.com/http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${Keys.COVID_LOCATE_AUTH_KEY}&pageNo=1&numOfRows=10&startCreateDt=${prevDate}&endCreateDt=${curDate}`);

            let XMLParser = require('react-xml-parser');
            let xml = new XMLParser().parseFromString(response.data);    // Assume xmlText contains the example XML

            let locates = [];
            let prevLocates = [];

            const locateItems = xml.children[1].children[0].children;

            locateItems.map((v, index) => {
                if (index >= 1 && index <= 17) {
                    locates.push(v.children);
                }
                else if (index >= 20 && index <= 36) {
                    prevLocates.push(v.children);
                }
            });

            locates.forEach((v, index) => v["imgURL"] = `/images/area/area${index + 1}.png`);


            setCovidLocate(locates);
            setPrevCovidLocate(prevLocates);
            console.log("first");
        }
        loadCovidLocate();
    }, [curDate, prevDate]);

    let insertDot = (value) => {
        if (value.length <= 3) {
            return value;
        }
        return insertDot(value.slice(0, value.length - 3)) + ',' + value.slice(value.length - 3);
    };

    return (
        <>
            {
                covidState && prevCovidState && covidLocate && prevCovidLocate
                    ?
                    (
                        < Korea
                            covidState={covidState}
                            prevCovidState={prevCovidState}
                            covidLocate={covidLocate}
                            prevCovidLocate={prevCovidLocate}
                            covidOption={covidOption}
                            setCovidOption={setCovidOption}
                            insertDot={insertDot}
                        />
                    )
                    :
                    (
                        <LoadingSpinner />
                    )
            }
        </>

    );
};

export default KoreaContainer;
