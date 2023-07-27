import React, { useState, useEffect } from 'react';
import "./Home.css"
import Agenda from '../Agenda/Agenda';
import axios from 'axios'
import { FaMedal, FaCoins } from "react-icons/fa6";
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

    const gradientStyle = {background: 'linear-gradient(110deg, #5F43D0 60%, #F4F1BB 40%)'};

    useEffect(() => {
        fetchmyapi()
    }, [])
    return (
        <>
        <div className=' text-white justify-center flex flex-row md:text-8xl text-4xl font-extrabold mt-14  flex-wrap text-center '>
            <p className='font-goblin text-[#61ABFF] '>I</p>
            <p className='font-goblin text-[#68D4A0] '>T</p>
            <p className='font-goblin text-[#68D4A0] '>G</p>
            <p className='font-goblin text-[#68D4A0] md:pr-8'>G</p>
            <p className='font-goblin md:text-12xl pl-3 text-[#F4F1BB]'>2023</p>
        </div>
            <div className="font-georgia sm:text-3xl md:text-2xl font-extrabold mt-7 flex-wrap text-center text-[#F4F1BB]">
            มหกรรมการแข่งขัน ที่ยิ่งใหญ่ที่สุดในไอทีลาดกระบังเริ่มต้นขึ้นแล้ว!!!
            </div>

            <div className='flex flex-col w-full pt-24  font-extrabold font-Krub'>
                <div>
                    {
                        info.map((item, index) => {
                            console.log(item)
                            if (index == 0) {
                                
                                return (
                                    <div className="flex flex-row w-full pt-8 pb-8" key={index} style={{
                                        background: `linear-gradient(110deg, ${item.hex} 60%, #F4F1BB 40%)`,
                                    }}>
                                        <div className='ml-4'>
                                            <div className='flex flex-col gap-y-4 w-4/5 mx-auto pl-4'>
                                                <div className=' text-4xl md:text-8xl font-goblin text-[#F4F1BB]'>FIRST PLACE</div>
                                                <div className='font-goblin text-shadow text-4xl md:text-8xl' style={{color: item.hex}}>FIRST PLACE</div>
                                                <div className={'text-[#F4F1BB] font-goblin text-2xl md:text-6xl'}>GATE {item.gate_name}</div>
                                                <div className={'text-shadow font-goblin text-2xl md:text-6xl' } style={{color: item.hex}}>GATE {item.gate_name}</div>
                                                <div className='pt-4'>
                                                    <div className='flex gap-x-2 text-xl text-white'><span>{THDollor.format(item.token_amount).replace('฿', '').split('.')[0]}</span> <FaCoins className="text-yellow-300" /></div>
                                                    <div className='text-white text-xl'>{`${isNaN((item.token_amount/tokensum * 100).toFixed(0)) ? 0 : (item.token_amount/tokensum * 100).toFixed(0) } % winrate`}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex pr-4 bg-cover w-2/5'>
                                            <img className="" src={item?.mascotURL ? item.mascotURL : "../../../../public/cutecat.png"} />
                                        </div>
                                        </div>
                            )
                            }
                        })
                    }
                </div>
                <div className="flex flex-col w-full md:flex-row">
                {
                        info.map((item, index) => {
                            if (index != 0) {

                            return (
                                <div className="flex flex-col gap-y-4 w-full mx-auto pb-8 pt-8" key={index} style={{
                                    backgroundColor: item.hex,
                                }}>
                                    <div className='flex flex-col gap-y-4 w-full items-center'>
                                        <div className='font-goblin text-4xl text-[#F4F1BB]'>{[index + 1]}{place[index]} PLACE</div>
                                        <img className="flex object-cover w-28 h-28" src={item?.mascotURL ? item.mascotURL : "../../../../public/cutecat.png"} />
                                        <div className='text-white flex items-center gap-2 justify-center text-2xl'><span>{THDollor.format(item.token_amount).replace('฿', '').split('.')[0]}</span> <FaCoins className="text-yellow-300" /></div>
                                        <div className='text-white'>{isNaN((item.token_amount/tokensum * 100).toFixed(0)) ? 0 : (item.token_amount/tokensum * 100).toFixed(0)} % winrate</div>
                                    </div>
                            </div>
                            )
                            }
                        })
                    }
                </div>
            </div>
            {/* <Agenda /> */}
        </>
    )

}



export default Home;
