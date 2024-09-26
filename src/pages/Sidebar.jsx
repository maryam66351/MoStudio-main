import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineClose } from "react-icons/md";


function Sidebar({ showbtn, setShowbtn }) {
    return (
        <>
            <div className={`fixed top-0 left-0 z-20 duration-500 overflow-hidden ${showbtn ? 'trtoggle' : 'ftoggle'}`}>

                <div className={`w-[380px] border-black border-[1px] pl-8 py-5 bg-[#000000] text-white h-[100vh] c_Sidebar  `}>
                    <h1 className='text-[60px] font-Abril imgfill'><Link to="/">Mostudio</Link></h1>
                    <div className='w-full h-[88%] flex flex-col justify-between pb-5'>
                        <div>
                            <ul className='font-Poppinsmedium flex flex-col gap-3 mt-5 text-[14px] tracking-wider' onClick={()=>setShowbtn(prev=>!prev)}>
                                <li><NavLink className='hlinebottom leading-6' to="/">HOME</NavLink></li>
                                <li><NavLink className='hlinebottom leading-6' to="/gallery">GALLERY</NavLink></li>
                                <li><NavLink className='hlinebottom leading-6' to="/about">ABOUT</NavLink></li>
                                <li><NavLink className='hlinebottom leading-6' to="/pricing">PRICING</NavLink></li>
                                <li><NavLink className='hlinebottom leading-6' to="/contact">CONTACT</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-[#808080] font-Poppinscustom text-sm'>SUBSCRIBE FOR NEWSLETTER</h3>
                            <input className='w-[90%] py-3 bg-transparent border-[#8080805b] border-[1px] pl-2 mb-5 mt-2 outline-none' type="text" placeholder='Enter Email Address' />
                            <p className='text-[#80808058] font-Poppinscustom text-sm'>Copyright ©2024 All rights reserved | This template is made with ❤️ by Mostudio </p>
                        </div>

                    </div>
                    <img className=' w-[10px] object-cover absolute top-0 right-0' src="/images/aside.png.webp" alt="" />
                    <div className='absolute z-30 top-[10px] right-[25px] text-white text-[30px] cursor-pointer togg-btn' onClick={() => setShowbtn(prev => !prev)}>
                    <MdOutlineClose />

                    </div>
                </div>


            </div>
        </>
    )
}

export default Sidebar