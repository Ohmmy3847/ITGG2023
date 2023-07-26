import React, { useState, useEffect } from 'react';
import "./Home.css"
import Agenda from '../Agenda/Agenda';
import axios from 'axios'
function Home() {
    const [info, setinfo] = useState({})
    // const fetchData = async () => {
    //     try {
    //         const { data } = await axios.get('https://it-gg-755211536068837409.rcf2.deploys.app/api/v1/gates');
    //         console.log(data)
    //         setinfo(data)

    //     } catch (error) {
    //         console.error('Error occurred:', error.message);
    //     }
    // }
    useEffect(() => {
        async function fetchmyapi() {
            try {
                let response = await fetch('https://it-gg-755211536068837409.rcf2.deploys.app/api/v1/gates')
                    .then((response) => response.json())
                setinfo(response)
                console.log(info)
            }
            catch (e) {
                console.log(e)
            }
        }
        fetchmyapi()
    }, [])



    const [scores, setScores] = useState(
        [
            {
                gates_name: 'AND',
                token_amount: 100,
                hex: '#4491e8',
                bgURL: "https://cdn.discordapp.com/attachments/1133374532762206308/1133374668305338491/IMG_7551.png"
            },
            {
                gates_name: 'OR',
                token_amount: 80,
                hex: '#2d6b1c',
                bgURL: "https://cdn.discordapp.com/attachments/1133374532762206308/1133374669379080234/IMG_7550.png"
            },
            {
                gates_name: 'NOR',
                token_amount: 80,
                hex: '#cc3630',
                bgURL: "https://cdn.discordapp.com/attachments/1133374532762206308/1133374671413334117/IMG_7548.png"
            },


            {
                gates_name: 'NOT',
                token_amount: 80,
                hex: '#a3209b',
                bgURL: "https://cdn.discordapp.com/attachments/1133374532762206308/1133374670662545469/IMG_7549.png"
            }
        ]
    )
    const place = ["ST", "ND", "RD", "TH",]
    const sortedByToken = scores.slice().sort((a, b) => b.token_amount - a.token_amount);




    return (
        <><div className=' text-white  md:text-6xl text-4xl font-extrabold pt-14  flex-wrap text-center '>
            IT TOURNAMENT GATE GAME 2023
        </div>
            <div className='text-white font-Krub md:text-2xl text-l font-extrabold pt-12  flex-wrap text-center'>
                มหาศึกเทพชนเทพที่ใหญ่ที่สุดในลาดกระบัง
            </div>

            <div

                className='flex justify-center mt-10 gap-6  text-black text-2xl flex-wrap pt-4 font-extrabold font-Krub '>
                {
                    sortedByToken.map((item, index) => {

                        return (
                            <>

                                <div className="card p-2  w-72 rounded-2xl" style={{
                                    backgroundImage: `url(${item.bgURL})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}>
                                    <div className='flex justify-center mt-6 h-76'>
                                        <img className="rounded-full" src={"../../../../public/cat.jpg"} />
                                    </div><br />
                                    <p className='flex justify-center text-4xl'>{index + 1}{place[index]} {item.gates_name}</p>
                                    <p className='flex justify-center '>{item.token_amount} ptx</p><br />
                                </div>

                            </>
                        )
                    })
                }

            </div>
            {/* <Agenda /> */}
        </>
    )

}



export default Home;
