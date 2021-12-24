import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import Main from '../../components/main';
import ReactGa from 'react-ga'
import { insertDot } from '../../utils';

ReactGa.initialize(process.env.GOOGLE_ANALYTICS_KEY);

const MainPage = () => {
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
        const loadCovidLocate = async () => {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/v1/data/infection-region`);
            const locates = [];

            response.data.list.forEach((v, index) => {
                index >= 1 && index <= 17 && locates.push(v);
            });
            locates.forEach((v, index) => v["imgURL"] = `/images/area/area${index + 1}.png`);

            setCovidLocate(locates);
            setNewConfiremdNum(response.data.list[18].incDec)
        }
        loadCovidLocate();
    }, []);


    useEffect(() => {
        ReactGa.pageview(window.location.pathname);
    }, []);

    return (
        <>
            {
                covidLocate && newConfirmedNum
                    ?
                        <Main
                            covidLocate={covidLocate}
                            covidOption={covidOption}
                            newConfirmedNum={newConfirmedNum}
                            setCovidOption={setCovidOption}
                            insertDot={insertDot} />
                    :
                    (<LoadingSpinner />)
            }
        </>
    );
};

export default withRouter(MainPage);