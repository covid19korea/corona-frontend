import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import Main from '../../components/main';
import { SERVER_URL } from '../../constants';

const MainPage = () => {
    const [covidState, setCovidState] = useState(null);
    const [covidLocate, setCovidLocate] = useState([]);
    const [newConfirmedNum, setNewConfiremdNum] = useState(null);
    const [covidOption, setCovidOption] = useState("신규 확진자순");

    const { isContact } = useSelector(({ contactData }) => ({
        isContact: contactData.contact
    }))

    const mapContent = document.querySelector('.covidLocate_header');
    if (mapContent) {
        isContact ? (mapContent.style.zIndex = -1) : (mapContent.style.zIndex = 0);
    }

    useEffect(() => {
        const loadCovidState = async () => {
            const response = await axios.get(`${SERVER_URL}/v1/data/infection`);
            setCovidState(response.data);
        }
        loadCovidState();
    }, []);

    useEffect(() => {
        const loadCovidLocate = async () => {
            const response = await axios.get(`${SERVER_URL}/v1/data/infection-region`);
            let locates = [];

            response.data.list.forEach((v, index) => {
                index >= 1 && index <= 17 && locates.push(v);
            });
            locates.forEach((v, index) => v["imgURL"] = `/images/area/area${index + 1}.png`);

            setCovidLocate(locates);
            setNewConfiremdNum(response.data.list[18].incDec)
        }
        loadCovidLocate();
    }, []);

    let insertDot = (value) => {
        value = String(value);
        if (value.length <= 3) {
            return value;
        }
        return insertDot(value.slice(0, value.length - 3)) + ',' + value.slice(value.length - 3);
    };

    return (
        <>
            {
                covidState && covidLocate && newConfirmedNum
                    ?
                    (
                        <Main
                            covidState={covidState}
                            covidLocate={covidLocate}
                            covidOption={covidOption}
                            newConfirmedNum={newConfirmedNum}
                            setCovidOption={setCovidOption}
                            insertDot={insertDot} />
                    )
                    :
                    (<LoadingSpinner />)
            }
        </>

    );
};

export default MainPage;