import React, { useState, useEffect } from 'react';
function Agenda() {
  const calendar = [
    ["Mon 2023-7-27", ["A", "B"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],
    ["Tue 2023-7-28", ["C", "D"]],

  ]


  return (
    <>
      <div className='text-white text-center mt-24 font-bold text-8xl'>AGENDA</div>
      <div className='flex justify-center '>
      <div className="text-white box-border h-96 w-2/5 
      md:float-left ml-24 mt-24 mb-24 rounded overflow-y-scroll">
          {calendar.map((item, index)=>{
            return(
            <>
            <div className="text-white mt-3 text-3xl ">{calendar[index][0]+"  "}{calendar[index][1]}</div>
            
            </>)
          })}
        </div>

        <div className="text-white box-border h-96  border-4 flex justify-center 
      md:float-right mr-24 mt-24 mb-24 rounded">
          <img className="w-full h-full" src="../../../../cat.jpg" />
        </div>

      </div >

    </>
  );
}

export default Agenda;