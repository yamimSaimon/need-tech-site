import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/contact/Form'
import NavComponent from '../components/NavComponent'
export default function contact() {
    return (
        <div>
            <NavComponent/>
            <div className='bg-blue-800 h-full md:h-screen flex items-center'>
                <div className='w-10/12 mx-auto md:flex items-center '>
                    <div className='md:w-1/2'>
                        <h1 className='text-4xl font-bold text-white '><span className='border-b-8 border-red-400 '>Cont</span>act NEEDTech</h1>
                        <h3 className='text-white mt-10 text-2xl leading-relaxeds'>Please fill in your details and we will be back to you in a flash (usually within one business day).</h3>
                        <h1 className='text-white font-bold text-3xl mt-16'>Talk to us<hr></hr></h1> 
                        <h3 className='text-2xl text-white mt-6'>International</h3>
                        <p className='mt-4 text-white text-xl pb-2'>+088 011 9999 5555</p><hr></hr>
                    </div>
                    <div className=' md:w-1/2 '>
                        <Form/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
