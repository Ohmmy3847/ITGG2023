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
    const place = ["ST", "ND", "RD", "TH",]

    useEffect(() => {
        fetchmyapi()
    }, [])
    return (
        <><div className=' text-white  md:text-6xl text-4xl font-extrabold mt-14  flex-wrap text-center '>
            IT TOURNAMENT GATE GAME 2023
        </div>
            <div className='text-white sm:text-3xl md:text-2xl font-extrabold mt-7 flex-wrap text-center'>
                มหาศึกเทพชนเทพที่ใหญ่ที่สุดในลาดกระบัง
            </div>

            <div

                className='flex justify-center mt-10 gap-9  text-black text-2xl flex-wrap pt-4 font-extrabold font-Krub '>
                {
                    info.map((item, index) => {
                        console.log(item)

                        return (
                            <div className="card p-3  w-60 rounded-2xl" key={index} style={{
                                backgroundColor: item.hex,
                                // backgroundSize: 'cover',
                                // backgroundRepeat: 'no-repeat',
                                // backgroundPosition: 'center',
                            }}>
                                <div className='flex justify-center mt-6 h-76'>
                                    <img className="rounded-full object-cover" width="200" height="200" src={!item?.mascotURL ? item.mascotURL : "../../../../public/cat.jpg"} />
                                </div><br />
                                <p className={`flex justify-center text-4xl bg-white/20 backdrop-blur-[2px] border-b border-t border-gray-300 rounded-b-sm text-slate-800`}>{item.gate_name}</p>
                                <p className='flex items-center gap-2 justify-center text-3xl mt-2'><span>{THDollor.format(item.token_amount).replace('฿', '').split('.')[0]}</span> <FaCoins className="text-yellow-300" /></p><br />
                            </div>
                        )
                    })
                }

            </div>
            {/* <Agenda /> */}
        </>
    )

}



export default Home;
