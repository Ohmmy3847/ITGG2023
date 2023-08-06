import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./Link.css"

export function Link() {
  
   

    return (
        <>
            <div className="flex  justify-center lg:gap-24 md:gap-12  lg:mt-16 lg:mb-16 gap-5 mt-12 mb-12">
                {noUrldata.map((item, index) => {
                    return (
                        <>
                            <div className='cursor-pointer hover-scale-up '  key={index} onClick={() => window.location.href = item.URL} >
                                <img key={index} src={item.imgURL} className='lg:w-48  md:w-36 sm:w-24 w-16 rounded-full border-black lg:border-8 border-4 '/>
                            
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
        "nameURL": "Valorant",
        "URL": "https://challonge.com/th/ITGG2023",
        "imgURL": "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"

    },
    {
        "nameURL": "ROV",
        "URL": "https://challonge.com/th/ITGG2023",
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRD28bsPk9NdYW-DIzboddYLn8Df9K0I0rtMcQNHjEoChbMHjvhbkgcRT-IUsDMRh3iJc&usqp=CAU"

    },
    {
        "nameURL": "Instagram",
        "URL": "https://www.instagram.com/itgg.kmitl/",
        "imgURL": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"

    },
    {
        "nameURL": "Facebook",
        "URL": "https://www.facebook.com/InfoTechGateGame",
        "imgURL": "https://www.facebook.com/images/fb_icon_325x325.png"
    },
]