import React from 'react'
import {Button} from './Button'
import './IntroPage.css'

function IntroPage({ background, changeBackground }) {

  return (
      <>
      {background === 0 ? <video src='/videos/video-2.mp4' autoPlay loop muted /> : ''}
      <div className='intro-container' style={{background: background === 1 ? "url('https://rare-gallery.com/uploads/posts/1110423-sea-shark-movies-blue-underwater-split-view-Great-White-Shark-Jaws-ocean-computer-wallpaper-atmosphere-of-earth-extreme-sport.jpg') center center/cover no-repeat":''}}>
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

        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={changeBackground}>
            Background
        </Button>

    </div>
    </>
  )
}

export default IntroPage
