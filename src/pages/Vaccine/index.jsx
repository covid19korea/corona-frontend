import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import Vaccine from '../../components/vaccine';
import { SERVER_URL } from '../../constants';
import { population } from './data';

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
            const response = await axios.get(`${SERVER_URL}/v1/data/inoculation`);
            setAllVaccine(response.data);
        }
        loadVaccineAll();
    }, []);

    useEffect(() => {
        const loadVaccineAny = async () => {
            const response = await axios.get(`${SERVER_URL}/v1/data/inoculation-region`);
            setAnyVaccine(response.data.list);
        }
        loadVaccineAny();
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
                allVaccine && anyVaccine ?
                    (
                        < Vaccine
                            allVaccine={allVaccine}
                            anyVaccine={anyVaccine}
                            setMenuOn={setMenuOn}
                            menuOn={menuOn}
                            setChoiceOn={setChoiceOn}
                            choiceOn={choiceOn}
                            population={population}
                            insertDot={insertDot}
                        />)
                    :
                    (
                        <LoadingSpinner />
                    )
            }
        </>
    );
};

export default VaccinePage;