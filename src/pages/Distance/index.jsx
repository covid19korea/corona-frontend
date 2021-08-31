import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { areaInfo, distance, stageInfo } from './data';
import ReactGa from 'react-ga'
import Distance from '../../components/Distance';

const DistancePage = () => {
    const [clickLocalBox, setClickLocalBox] = useState(null);
    const [clickStage, setClickStage] = useState(null);
    const [clickStageIdx, setClickStageIdx] = useState(null);

    const { isContact } = useSelector(({ contactData }) => ({
        isContact: contactData.contact,
    }));

    const mapContent = document.querySelector('.distance_content');
    if (mapContent) {
        isContact ? (mapContent.style.zIndex = -1) : (mapContent.style.zIndex = 0);
    }

    const onClickLocalBox = (local) => {
        clickLocalBox === local ? setClickLocalBox(null) : setClickLocalBox(local)
        setClickStage(null);
        setClickStageIdx(null);
    }

    useEffect(() => {
        const distanceState = document.querySelector(".distanceState");
        const distanceSub = document.querySelector(".distance_subInfo");

        if (clickLocalBox) {
            distanceState.style.width = "1000px";
            setTimeout(() => {
                distanceSub.style.display = "block";
            }, 400);
        }
        else {
            distanceState.style.width = "650px";
            distanceSub.style.display = "none";
        }
    }, [clickLocalBox]);

    useEffect(() => {
        ReactGa.pageview(window.location.pathname);
    }, []);

    return (
        <Distance
            distance={distance}
            onClickLocalBox={onClickLocalBox}
            clickLocalBox={clickLocalBox}
            areaInfo={areaInfo}
            stageInfo={stageInfo}
            clickStage={clickStage}
            setClickStage={setClickStage}
            clickStageIdx={clickStageIdx}
            setClickStageIdx={setClickStageIdx}
        />
    );
};

export default withRouter(DistancePage);