import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

function Gallery() {
    return (
        <>
            <div className='flex'>
             
                <div className='w-[100%] flex flex-col bg-[#111111] ml-[380px] c_gallery'>

                    <div className='flex cgallery-innerdiv'>
                        <div className='flex-1 w-full h-screen  bg-[url(/images/work-1.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Black & Gold Paint Face</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 w-full h-screen bg-[url(/images/work-2.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Green Leaves</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 w-full h-screen  bg-[url(/images/work-3.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Coal</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex cgallery-innerdiv'>
                        <div className='flex-1 w-full h-screen  bg-[url(/images/work-4.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Top Leaf</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 w-full h-screen bg-[url(/images/work-5.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Building</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 w-full h-screen  bg-[url(/images/work-6.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Black Model</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex cgallery-innerdiv'>
                        <div className='flex-1 w-full h-screen  bg-[url(/images/work-7.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Pug Puppy</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 w-full h-screen bg-[url(/images/work-8.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>White Flower</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 w-full h-screen  bg-[url(/images/work-9.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Turtle</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex cgallery-innerdiv'>
                        <div className='flex-1 w-full h-screen  bg-[url(/images/work-10.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Phone</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 w-full h-screen bg-[url(/images/work-11.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Boy</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 w-full h-screen  bg-[url(/images/work-12.jpg.webp)] bg-cover bg-center group'>
                            <div className='flex flex-col justify-center h-screen pl-10 opacity-0 duration-300 group-hover:opacity-[1] rmpadding'>
                                <p className='font-Poppinscustom tracking-widest text-gray-500 text-sm'>PORTRAIT</p>
                                <h2 className='font-Abril text-[40px] text-white'>Model</h2>
                                <Link className='mt-6'><span className='font-Poppinscustom tracking-wider text-[#f3c623] text-[13px] border-[#f3c623] border-[2px] px-2'> VIEW PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                    </div>






                </div>


            </div>




        </>
    )
}

export default Gallery