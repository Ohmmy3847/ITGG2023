import React, { useState, useEffect } from 'react';
import Home from "../Home/Home"
import "./countdown.css"

function Countdown() {
  const targetDate = new Date('2023-7-23'); // Replace this with your specific target date
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [CountdownReady, setCountdownReady] = useState(false);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;
      
      if (timeDifference <= 0) {
        // Target date has passed
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setCountdownReady(true);

      } else {
        // Calculate remaining time
        const oneSecond = 1000;
        const oneMinute = oneSecond * 60;
        const oneHour = oneMinute * 60;
        const oneDay = oneHour * 24;

        const days = Math.floor(timeDifference / oneDay);
        const hours = Math.floor((timeDifference % oneDay) / oneHour);
        const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
        const seconds = Math.floor((timeDifference % oneMinute) / oneSecond);

        setCountdown({ days, hours, minutes, seconds });
        setCountdownReady(true);
      }
    };

    const interval = setInterval(calculateCountdown, 1000);
    

    return () => clearInterval(interval);
  }, []);


  if (!CountdownReady) {
    return <>
    <div className='divcountdown'>
      <p>Loading...</p>

    </div>
    </>
  }
  return (
    <div>
      {(countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0) ? (
        <Home/>
      ) : (
        <>
          <div className='divcountdown font-bold font-Athiti '>
            <div className='text-6xl font-bold font-Athit'>IT TOURNAMENT</div>
            <div className='text-6xl font-bold font-Athiti mt-12'>GATE GAME 2023</div>
            <br></br>

            {/* <h1>Countdown to {targetDate.toDateString()}</h1> */}
           
            

            <div className=" flex justify-center text-8xl mt-24 gap-36 flex-wrap">
              <div >
              <p className=' flex justify-center'>{formatNumberWithLeadingZero(countdown.days)}</p>
              <p className='flex justify-center text-base pt-4'>Days</p>
              </div>
              <div>
              <p className=' flex justify-center'>{formatNumberWithLeadingZero(countdown.hours)}</p>
              <p className='flex justify-center text-base pt-4'>Hours</p>
              </div>
              <div>
              <p className=' flex justify-center'>{formatNumberWithLeadingZero(countdown.minutes)}</p>
              <p className='flex justify-center text-base pt-4'>Minutes</p>
              </div>
              <div>
              <p className=' flex justify-center'>{formatNumberWithLeadingZero(countdown.seconds)}</p>
              <p className='flex justify-center text-base pt-4'>Seconds</p>
              </div>
              
              
            </div>
            <div className=" flex justify-center text-3xl mt-12 gap-12 flex-wrap">เตรียมพบกับมหกรรมการแข่งขันที่เฟี้ยวฟ้าวที่สุดในไอทีลาดกระบังใน</div>
            
          </div>
        </>
      )}

    </div>

  );
};
const formatNumberWithLeadingZero = (number) => {
  return number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  // Alternatively, you can use string formatting:
  // return number < 10 ? `0${number}` : `${number}`;
};
export default Countdown;