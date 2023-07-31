import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Agenda.css"
function Agenda() {
  
  const [filterdata, setFilterdata] = useState([])
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
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
    console.log(filterdata)
    
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
    fetchmyapi()
    datas.sort(comparetimeandDate)
    const uniqueDatesSet = new Set(datas.map(item => item.Date));
    setUniqueDates(sortDates([...uniqueDatesSet]));
    // setData([...new Set(info.map(info => info.Date.slice(0, 5)))])
   
    
}, [datas])
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
    <div className='w-full '>

    <div className=' flex lg:flex-row flex-col md:gap-24 '>
      <div className='p-5 mt-6  text-white md:text-6xl text-3xl font-extrabold font-goblin '>
        <div className='text-center md:text-8xl md:text-left text-5xl font-goblin lg:pl-8'>AGENDA</div>
        <div className='md:text-xl text-xs md:text-left text-center pt-3 font-goblin lg:pl-8'>ปฏิทินกิจกรรมของ ITGG2023 สามารถติดตามปฏิทินกิจกรรมปีนี้ได้ที่นี้เล้ยยยยย!!!</div>
      <div className='flex justify-center md:gap-64 lg:flex-row flex-col '>
        <div className='mt-5 gap-3 flex lg:flex-col flex-row  justify-center flex-wrap '>
          {
            uniqueDates.map((item, index) => {
            return (
              <>
              
                <p key={index} className={`font-goblin flex justify-center text-center text-white text-3xl mt-2 cursor-pointer ${
            selectedItemIndex === index ? 'underline' : ''
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
        
        <div className='m-3 lg:mt-44 lg:w-1/2 text-black flex flex-col justify-start bg-[#F4F1BB] rounded-xl '>
          {filterdata.length == 0 ? <></> :
            filterdata.map((item, index) => {
              return (
                <>
                  <div >
                   
                          <div className='p-4'>
                            <div className='text-xl font-goblin'> {item.Content.Time}</div>
                            <div className='text-5xl font-goblin pt-1'> {item.Content.Name}</div>
                            <div className='text-xxl font-goblin pt-2'>{addLineBreaks(item.Content.Description)}</div>
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

