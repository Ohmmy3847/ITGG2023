import React, { useState, useEffect } from 'react';
function Agenda() {
    const calendar = [
        ["2023-7-27",[


        ]]
    ]


    return (
      <>
      <div className='text-white text-center mt-24 font-bold text-8xl'>AGENDA</div>
      <div className="text-white box-border h-3/5 w-2/5  border-4 flex justify-center 
      md:float-right mr-24 mt-24 mb-24 rounded">
      <img  className="w-full h-full " src="../../../../cat.jpg"/>
      
      </div >
       
      </>
    );
  }
  
  export default Agenda;