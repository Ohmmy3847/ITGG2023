import React, { useState, useEffect } from 'react';
import "./Home.css"
import Agenda from '../Agenda/Agenda';
import axios from 'axios'
import Countdown from '../Countdown/countdown';
import { FaMedal, FaCoins } from "react-icons/fa6";
import { Link } from '../Link/Link';

function Home() {
    const [info, setinfo] = useState([])
    async function fetchmyapi() {
        try {
            let { data } = await axios('https://itgg-core.iservkmitl.tech/api/v1/info')

            setinfo(data.gates)
        }
        catch (e) {
            console.log(e)
        }
    }
    const THDollor = new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB',
    })
    const place = ["st", "nd", "rd", "th",]
    function sumCoins(arr) {
        let totalCoins = 0;
        for (const item of arr) {
          totalCoins += item.token_amount;
        }
        return totalCoins;
      }
    const tokensum = sumCoins(info)
    console.log(tokensum)

    

    useEffect(() => {
        fetchmyapi()
    }, [])
    if(info.length == 0){
        return(<></>)
    }
    return (
        <>
        <div className=' text-white justify-center flex flex-row lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-extrabold  mt-14 flex-wrap text-center animate-fade'>
            <p className='font-goblin text-[#61ABFF] '>I</p>
            <p className='font-goblin text-[#68D4A0] '>T</p>
            <p className='font-goblin text-[#E86C67]'>G</p>
            <p className='font-goblin text-[#A18BFA] '>G</p>
            <p className='font-goblin md:text-12xl pl-3 text-[#F4F1BB]'>2023</p>
        </div>
            <div className="p-4 sm:text-3xl md:text-2xl  text-xl font-extrabold mt-7 flex-wrap text-center font-Kanit   text-[#F4F1BB] animate-fade">
            มหกรรมการแข่งขัน ที่ยิ่งใหญ่ที่สุดในไอทีลาดกระบังจะจบลงในอีก
            </div>
            <Countdown/>
            <div className='flex flex-col w-full pt-24  font-extrabold font-Krub'>
                <div>
                    {
                        info.map((item, index) => {
                           
                            if (index == 0) {
                                
                                return (
                                    <div className="animate-fade flex flex-row w-full pt-8 pb-8" key={index} style={{
                                        background: `linear-gradient(110deg, ${item.hex} 60%, #F4F1BB 40%)`,
                                    }}>
                                        <div className='ml-2 sm:w-4/5 w-4/6'>
                                            <div className='flex flex-col gap-y-2 w-4/5 mx-auto pl-2'>
                                                <div className=' text-base lg:text-6xl font-goblin text-[#F4F1BB] lg:mt-12 md:text-3xl md:mt-12 sm:text-3xl sm:mt-6'>FIRST PLACE</div>
                                                <div className='font-goblin text-shadow text-base lg:text-6xl lg:mt-6 md:text-3xl md:mt-8 sm:text-3xl sm:mt-6' style={{color: item.hex}}>FIRST PLACE</div>
                                                <div className='text-lg lg:text-6xl font-goblin text-[#F4F1BB] lg:mt-6 md:text-3xl md:mt-8 sm:text-3xl sm:mt-6'>GATE {item.gate_name}</div>
                                                <div className={'text-shadow font-goblin text-lg lg:text-6xl  lg:mt-6 md:text-3xl md:mt-8 sm:text-3xl sm:mt-6' } style={{color: item.hex}}>GATE {item.gate_name}</div>
                                                <div className='pt-4'>
                                                    
                                                    <div className='flex gap-x-2 lg:text-3xl md:text-xl text-xs text-white lg:mt-24'><span className='font-goblin'>{THDollor.format(item.token_amount).replace('฿', '').split('.')[0]}</span> <FaCoins className="text-yellow-300" /></div>
                                                
                                                    <div className='text-white lg:text-3xl md:text-xl text-xs font-goblin'>{`${isNaN((item.token_amount/tokensum * 100).toFixed(0)) ? 0 : (item.token_amount/tokensum * 100).toFixed(0) } % winrate`}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex  pr-12 bg-cover sm:h-3/5 sm:w-3/5 w-44 h-44  mt-4'>

                    
                                            <img className="object-top" src={item?.mascotURL ? item.mascotURL : "../../../../public/cutecat.png"} />
                                        </div>
                                        </div>
                            )
                            }
                        })
                    }
                </div>
                <div className="flex flex-col w-full lg:flex-row">
                {
                        info.map((item, index) => {
                            if (index != 0) {

                            return (
                                <div className="animate-fade flex flex-col gap-y-4 w-full pb-8 pt-8" key={index} style={{
                                    backgroundColor: item.hex,
                                }}>
                                    <div className='flex lg:flex-col flex-row gap-y-4 w-full lg:items-center lg:gap-0 md:gap-24 sm:gap-7 gap-2 lg:pl-0  md:pl-32 sm:pl-24 pl-10'>
                                            <div className='text-center'>
                                            <div className='font-goblin lg:text-2xl md:text-3xl sm:text-l text-lg   text-[#F4F1BB]  '>{[index + 1]}{place[index]} PLACE</div>
                                            <div className='rounded-full bg-[#D9D9D9] lg:w-44 lg:h-44 md:h-52 md:w-52 sm:w-44 sm:h-44 h-32 w-32 flex items-center justify-center mt-4'>
                                                <img className=" flex  object-top top-0 h-4/5 " src={item?.mascotURL ? item.mascotURL : "../../../../public/cutecat.png"} />
                                            </div>
                                        </div>
    
                                        <div className='md:text-left sm:text-left text-left lg:ml-0 md:ml-0 sm:ml-16 '>
                                            <div className='text-[#F4F1BB] lg:hidden font-goblin md:text-3xl sm:text-xl text-lg md:mt-16 sm:mt-16 mt-16 '>GATE {item.gate_name}</div>
                                            <div className='text-white font-goblin flex lg:justify-center justify-start gap-2 md:text-l sm:text-lg text-xs md:mt-6 sm:mt-4 mt-2'><span className='font-goblin'>{THDollor.format(item.token_amount).replace('฿', '').split('.')[0]}</span> <FaCoins className="text-yellow-300" /></div>
                                            <div className='text-white font-goblin md:text-l sm:text-lg text-xs md:mt-2'>{isNaN((item.token_amount/tokensum * 100).toFixed(0)) ? 0 : (item.token_amount/tokensum * 100).toFixed(0)} % winrate</div>
                                        </div>
                                    </div>
                            </div>
                            )
                            }
                        })
                    }
                </div>
            </div>
            <Agenda/>
           {/* <Link/> */}
        </>
    )

}



export default Home;
