import React, { useState, useEffect } from 'react';
import "./Home.css"
import Agenda from '../Agenda/Agenda';
import axios from 'axios'
function Home() {
    const [info, setinfo] = useState({})
    const fetchData = async () => {
        const { data } = await axios({
            url: "",
            method: "GET"
        })
        setinfo(data)
    }
    const [scores, setScores] = useState(
        [["AND", 0, "#4491e8"],
        ["OR", 0, "#2d6b1c"],
        ["NOR", 0, "#cc3630"],
        ["NOT", 0, "#a3209b"]]
    )
    useEffect(() => {
        fetchData()
    })

    const sortedData = sortByFirstElement(scores.reverse()).reverse();
    
    return (
        <><div className='text-white ecoration-slate-100 font-Athiti md:text-9xl text-6xl font-extrabold pt-14 pl-16 flex-wrap'>
            ITGG 2023
        </div>
        <div className='text-white font-Athiti  text-2xl font-extrabold pt-12 pl-16 flex-wrap'>
        INFOTECH GATEGAME มหกรรมการแข่งขันที่ยิ่งใหญ่ที่สุดในไอทีลาดกระบังในธีมสงครามเทพกรีกเริ่มขึ้นแล้ว!!
        </div>
        <div className='text-white font-Athiti md:text-6xl text-4xl font-extrabold pt-16 pl-16 flex-wrap'>
            Gate
        </div>
            <div 

            className='flex justify-center mt-10 gap-6  text-black text-2xl flex-wrap pt-4 font-extrabold '>
                <div className="card p-2 border-2 w-72 rounded-2xl" style={{ backgroundColor: sortedData[0][2] }}>
                <div className='flex justify-center mt-6 h-76'>
                    <img src="../../../../public/cat.jpg"/>
                    </div><br/>
                    <p className='flex justify-center text-4xl'>{sortedData[0][0]}</p>
                    <p className='flex justify-center '>{sortedData[0][1]} ptx</p><br/>
                </div>
                <div className="card p-2 border-2 w-72  rounded-2xl" style={{ backgroundColor: sortedData[1][2] }}>
                <div className='flex justify-center mt-6 h-76'>
                    <img src="../../../../public/cat.jpg"/>
                    </div><br/>
                    <p className='flex justify-center text-4xl'>{sortedData[1][0]}</p>
                    <p className='flex justify-center'>{sortedData[1][1]} ptx</p><br/>
                </div>
                <div className="card p-2 border-2 w-72  rounded-2xl" style={{ backgroundColor: sortedData[2][2] }}>
                <div className='flex justify-center mt-6 h-76'>
                    <img src="../../../../public/cat.jpg"/>
                    </div><br/>
                    <p className='flex justify-center text-4xl'>{sortedData[2][0]}</p>
                    <p className='flex justify-center '>{sortedData[2][1]} ptx</p><br/>
                </div>
                <div className="card p-2 border-2 w-72  rounded-2xl" style={{ backgroundColor: sortedData[3][2] }}>
                <div className='flex justify-center mt-6 h-76'>
                    <img src="../../../../public/cat.jpg"/>
                    </div><br/>
                    <p className='flex justify-center text-4xl'>{sortedData[3][0]}</p>
                    <p className='flex justify-center'>{sortedData[3][1]} ptx</p><br/>
                </div>
            </div>
            <Agenda />
        </>
    )

}
function sortByFirstElement(arr) {
    // Use the sort() method and compare the first elements of the arrays
    arr.sort((a, b) => {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    });

    return arr;
}

  

export default Home;
