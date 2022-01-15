import { imageConfigDefault } from 'next/dist/server/image-config'
import React from 'react'
import img from 'next/image';

export default function Clients() {
    return (
        <>
            <div className='flex justify-center my-14'>
                <h1 className='text-4xl font-bold   '>Clients and partners</h1>
            </div>
            <div className='w-10/12 mx-auto md:flex '>
                <div className='mb:5 md:w-3/5 md:mr-10 border-b-8 border-blue-800 shadow-lg'>
                    <h3 className='text-xl lg:text-3xl p-10'>“We had an ambitious target, a heterogeneous team that never met in person, and a delivery timeframe of only a few weeks. NearForm’s agile delivery practices, user experience design and technical skills were vital to make it happen.”</h3>
                </div>

                <div className='mt-5 md:w-2/5' style={{  backgroundImage: "url(./asset/IBM_Mobile.jpg)",position:'relative'}} >
                    {/* <img src='./asset/IBM_Mobile.jpg' /> */}
                    <div className=' text-white font-bold ' style={{ position:'absoute',backgroundColor:'blue',height:'100%',width:'100%',opacity:'.4'}}>
                        <div className='text-center py-16'>
                            <img  className='ml-16' src='./asset/client-logo-c-ibm.svg'/>
                            <h1 className=' text-4xl text-white'>OPEN BANKING</h1>
                             <h3>Reference Application</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-10/12  my-20 mx-auto md:flex '>
                <div className='flex'>
                    <img src='./asset/client-logo-c-ibm.svg'/>
                    <img src='./asset/client-logo-c-walmart.svg'/>       
                </div>
                <div className='flex'>
                    <img src='./asset/client-logo-c-uber.svg'/>       
                    <img src='./asset/client-logo-c-red-hat.svg'/>       
                </div>
                <div className='flex'>
                  <img src='./asset/client-logo-c-telus.svg'/>       
                  <img src='./asset/client-logo-c-nutrien.svg'/>       
                </div>
            </div>

            <div className='mb-10 flex justify-center'>
                <button className=' font-bold bg-blue-800 border-2 border-blue-600 text-white py-4 px-10 hover:bg-white hover:text-blue-800'>
                    READ OUR CLIENT STORIES
                </button>
            </div>
        </>
    )
}
