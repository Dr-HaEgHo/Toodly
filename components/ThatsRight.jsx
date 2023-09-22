"useClient"
import useScrollPosition from '@/hooks/useScrollPosition'
import React from 'react'
import {motion as m} from 'framer-motion'
import Image from 'next/image'
 
const ThatsRight = () => {

    const scrollPosition = useScrollPosition()

    return (
        <m.div className='w-full h-screen flex items-center z-10' >
            <div className='w-[90%] mx-auto max-w-[1200px] flex flex-col-reverse lg:flex-row items-center justify-between ' >
                <div className=' w-[90%] lg:w-[34%] text-center lg:text-left flex flex-col items-center lg:items-start ' > 
                    <h2 className='font-lexend text-[28px] lg:text-[38px] font-bold text-darkGray ' >That's right folks! { scrollPosition}</h2>
                    <p className='font-lexend text-base font-[300] text-iconGray ' >Ready to transform mundane tasks into an exhilarating experience ? Toodly Modern is here to boost your productivity like never before. Soft shadows, crisp whites, and sharp grays will make organizing your day feel like a spa retreat.</p>
                    <button
                        className="yellow-btn text-center max-w-[200px] mt-[3rem] lg:mt-8"
                    >
                        I want to start now!
                    </button>
                </div>
                <div className='relative transform scale-75 lg:scale-100'>
                    <div className='absolute -left-[130px] top-[90px] ' >
                        <Image
                            src={require('../assets/images/upcoming.svg')}
                        />
                    </div>
                    <div className='absolute -left-[90px ] top-[290px] ' >
                        <Image
                            src={require('../assets/images/listtag.svg')}
                        />
                    </div>
                    <div className='absolute -right-[90px] top-[100px] ' >
                        <Image
                            src={require('../assets/images/todocomp.svg')}
                        />
                    </div>
                    <div className='absolute -right-[30px] top-[190px] ' >
                        <Image
                            src={require('../assets/images/todocomp-1.svg')}
                        />
                    </div>
                    <div className='absolute -right-[90px] top-[320px] ' >
                        <Image
                            src={require('../assets/images/todocomp-2.svg')}
                        />
                    </div>
                    <div>
                        <Image
                            src={require('../assets/images/dashbody.png')}
                        />
                    </div>
                </div>

            </div>
        </m.div>
    )
}

export default ThatsRight;