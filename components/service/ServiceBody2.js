import React from 'react'
import Image from 'next/image'

export default function ServiceBody2() {
    return (
        <div className=''>
            <div className='md:w-11/12 mx-auto md:my-20 md:flex '>
                <div className='  hidden md:block md:w-1/2'>
                    <Image src='/asset/Workshop.jpg' height={500} width={500}/>
                </div>
                <div className='ml-10 md:w-1/2'>
                    <h1 className='text-gray-800 text-4xl font-bold  md:text-left pr-4'> 
                       <span className='block md:hidden mt-10'>Start with</span> 
                       <span className='border-b-8 border-red-400 mb-2 hidden md:inline-block'>  Start with</span> a  <span className='border-b-8 border-red-400 inline-block md:hidden'>work</span><span className='md:inline-block'>work</span>shop
                    </h1>
                    <p className='text-gray-700 my-8 text-2xl'> Solve complex problems and gain instant value with an in-depth workshop. We offer design-led, discovery or architecture workshops, each with a senior technical director, designer and bespoke team to help guide you through the process.</p>
                    <h2 className='text-gray-800 text-xl font-semibold my-10'> In three days, you get:</h2>
                    <ul className='text-gray-700'>
                        <li>Ready-to-build workplan</li>
                        <li>Senior technical team</li>
                        <li>High-fidelity prototype ready to validate and test with customers</li>
                    </ul>
                    <button className='m-6 py-4 px-8 border-blue-800 text-white bg-blue-800 font-semibold hover:text-blue-800 hover:bg-white'>
                        Get In Touch
                    </button>
                </div>
            </div>
            <div className='w-full bg-blue-800'>
                <div className='w-10/12 mx-auto md:flex items-center  py-12'>
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl text-white font-bold md:pr-24 leading-normal'>Every partnership starts with a conversation.</h1>
                    </div>
                    <div className='ml-10'>
                        <h2 className='text-white leading-normal  text-2xl md:pr-24 '>Consultancy, capability or your next project, we’re happy to chat. Talk to one of our experts.</h2>
                        <button className='m-6 py-4 px-8 bg-white text-blue-800 font-semibold hover:text-white hover:bg-blue-600 '>Get in Touch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
