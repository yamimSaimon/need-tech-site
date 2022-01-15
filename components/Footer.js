import React from 'react'
import { FaFacebook,FaLinkedin,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa";
import TestFooterMenu from './TestFooterMenu';

const socials = [<FaFacebook />,<FaLinkedin />,<FaTwitter/>,<FaYoutube/>,<FaInstagram />]

const footerData = [{
    title: "Services",
    childs: [{title: "Solution Development", link: "/solution-development"}]
}, {
    title: "Resources",
    childs: [{title: "Solution Development", link: "/solution-development"}]
}, {
    title: "Career",
    childs: [{title: "Solution Development", link: "/solution-development"}]
}]

export default function Footer() {
    return (
        <>
        <div className='w-full bg-gray-200 pt-24 md:flex '>
            <div className='md:w-5/12 px-10 '>
                <h3 className='text-3xl'>We deliver future ready enterprise solutions that outperform expectations.</h3>
                <div className='flex text-2xl my-10'>
                <div className="flex justify-start items-center space-x-2 px-4">
                    {socials.map((i, idx)=> <span key={idx}>{i}</span>)}
                </div>
                </div>

            </div>
            <div className=' md:w-7/12 md:flex justify-around px-4 md:px-0'>
                {footerData.map(i => <TestFooterMenu key={i.title} data={i}/>)}
               
                {/* <TestFooterMenu />
                <div className=' text-center leading-loose'>
                    <span className='font-semibold text-2xl '>Resources</span>
                    <ul>
                       <li>Client Stories</li>
                       <li>Open Source</li>
                       <li>Blog</li>
                       <li>Event</li>
                   </ul>
                </div>
                <div className=' text-center leading-loose'>
                    <span className='font-semibold text-2xl '>Company</span>
                    <ul>
                       <li>About</li>
                       <li>Why NEEDTECH</li>
                       <li>Career</li>
                       <li>Conatact</li>
                   </ul>
                </div> */}
            </div>
        </div>
        <div className='w-full leading-loose md:h-16 bg-green-50 md:flex pl-10 items-center text-gray-400'>
                <div className='md:w-5/12'>
                        <p>© Copyright 2021 NeedTech Ltd. All Rights Reserved.</p>
                </div>
                <div className='md:w-7/12'>
                    <p>NeedTech Ltd. Dhaka, Bangladesh. </p>
                </div>
            </div>

        </>
    )
}
