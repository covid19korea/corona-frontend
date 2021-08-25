import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Vaccine from '../components/Vaccine';
import { useSelector } from 'react-redux';

const VaccineContainer = () => {
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
        if (value.length <= 3) {
            return value;
        }
        return insertDot(value.slice(0, value.length - 3)) + ',' + value.slice(value.length - 3);
    };



    const population = {
        total: 51672400,
        seoul: 9565990,
        busan: 3364358,
        daegu: 2397646,
        incheon: 2936367,
        gwangju: 1442647,
        daejeon: 1456107,
        ulsan: 1126369,
        sejong: 362995,
        gyeonggi: 13500688,
        gangwon: 1535530,
        chungbuk: 1597503,
        chungnam: 2117400,
        jeonbuk: 1794345,
        jeonnam: 1840921,
        gyeongbuk: 2632401,
        gyeongnam: 3325840,
        jeju: 675293,
    }

    useEffect(() => {
        const loadVaccineAll = async () => {
            const response = await axios.get('https://secret-ocean-49799.herokuapp.com/https://nip.kdca.go.kr/irgd/cov19stats.do?list=all');

            let XMLParser = require('react-xml-parser');
            let xml = new XMLParser().parseFromString(response.data);    // Assume xmlText contains the example XML

            let items = xml.children[0].children[1].children;
            let res = items.map(v => v.children);

            setAllVaccine(res);
        }

        const loadVaccineAny = async () => {
            const response = await axios.get('https://secret-ocean-49799.herokuapp.com/https://nip.kdca.go.kr/irgd/cov19stats.do?list=sido');

            let XMLParser = require('react-xml-parser');
            let xml = new XMLParser().parseFromString(response.data);    // Assume xmlText contains the example XML

            let items = xml.children[0].children[1].children;

            let res = items.map(v => v.children);

            setAnyVaccine(res);
        }

        loadVaccineAll();
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

export default VaccineContainer;


// https://nip.kdca.go.kr/irgd/cov19stats.do?list=all
// https://nip.kdca.go.kr/irgd/cov19stats.do?list=sido