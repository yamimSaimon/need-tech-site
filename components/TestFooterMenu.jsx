import React from 'react'
import Link from 'next/link'

function TestFooterMenu({data}) {
    return (
        <div className='leading-loose'>
                   <span className='font-semibold text-xl'><h3> {data.title}</h3></span>
                   <ul>
                       {data.childs.map(j => <li><Link href={j.link}>{j.title}</Link></li>)}
                   </ul>
                </div>
    )
}

export default TestFooterMenu
