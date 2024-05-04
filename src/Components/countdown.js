import React, { useState, useEffect } from 'react';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date("2024-05-09T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60  * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className='flex gap-3'>
      
      {timeLeft.days > 0 && (
        <div className='flex flex-col text-md items-center'>
            Days{' '}
          <span className='font-semibold text-2xl'>{timeLeft.days}</span> 
        </div>
      )}
      {timeLeft.hours > 0 && (
        <div className='flex flex-col text-md items-center'>
            Hours{' '}
          <span className='font-semibold text-2xl'>{timeLeft.hours}</span> 
        </div>
      )}
      {timeLeft.minutes > 0 && (
        <div className='flex flex-col text-md items-center'>
            Minutes{' '}
          <span className='font-semibold text-2xl'>{timeLeft.minutes}</span> 
        </div>
      )}
      <div className='flex flex-col text-md items-center'>
      Seconds{' '}
        <span className='font-semibold text-2xl'>{timeLeft.seconds}</span> 
      </div>
    </div>
  );
}

export default Countdown;
