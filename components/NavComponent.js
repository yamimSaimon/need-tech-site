import React from 'react'
import Link from 'next/link'

export default function NavComponent() {
    return (
        <div>
            <nav className='w-full h-20 bg-gray-200   '>
                <div className='flex justify-between items-center mx-10'>
                    <div><h1 className='text-2xl text-blue-600 font-bold'>NEED TECH</h1></div>
                    <div >
                        {/* <ul className=' bg-gray-900'>
                           <Link href='/link'>
                                 <li>Service</li>
                            </Link
                            <li ></li>
                            <Link href='/about'>
                                <li>Contact</li>
                            </Link>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
