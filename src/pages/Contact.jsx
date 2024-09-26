import React from 'react'
import { Link } from 'react-router-dom'
import { MdLocationOn } from "react-icons/md";
import { IoMdCall, IoIosSend, IoMdGlobe } from "react-icons/io";





function Contact() {
    return (
        <>
            <div className='w-[calc(100%-380px)] flex bg-[#111111] ml-[380px] font-Poppinsmedium c_contact'>
                <div className='flex flex-col h-screen w-[360px] shrink-0 bg-[#F3C623] pl-10 pt-14 cContact_1st'>
                    <h2 className='text-[28px]'>Let's get in touch</h2>
                    <p className='text-[14px] font-normal mt-4 leading-6'>We're open for any suggestion or just<br /> to have a chat</p>

                    <div className='flex items-center w-full gap-4 mt-8'>
                        <div className='w-[50px] h-[50px] shrink-0 border-gray-400 border-[1px] rounded-full flex justify-center items-center'>
                            <MdLocationOn className='text-2xl' />
                        </div>
                        <div className='text-[14px] font-normal'>
                            <span>Address: </span><span className='text-[14px] leading-6'> 198 West 21th<br /> Street, Suite 721 New York NY<br /> 10016</span>
                        </div>

                    </div>
                    <div className='flex items-center w-full gap-4 mt-8'>
                        <div className='w-[50px] h-[50px] shrink-0 border-gray-400 border-[1px] rounded-full flex justify-center items-center'>
                            <IoMdCall
                                className='text-xl' />
                        </div>
                        <div className='text-[14px] font-normal'>
                            <span>Phone: </span><span className='text-[14px] leading-6'>  + 1235 2355 98</span>
                        </div>

                    </div>
                    <div className='flex items-center w-full gap-4 mt-8'>
                        <div className='w-[50px] h-[50px] shrink-0 border-gray-400 border-[1px] rounded-full flex justify-center items-center'>
                            <IoIosSend
                                className='text-2xl' />
                        </div>
                        <div className='text-[14px] font-normal'>
                            <span>Email: </span><span className='text-[14px] leading-6'> info@yoursite.com</span>
                        </div>

                    </div>
                    <div className='flex items-center w-full gap-4 mt-8'>
                        <div className='w-[50px] h-[50px] shrink-0 border-gray-400 border-[1px] rounded-full flex justify-center items-center'>
                            <IoMdGlobe
                                className='text-2xl' />
                        </div>
                        <div className='text-[14px] font-normal'>
                            <span>Website: </span><span className='text-[14px] leading-6'> yoursite.com</span>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col w-[68%]  bg-black text-white px-10 pt-14 cContact_2st'>
                    <h2 className='font-Poppinscustom text-[28px]'>GET IN TOUCH</h2>
                    <div className='flex w-full gap-4 mt-10 cContact_2st_inner'>
                        <div className='flex flex-col w-full'>
                            <label className='text-gray-500 text-[12px] font-Poppinscustom' htmlFor="">FULLNAME</label>
                            <input type="text" placeholder='Name'className='bg-transparent outline-none mt-3 border-gray-500 border-b-[1px] py-3' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='text-gray-500 text-[12px] font-Poppinscustom' htmlFor="">EMAIL ADDRESS</label>
                            <input type="email" placeholder='Email'className='bg-transparent outline-none mt-3 border-gray-500 border-b-[1px] py-3' />
                        </div>
                    </div>
                    <div className='flex w-full gap-4 mt-5'>
                        <div className='flex flex-col w-full'>
                            <label className='text-gray-500 text-[12px] font-Poppinscustom' htmlFor="">SUBJECT</label>
                            <input type="text" placeholder='Subject'className='bg-transparent outline-none mt-3 border-gray-500 border-b-[1px] py-3' />
                        </div>
                    </div>
                    <div className='flex w-full gap-4 mt-5'>
                        <div className='flex flex-col w-full'>
                            <label className='text-gray-500 text-[12px] font-Poppinscustom' htmlFor="">MESSAGE</label>
                            <textarea type="text" placeholder='Message'className='bg-transparent outline-none mt-3 border-gray-500 border-b-[1px] py-3' />
                        </div>
                    </div>
                    <Link className='mt-8'><span className='bg-[#F3C623] px-4 py-2 rounded-full text-black'>Send Message</span></Link>
                </div>
            </div>

        </>
    )
}

export default Contact