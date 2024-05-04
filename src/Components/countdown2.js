import React, { useState, useEffect } from 'react';

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date("2024-05-25T00:00:00") - +new Date();
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
        <div className='flex flex-col bg-white rounded-full text-black p-3 px-6 text-md items-center'>
            
          <span className='font-semibold text-2xl'>{timeLeft.days}</span> 
          Days{' '}
        </div>
      )}
      {timeLeft.hours > 0 && (
        <div className='flex flex-col text-md items-center bg-white rounded-full text-black p-2 px-5 '>
           
          <span className='font-semibold text-2xl'>{timeLeft.hours}</span> 
          Hours{' '}
        </div>
      )}
      {timeLeft.minutes > 0 && (
        <div className='flex flex-col text-md items-center  bg-white rounded-full text-black p-2 px-3'>
           
          <span className='font-semibold text-2xl'>{timeLeft.minutes}</span> 
          Minutes{' '}
        </div>
      )}
      <div className='flex flex-col text-md items-center bg-white rounded-full text-black p-2 px-3'>
    
        <span className='font-semibold text-2xl'>{timeLeft.seconds}</span> 
        Seconds{' '}
      </div>
    </div>
  );
}

export default CountDown;
