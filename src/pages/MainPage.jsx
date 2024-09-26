import React from 'react'
import { Link } from 'react-router-dom'
import { TbRefresh } from "react-icons/tb";



function MainPage() {
    return (
        <>
            <div className='flex'>

                <div className='w-[100%] bg-[#111111] ml-[380px] c_mainpage'>
                    <div className='flex w-full main_innerDiv'>

                        <div className='w-[50%] h-screen'>
                            <img className='w-full h-full object-cover' src="/images/work-1.jpg.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-[50%] justify-center h-screen pl-20 portrait_div'>
                            <p className='font-Poppinscustom tracking-widest text-[#80808058] text-sm'>PORTRAIT</p>
                            <h2 className='font-Abril text-[45px] text-white leading-[50px] mb-6'>Black & Gold Paint<br /> Face</h2>
                            <p className='font-Poppinsmedium text-[#8080808c] text-md w-[30vw] leading-7 yline-before relative pl-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                            </Link>
                        </div>
                    </div>
                    {/* ============================= */}
                    <div className='flex flex-row-reverse w-full main_innerDiv'>

                        <div className='w-[50%] h-screen'>
                            <img className='w-full h-full object-cover' src="/images/work-2.jpg.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-[50%] justify-center items-end h-screen pr-20 portrait_divL'>
                            <p className='font-Poppinscustom tracking-widest text-[#80808058] text-sm'>NATURE</p>
                            <h2 className='font-Abril text-[45px] text-white leading-[50px] mb-6'>Green Leaves</h2>
                            <p className='font-Poppinsmedium text-[#8080808c] text-md w-[30vw] leading-7 yline-after relative pr-5 text-right'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                            </Link>
                        </div>
                    </div>
                    {/* ============================== */}
                    <div className='flex w-full main_innerDiv'>

                        <div className='w-[50%] h-screen'>
                            <img className='w-full h-full object-cover' src="/images/work-3.jpg.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-[50%] justify-center h-screen pl-20 portrait_div'>
                            <p className='font-Poppinscustom tracking-widest text-[#80808058] text-sm'>NATURE</p>
                            <h2 className='font-Abril text-[45px] text-white leading-[50px] mb-6'>Coal</h2>
                            <p className='font-Poppinsmedium text-[#8080808c] text-md w-[30vw] leading-7 yline-before relative pl-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                            </Link>
                        </div>
                    </div>
                    {/* ============================== */}
                    <div className='flex flex-row-reverse w-full main_innerDiv'>

                        <div className='w-[50%] h-screen'>
                            <img className='w-full h-full object-cover' src="/images/work-4.jpg.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-[50%] justify-center items-end h-screen pr-20 portrait_divL'>
                            <p className='font-Poppinscustom tracking-widest text-[#80808058] text-sm'>NATURE</p>
                            <h2 className='font-Abril text-[45px] text-white leading-[50px] mb-6'>Top Leaf</h2>
                            <p className='font-Poppinsmedium text-[#8080808c] text-md w-[30vw] leading-7 yline-after relative pr-5 text-right'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                            </Link>
                        </div>
                    </div>
                    {/* ============================== */}
                    <div className='flex w-full main_innerDiv'>

                        <div className='w-[50%] h-screen'>
                            <img className='w-full h-full object-cover' src="/images/work-5.jpg.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-[50%] justify-center h-screen pl-20 portrait_div'>
                            <p className='font-Poppinscustom tracking-widest text-[#80808058] text-sm'>NATURE</p>
                            <h2 className='font-Abril text-[45px] text-white leading-[50px] mb-6'>Building</h2>
                            <p className='font-Poppinsmedium text-[#8080808c] text-md w-[30vw] leading-7 yline-before relative pl-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                            </Link>
                        </div>
                    </div>
                    {/* ============================== */}
                    <div className='flex flex-row-reverse w-full main_innerDiv'>

                        <div className='w-[50%] h-screen'>
                            <img className='w-full h-full object-cover' src="/images/work-6.jpg.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-[50%] justify-center items-end h-screen pr-20'></div>
                    </div>
                    {/* ============================== */}
                    <div className='flex w-full main_innerDiv'>

                        <div className='w-[50%] h-screen'>
                            <img className='w-full h-full object-cover' src="/images/work-7.jpg.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-[50%] justify-center h-screen pl-20'></div>
                    </div>
                    {/* ============================== */}
                    {/* ============================== */}
                    <div className='flex flex-row-reverse w-full main_innerDiv'>

                        <div className='w-[50%] h-screen'>
                            <img className='w-full h-full object-cover' src="/images/work-8.jpg.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-[50%] justify-center items-end h-screen pr-20'></div>
                    </div>
                    {/* ============================== */}
                    <div className='flex w-full main_innerDiv'>

                        <div className='w-[50%] h-screen'>
                            <img className='w-full h-full object-cover' src="/images/work-9.jpg.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-[50%] justify-center h-screen pl-20'></div>
                    </div>
                    {/* ============================== */}
                    <div className='bg-[#f3c623] text-center font-bold py-6 cursor-pointer flex justify-center gap-5 C_load'>
                        <Link className='text-sm font-Poppinsmedium tracking-widest'>LOAD MORE</Link><TbRefresh />


                    </div>


                </div>
            </div>
         
            

        </>
    )
}

export default MainPage