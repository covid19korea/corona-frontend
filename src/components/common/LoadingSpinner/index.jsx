import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { LoadingSpinnerBox } from './styles';

const LoadingSpinner = () => {
    return (
        <LoadingSpinnerBox>
            <div className="LoaderBox">
                <Loader
                    type="ThreeDots"
                    color="black"
                    height={100}
                    width={100}
                    timeout={100000} />
                <div className="LoaderTxt">코로나 바이러스 퇴치중<span>😷</span>...</div>
                <div className="LoaderTxt">잠시만 기다려주세요~!</div>
            </div>
        </LoadingSpinnerBox>
    );
};

export default LoadingSpinner;