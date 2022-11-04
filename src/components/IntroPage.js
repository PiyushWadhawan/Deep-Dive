import React from 'react'
import {Button} from './Button'
import './IntroPage.css'

function IntroPage() {
  return (
      <>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <div className='intro-container'>
        <h1>Let's conquer the Depths</h1>
        <p>What are you waiting for?</p>
        <div className="intro-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                REGISTER
            </Button>
        </div>
    </div>
    </>
  )
}

export default IntroPage
