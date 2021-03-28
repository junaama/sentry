import React, { useEffect, useMemo, useState } from 'react';

const calculateTimeLeft = (startDate) => {
    const difference = startDate - (new Date()).getTime();

    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};
Object.prototype.isempty = function (){
    return Object.keys(this).length == 0;
}
function CountdownTimer({ startDate }) {

    const initialTimeLeft = useMemo(() => calculateTimeLeft(startDate), []);
    const [timeLeft, setTimeLeft] = useState(initialTimeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTimeLeft = calculateTimeLeft(startDate);
            if (currentTimeLeft.isempty()) {
                clearInterval(interval)
            }
            setTimeLeft(currentTimeLeft);
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, []);


    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        return (
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
}

export default CountdownTimer;