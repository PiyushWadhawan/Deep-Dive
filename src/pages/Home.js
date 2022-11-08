import React from 'react'
import '../App.css'
import Cards from '../components/Cards'
import IntroPage from '../components/IntroPage'
import Pricing from '../components/Pricing'
import InfoBox from '../components/InfoBox'

function Home({ background, changeBackground }) {
  return (
    <>
      <IntroPage background={background} changeBackground={changeBackground}/>
      <Cards/>
      <InfoBox heading={"TAKE THE TEST"} points={[{p: "10 Objective Questions"}, {p: "No Technical Knowledge Required"}, {p: "No Time Limit"}, {p: "This test was made after a lot of research"}, {p: "It will test your personality and interest"}]} format={'normal'} image={'https://www.danica-maritime.com/wp-content/uploads/2020/10/online-training-scaled.jpg'}/>
      <InfoBox heading={"Customized Careers"} points={[{p: "Careers that go with your personality"}, {p: "Suit your Interest"}, {p: "Match your Skillset"}]} format={'mirrored'} image={'https://small-bizsense.com/wp-content/uploads/2019/04/job.jpg'}/>
      <InfoBox heading={"Roadmap"} points={[{p: "A complete roadmap to achieve you goal"}, {p: "Created by industry experts"}, {p: "No Time Limit"}, {p: "This test was made after a lot of research"}, {p: "It will test your personality and interest"}]} format={'normal'} image={'https://miro.medium.com/max/1400/1*uOhvUw1j9p-G8KRQbn51Bw.png'}/>
      <InfoBox heading={"Resouces and Mentorship"} points={[{p: "10 Objective Questions"}, {p: "No Technical Knowledge Required"}, {p: "No Time Limit"}, {p: "This test was made after a lot of research"}, {p: "It will test your personality and interest"}]} format={'mirrored'} image={'https://s37564.pcdn.co/wp-content/uploads/2017/10/Small-business-mentoring-scaled.jpeg.optimal.jpeg'}/>
      <Pricing/>
    </>
  )
}

export default Home
