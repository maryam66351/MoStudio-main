import React from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";



function ToggleBtn({setShowbtn}) {
    return (
        <div className='absolute z-10 top-[10px] left-[20px] text-white text-[30px] cursor-pointer togg-btn' onClick={() => setShowbtn(prev => !prev)}>
     <HiOutlineBars3 />


        </div>
    )
}

export default ToggleBtn