import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import Vaccine from '../../components/Vaccine';
import ReactGa from 'react-ga';
import {POPULATION} from '../../constants';
import { insertDot } from '../../utils';

const VaccinePage = () => {
    const [allVaccine, setAllVaccine] = useState(null);
    const [anyVaccine, setAnyVaccine] = useState(null);
    const [menuOn, setMenuOn] = useState("1차 접종");
    const [choiceOn, setChoiceOn] = useState("백분율");

    const { isContact } = useSelector(({ contactData }) => ({
        isContact: contactData.contact,
    }))

    if (allVaccine && anyVaccine) {
        const mapContent = document.querySelector('.vaccineMap_content');
        if (mapContent) {
            isContact ? (mapContent.style.zIndex = -1) : (mapContent.style.zIndex = 0);
        }
    };

    useEffect(() => {
        const loadVaccineAll = async () => {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/v1/data/inoculation`);
            setAllVaccine(response.data);
        }
        loadVaccineAll();
    }, []);

    useEffect(() => {
        const loadVaccineAny = async () => {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/v1/data/inoculation-region`);
            setAnyVaccine(response.data.list);
        }
        loadVaccineAny();
    }, []);

    useEffect(() => {
        ReactGa.pageview(window.location.pathname);
    }, []);

    return (
        <>
            {
                allVaccine && anyVaccine ?
                    <Vaccine
                        allVaccine={allVaccine}
                        anyVaccine={anyVaccine}
                        setMenuOn={setMenuOn}
                        menuOn={menuOn}
                        setChoiceOn={setChoiceOn}
                        choiceOn={choiceOn}
                        population={POPULATION}
                        insertDot={insertDot}
                    /> 
                    :
                    <LoadingSpinner />
            }
        </>
    );
};

export default withRouter(VaccinePage);