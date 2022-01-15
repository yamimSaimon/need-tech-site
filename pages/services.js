import React from 'react'
import NavComponent from '../components/NavComponent'
import Footer from '../components/Footer'
import ServiceHero from '../components/service/ServiceHero'
import ServiceBody from '../components/service/ServiceBody'
import ServiceBody2 from '../components/service/ServiceBody2'

export default function service() {
    return (
        <div>
            <NavComponent/>
            <ServiceHero/>
            <ServiceBody/>
            <ServiceBody2/>
            <Footer/>
        </div>
    )
}
