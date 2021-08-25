
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import React from 'react';

const PercentCircle = ({ percentage }) => {
    return (
        <div style={{ width: 80, height: 80 }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                    textColor: 'white',
                    pathColor: '#9775fa',
                    textSize: '18px',
                })}
            />
        </div>
    );
};

export default PercentCircle;