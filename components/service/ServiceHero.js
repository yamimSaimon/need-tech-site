import React from 'react'

export default function ServiceHero() {
    return (
        <div>
            <div className='w-full bg-blue-800'>
                <div className='w-10/12 mx-auto h-44 text-white flex items-center justify-between'>
                    <div className='text-5xl font-bold '> 
                        Services
                    </div>
                    <div className='hidden sm:block'>
                        <h2 className='w-2/3 text-right text-2xl font-semibold'>Software development and digital platform deliverys</h2>
                    </div>
                </div>
            </div>

            <div className='w-10/12 mx-auto my-20 md:flex items-center md:my-20'>
                <div className='md:w-1/2 md:pr-16 '>
                    <h2 className='leading-tight font-bold text-5xl text-gray-800  '>We deliver future- ready enterprise solutions that outperform <span className='border-b-8 border-red-400 pb-2 '>expec</span>tations.</h2>
                </div>
                <div className=' mt-10 sm:mt-0 md:w-1/2 text-gray-700 text-xl '>
                    <p>Doing business digitally places greater demands on the speed of solution development. Whether to optimise existing software or build an entirely new digital platform, you need a solution that works, now and into the future.</p>
                   <br/>
                    <p>That is what we do.</p>
                    <button className='bg-blue-800 border-2 border-blue-600 py-4 px-8 text-white my-6 hover:bg-white hover:text-blue-800'> See Our Process</button>
                </div>
            </div>
        </div>
    )
}
