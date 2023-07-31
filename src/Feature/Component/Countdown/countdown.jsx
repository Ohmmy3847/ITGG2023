import React, { useState, useEffect } from 'react';

import "./countdown.css"


function Countdown() {
  const targetDate = new Date('2023-08-19T00:00:00.000Z'); // Replace this with your specific target date
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
      
        <>
          <div className='text-white font-bold md:mt-20 mt-8'>
            

            <div className=" flex justify-center sm:text-3xl md:text-4xl text-xl md:gap-24 lg:gap-28 lg:text-5xl xl:gap-32 xl:text-6xl gap-6 flex-wrap ">
              <div >
              <p className=' flex justify-center font-goblin xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl '>{formatNumberWithLeadingZero(countdown.days)}</p>
              <p className='flex justify-center  pt-4 font-goblin'>Days</p>
              </div>
              <div>
              <p className=' flex justify-center font-goblin xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>{formatNumberWithLeadingZero(countdown.hours)}</p>
              <p className='flex justify-center  pt-4 font-goblin'>Hours</p>
              </div>
              <div>
              <p className=' flex justify-center font-goblin xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>{formatNumberWithLeadingZero(countdown.minutes)}</p>
              <p className='flex justify-center  pt-4 font-goblin'>Minutes</p>
              </div>
              <div>
              <p className=' flex justify-center font-goblin xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>{formatNumberWithLeadingZero(countdown.seconds)}</p>
              <p className='flex justify-center  pt-4 font-goblin'>Seconds</p>
              </div>
              
              
            </div>
            
            
          </div>
          
        </>
      

    </div>

  );
};
const formatNumberWithLeadingZero = (number) => {
  return number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
  // Alternatively, you can use string formatting:
  // return number < 10 ? `0${number}` : `${number}`;
};
export default Countdown;