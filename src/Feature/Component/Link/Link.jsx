import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./Link.css"

export function Link() {
  
   

    return (
        <>
            <div className="flex  justify-center lg:gap-24 md:gap-12  lg:mt-16 lg:mb-16 gap-4 mt-12 mb-12">
                {noUrldata.map((item, index) => {
                    return (
                        <>
                            <div className='cursor-pointer hover-scale-up hover:animate-pulse'  key={index} onClick={() => window.location.href = item.URL} >
                                <img key={index} src={item.imgURL} className='object-cover lg:w-36 lg:h-36  md:w-24 md:h-24 sm:w-16 sm:h-16 w-14 h-14 rounded-full border-black lg:border-8 border-4 '/>
                            
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
        "URL": "https://challonge.com/th/ITGG21",
        "imgURL": "https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png"

    },
    {
        "nameURL": "ROV",
        "URL": "https://challonge.com/th/ITGG2023",
        "imgURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfvbCeTCPXt2sr2vKlfCYz5gfp3T7F-cEhg&usqp=CAU"
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
    {
        "nameURL": "Discord",
        "URL": "https://discord.gg/dGMXJPdmua",
        "imgURL": "https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRCHTTX1RAopljdoYpOaNfVf5nBNvbwGfyR5n4DAs0DsOwxSO9puiT_GgKqinHT8HsW8VYeiiuU1IG3jY69EhnsQ--&format=source"

    },
]