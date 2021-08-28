import React from 'react';
import { LiveClockBox } from './styles';
import Clock from 'react-live-clock';

const LiveClock = () => {
    return (
        <LiveClockBox>
            <div className="clockTxtStart">현재 시각은</div>
            <Clock className="time" format={'YYYY년 MM월 DD일 HH:mm:ss'} ticking={true} timezone={"Asia/SEoul"} />
            <div className="clockTxtEnd">입니다.</div>
        </LiveClockBox>
    );
};
export default LiveClock;