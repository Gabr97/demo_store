"use client"
import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {

    function calculateTimeRemaining() {
        if (!targetDate) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;
        // console.log(difference)

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }
    useEffect(() => {
        if (targetDate) {
            const intervalId = setInterval(() => {
                setTimeRemaining(calculateTimeRemaining());
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [targetDate]);


    const [timeRemaining, setTimeRemaining] = useState({days: 40, hours: 0, minutes: 0, seconds: 0});

    if (timeRemaining !== null) {

        return (
            <div className='timer w-fit flex'>
                {/* <div>{timeRemaining.days}:</div> */}
                <div>{timeRemaining.hours}:</div>
                <div>{timeRemaining.minutes}:</div>
                <div>{timeRemaining.seconds}</div>
            </div>
        );
    }
}


export default Countdown;