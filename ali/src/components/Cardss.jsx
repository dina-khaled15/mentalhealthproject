import React from 'react'
import Card from './Card'
import DocCard from './DocCard'
import TimeLine from './TimeLine'



export default function Cards() {
    return (
<div className='container mb-5'>
      <div className='row gap-4 justify-content-center  mb-4'>
        <Card name = "Ali Omar" des = "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg"/>
        <Card name = "Ali Omar" des = "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg"/>
        <Card name = "Ali Omar" des = "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg"/>
      </div>
      <div className='row gap-4 justify-content-center mb-4'>
        <Card name = "Ali Omar" des = "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg"/>
        <Card name = "Ali Omar" des = "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg"/>
        <Card name = "Ali Omar" des = "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg"/>
      </div>
      <div className='row gap-4 justify-content-center mb-4'>
        <Card name = "Ali Omar" des = "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg"/>
        <Card name = "Ali Omar" des = "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg"/>
        <Card name = "Ali Omar" des = "Personalized one-on-one sessions with licensed therapists to address your unique mental health needs." img="/doc.jpg"/>
      </div>
      
      <div className='row gap-4 justify-content-center mb-4'>
        <DocCard />
        <DocCard />
        <DocCard />
        <DocCard />
      </div>

      <TimeLine />
    </div>
    );
}