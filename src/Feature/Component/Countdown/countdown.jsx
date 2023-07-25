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
          <div className='divcountdown font-extrabold font-Athiti'>
            <div className='text-6xl font-extrabold font-Athiti'>Ready for ITGG2023</div>
            <br></br>

            {/* <h1>Countdown to {targetDate.toDateString()}</h1> */}
            <p>เตรียมพบกับมหกรรมการแข่งขันที่เฟี้ยวฟ้าวที่สุดในไอทีลาดกระบังใน</p>
            

            <div className=" flex justify-center text-6xl pt-8 gap-12 flex-wrap">

              <p >{countdown.days}  วัน </p>
              <p >{countdown.hours} ชั่วโมง </p>
              <p >{countdown.minutes} นาที </p>
              <p >{countdown.seconds} วินาที </p>
            </div>
          </div>
        </>
      )}

    </div>

  );
};

export default Countdown;