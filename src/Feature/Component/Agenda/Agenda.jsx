import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Agenda.css"
function Agenda() {
  
  const [filterdata, setFilterdata] = useState([])
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [info, setinfo] = useState([])
  const [datas, setDatas] = useState([])
  const [uniqueDates, setUniqueDates] = useState([]);
  async function fetchmyapi() {
      try {
          let { data } = await axios('https://itgg-core.iservkmitl.tech/api/v1/lives')
          
          setDatas(data.items)
      }
      catch (e) {
          console.log(e)
      }
  }
  const dateActivity = (date) => {
    setFilterdata(datas.filter(item => item.Date === date))
   
    
  }
  function comparetimeandDate(a, b) {
    const dateA = new Date(a.Date.replace(/(\d{2})\/(\d{2})/, "$2/$1") + " " + a.Content.Time);
    const dateB = new Date(b.Date.replace(/(\d{2})\/(\d{2})/, "$2/$1") + " " + b.Content.Time);
    return dateA - dateB;
  }
  function sortDates(arr) {
    // Custom sorting function
    const customSort = (a, b) => {
      const [dayA, monthA] = a.split('/').map(Number);
      const [dayB, monthB] = b.split('/').map(Number);
  
      if (monthA < monthB) return -1;
      if (monthA > monthB) return 1;
      if (dayA < dayB) return -1;
      if (dayA > dayB) return 1;
      return 0;
    };
  
    // Sort the array using the custom sorting function
    const sortedArr = arr.sort(customSort);
    return sortedArr;
  }
  
  
  // let result = new Set(info.map(a => a.Date))
  // flex gap-3
  useEffect(() => {
    fetchmyapi();

  }, []);
  useEffect(() => {
    // Ensure that uniqueDates is not empty before calling dateActivity
    if (uniqueDates.length > 0) {
      dateActivity(uniqueDates[0]);
    }
  }, [uniqueDates]);

  useEffect(() => {
    if (datas.length > 0) {
      datas.sort(comparetimeandDate);
      const uniqueDatesSet = new Set(datas.map((item) => item.Date));
      setUniqueDates(sortDates([...uniqueDatesSet]));
      dateActivity(uniqueDates[0]);
    }
  }, [datas]);

const addLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>

  ));
};


  return (
    <>
   
    <div className='w-full animate-fade'>

    <div className=' flex lg:flex-row flex-col lg:gap-42   '>
      <div className='p-5 mt-6  text-white md:text-6xl text-3xl font-extrabold font-goblin '>
        <div className='text-center md:text-5xl md:text-center lg:text-left text-3xl font-goblin lg:pl-8'>AGENDA</div>
        
        <div className='lg:text-2xl sm:text-xl text-xs text-center lg:text-left pt-3 font-Kanit lg:pl-8'>ติดตามปฏิทินกิจกรรม ITGG 2023 ได้ที่นี่เลยยยยย!!!</div>
      <div className='flex justify-center lg:gap-64 md:gap-6 lg:flex-row flex-col '>
        <div className='mt-5 gap-3 flex lg:flex-col flex-row  justify-center flex-wrap '>
          {
            uniqueDates.map((item, index) => {
            return (
              <>
              
                <p key={index} className={`font-goblin flex justify-center text-center text-white lg:text-3xl md:text-l text-lg mt-2 cursor-pointer ${
            selectedItemIndex == index ? 'underline' : ''
          }`} 
                onClick={(e) => {
                  setSelectedItemIndex(index);
                  dateActivity(item);
                }}>{item}</p>
              
              </>
            )
            

          })}
          </div>
          </div>
          </div>
        
        <div className='m-3 lg:mt-23 lg:w-1/2 lg:mt-16 text-black flex flex-col justify-start bg-[#F4F1BB] rounded-xl lg:ml-36'>
          {filterdata.length == 0 ? <></> :
            filterdata.map((item, index) => {
              return (
                <>
                  <div >
                   
                          <div className='p-8'>
                            <div className='lg:text-3xl text-xl font-Kanit'> {item.Content.Time}</div>
                            <div className='lg:text-3xl text-xl font-goblin pt-1'> {item.Content.Name}</div>
                            <div className='lg:text-2xl font-Kanit lg:pt-4 pt-2'>{addLineBreaks(item.Content.Description)}</div>
                          </div>
                        
                     </div>
                </>
              )
            })
          }

        </div>
        
        </div>
        </div>
        

    </>
  );
}

export default Agenda;

