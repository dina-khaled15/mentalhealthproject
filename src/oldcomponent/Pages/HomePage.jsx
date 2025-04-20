import React from 'react'
import Card from './Card'
import DocCard from './DocCard'
import NavBar from './NavBar'
import Hero from './Hero'
import Contact from './footer/Contact'
import AboutSection from './AboutSection'
import Title from './Title'
// import Areas from './Areas'
import Titlee from './Titlee'
import Benefit from './Benefit'
import Schedule from './Schedule'

export default function Cards() {
    return (
        <div>
            <NavBar />
            <Hero />
            <AboutSection />
            {/* <Areas/>   */}
            <div className='container mb-5'>

                <Title />
                <div className="d-flex justify-content-center gap-4 mb-4">
                    <Card name="Ali Omar" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg" />
                    <Card name="Ali Omar" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg" />
                    <Card name="Ali Omar" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg" />
                </div>
                <div className="d-flex justify-content-center gap-4 mb-4">
                    <Card name="Ali Omar" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg" />
                    <Card name="Ali Omar" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg" />
                    <Card name="Ali Omar" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg" />
                </div>
                <div className="d-flex justify-content-center gap-4 mb-4">
                    <Card name="Ali Omar" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg" />
                    <Card name="Ali Omar" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg" />
                    <Card name="Ali Omar" des="Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg" />
                </div>
                <Benefit />
                <Titlee />
                <div className='row gap-4 justify-content-center mb-5'>
                    <DocCard />
                    <DocCard />
                    <DocCard />
                    <DocCard />
                </div>
                <div className='mt-5'>
                    <Schedule />
                </div>

            </div>
            <Contact />
        </div>
    );
}