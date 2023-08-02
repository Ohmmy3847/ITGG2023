import React, { useState, useEffect } from 'react';
import axios from 'axios'

export function Link() {
  
   

    return (
        <>
            <div className="flex  justify-center lg:gap-24 gap-4 bg-slate-800 ">
                {noUrldata.map((item, index) => {
                    return (
                        <>
                            <div className='mt-4 mb-4 cursor-pointer' key={index} onClick={() => window.location.href = item.URL} >
                                <img key={index} src={item.imgURL} className='w-12 rounded-full'/>
                            
                            </div>
                        </>
                    )
                })}
                </div>
        </>
    )
}
const noUrldata = [
    {
        "nameURL": "Instagram",
        "URL": "https://www.instagram.com/itgg.kmitl/",
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp1fVWLNe9u6OylmjsoT-l3CqnOh5hdjwzGg&usqp=CAU"

    },
    {
        "nameURL": "Facebook",
        "URL": "https://www.facebook.com/InfoTechGateGame",
        "imgURL": "https://www.facebook.com/images/fb_icon_325x325.png"
    },
]