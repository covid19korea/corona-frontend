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

    let insertDot = (value) => {
        value = String(value);
        if (value.length <= 3) {
            return value;
        }
        return insertDot(value.slice(0, value.length - 3)) + ',' + value.slice(value.length - 3);
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

    useEffect(() => {
        function numberCounter(target_frame, target_number) {
            this.count = 0;
            this.diff = 0;
            this.target_count = target_number;
            this.target_frame = target_frame;
            this.timer = null;
            this.counter();
        };

        numberCounter.prototype.counter = function () {
            var self = this;
            this.diff = this.target_count - this.count;

            if (this.diff > 0) {
                self.count += Math.ceil(this.diff / 2);
            }

            this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            if (this.count < this.target_count) {
                this.timer = setTimeout(function () { self.counter(); }, 30);
            }
            else {
                clearTimeout(this.timer);
            }
        };

        if (menuOn) {
            let localBoxs = Array.from(document.querySelectorAll('.localBoxLevel'));

            for (let target of localBoxs) {
                let value = Number(target.innerHTML.split("").filter(v => v !== ",").join(""));
                new numberCounter(target, value);
            }
        }
    }, [menuOn, choiceOn]);

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