import React from 'react'

function About() {
    return (
        <>

            <div className='flex'>

                <div className='w-[100%] bg-[#111111] ml-[380px] c_about'>
                    <div className='flex w-full aboutFdiv'>

                        <div className='w-[50%] h-screen about_imgdiv'>
                            <img className='w-full h-full object-cover' src="/images/about.jpg.webp" alt="" />
                        </div>
                        <div className='flex flex-col w-[50%] justify-center h-screen pl-14 cabout_inerdiv'>
                            <h2 className='font-Abril text-[40px] text-white leading-[48px]'>Hello! I'm<span className='text-[#f3c623]'>Jeffrey White</span><br /> the CEO of a Mostudio Photography</h2>
                            <p className='font-Poppinsmedium text-[#8080808c] text-sm w-[30vw] leading-7 my-5'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <div className='text-white flex justify-around items-center'>
                                <div className='text-center'>
                                    <img className='w-[100px] h-[100px] rounded-full object-cover' src="/images/team-1.jpg.webp" alt="" />
                                    <h2 className='mt-2'>John Doe</h2>
                                    <p className='text-sm text-[#8080808c]'>Photographer</p>
                                </div>
                                <div className='text-center'>
                                    <img className='w-[100px] h-[100px] rounded-full object-cover' src="/images/team-2.jpg.webp" alt="" />
                                    <h2 className='mt-2'>John Flex</h2>
                                    <p className='text-sm text-[#8080808c]'>Photographer</p>
                                </div>
                                <div className='text-center'>
                                    <img className='w-[100px] h-[100px] rounded-full object-cover' src="/images/team-3.jpg.webp" alt="" />
                                    <h2 className='mt-2'>John Flex</h2>
                                    <p className='text-sm text-[#8080808c]'>Photographer</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default About