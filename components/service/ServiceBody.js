import React from 'react'
import {FaCheck} from 'react-icons/fa'
import Link from 'next/link'

export default function ServiceBody() {
    return (
        <div className='bg-green-50'>
            <div className='w-11/12 mx-auto py-10'>
                <h1 className='ml-10 text-4xl font-bold text-gray-800'>How we do it</h1>
                <p className='ml-10 text-xl my-2 text-gray-500'>Centre of Excellence for Modern Software Application Development</p>
            
                <div>
                    <div className='m-10 md:flex leading-loose'>
                        <div className='md:w-1/2 border-l-8 border-blue-800 p-10 bg-white shadow-lg '>
                            <h2 className='text-3xl text-gray-700'>Software Application Development</h2>
                            <p className='py-4'>Cutting-edge solutions that address real challenges and deliver value now and into the future</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Technology Strategy</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Full Stack Engineering</p>
                        </div>
                        <div className='mt-10 md:mt-0 md:w-1/2 border-l-8 border-blue-800 p-10 bg-white shadow-lg md:ml-10 '>
                            <h2 className='text-3xl text-gray-700'>Full Stack Engineering</h2>
                            <p className='py-2'>Strategic, forward-thinking methodology and tools for transitioning to the cloud.</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Cloud Services</p>
                            <p><FaCheck className='text-blue-800 inline-block'/>Next Generation Digital Platforms</p>
                        </div>
                    </div>

                    <div className='md:flex leading-loose text-gray-600'>
                        <div className='bg-white shadow-lg m-6 p-6'>
                            <h1 className='text-3xl text-gray-800'>Accelerated Delivery</h1>
                            <p className='mt-4 mb-6'>Accelerated delivery through our technology kits that enable fast, high-quality solution delivery.</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Full Stack Engineering</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Full Stack Engineering</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Full Stack Engineering</p>
                            <Link href='/'><span className='font-3xl text-blue-800 font-semibold p-10 hover:cursor-pointer'>Learn more</span></Link>
                        </div>
                        <div className='bg-white shadow-lg m-6 p-6'>
                            <h1 className='text-3xl text-gray-800'>Training & Support</h1>
                            <p className='mt-4 mb-6'>Building internal capabilities and powerful engineering teams for sustainable success.</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Full Stack Engineering</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Full Stack Engineering</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Full Stack Engineering</p>
                            <Link href='/'><span className='font-3xl text-blue-800 font-semibold p-10 hover:cursor-pointer'>Learn more</span></Link>

                        </div>
                        <div className='bg-white shadow-lg m-6 p-6 '>
                            <h1 className='text-3xl text-gray-800'>Product Design</h1>
                            <p className='mt-4 mb-6'>Ensuring customer centric and exceptional experience in every software solution.</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Full Stack Engineering</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Full Stack Engineering</p>
                            <p><FaCheck className='text-blue-800 inline-block'/> Full Stack Engineering</p>
                            <Link href='/'><span className='font-3xl text-blue-800 font-semibold p-10  hover:cursor-pointer'>Learn more</span></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
