import React from 'react'
import {Button} from './Button'
import './IntroPage.css'

function IntroPage() {
  return (
      <>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <div className='intro-container'>
        <h1>Let's Conquer The Depths</h1>
        <p>What are you waiting for?</p>
        <p>Find the career that is best for you</p>
        <div className="intro-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                HOW IT WORKS?
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                TAKE THE TEST
            </Button>
        </div>
    </div>
    </>
  )
}

export default IntroPage
