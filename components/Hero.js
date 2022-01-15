import React from 'react'

export default function Hero() {
    return (
        <div className='w-full h-full bg-blue-800 '>
            <div className='text-6xl font-bold text-white ml-10 block mb-10 pt-28 md:pt-32'>
                <h1 className='mb-10'>BUILDING BETTER</h1>
                <h1>SOFTWARE, FASTER </h1>
            </div>
            <div>
                <p className='mb-10 ml-10 text-2xl text-white md:w-3/5'>
                We’re a global consultancy that designs and builds mission-critical digital products at speed and scale for enterprise and public sector clients.
                </p>
            </div>
            <div className='pb-10'>
                <button className='bg-blue-700 border-4 border-blue-400 py-4 px-6 font-semibold text-white ml-10 hover:text-blue-700 hover:bg-white'> See What We Do</button>
            </div>
        </div>
    )
}
