import React from 'react'

export default function GetTouch() {
    return (
        <div>
            <div className='bg-blue-800 border-b pb-14'>
                <div className='w-10/12 mx-auto md:flex'>
                    <div className='md:w-1/2'>
                        <h1 className='text-5xl text-white font-bold p-10'>Every partnership starts with a conversation.</h1>
                    </div>
                    <div className='md:w-1/2'>
                        <p className='text-white font-semibold text-2xl p-10 '>
                            Consultancy, capability or your next project, we’re happy to chat. Talk to one of our experts.
                        </p>
                        <button className='ml-10  bg-white text-blue-800 py-4 px-8 font-semibold hover:bg-blue-600 hover:text-white '>Get in Touch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
