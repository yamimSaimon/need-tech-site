import React from 'react'

export default function WhyNeed() {
    return (
        <div className='w-10/12 mx-auto md:flex border-b'>
            <div className='w-full my-10 shadow-lg md:w-1/2 '>
                <h1 className='px-10 text-gray-700 text-4xl font-bold leading-normal'><span className='border-b-8 border-red-300'>WHY</span> NEEDTECH</h1>
                <p className='px-10 my-5'>
                     Yes, we’re experts in digital development and design. But more than that, we run every project according to a process we’ve refined through years of experience delivering solutions that don’t just meet the initial spec, but enable clients to scale and adapt as their needs evolve.
                </p>
                <button className=' mb-5 px-8 py-4 bg-blue-700 text-white font-bold border-2 border-blue-700 ml-10 hover:bg-white hover:text-blue-800'>Explore Our Approch</button>
            </div>    
            <div className='w-full my-10 shadow-lg border-l-8 border-blue-700 md:w-1/2'>
                <h1 className='px-10 text-3xl'>Specialists in what works</h1>
                 <p className='p-10'> 
                    DevOps Cloud Native Serverless React Native GraphQL Node.js JavaScript Frontend Backend Data Engineering SaaS Content Managemet
                </p> 
            </div>        
        </div>
    )
}
