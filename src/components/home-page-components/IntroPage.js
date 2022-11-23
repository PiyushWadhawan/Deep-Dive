import React from 'react'
import {Button} from './Button'
import './IntroPage.css'

import IntroData from '../../Data/HomePage/IntroPage.json'

function IntroPage({ background, changeBackground }) {  

  return (
      <>
      {background === 0 ? <video src={IntroData.backgroundVideo} autoPlay loop muted /> : ''}
      <div className='intro-container' style={{background: background === 1 ? `url(${IntroData.alternateBackgroundImage}) center center/cover no-repeat`:''}}>
        <h1>{IntroData.heading}</h1>
        <p>{IntroData.subHeading1}</p>
        <p>{IntroData.subHeading2}</p>
        <div className="intro-btns">
            <button className='IntroButton'>
                <a href="#howitworks">{IntroData.button1}</a> 
            </button>
            <Button className='btns' link={'/test'} buttonStyle='btn--primary' buttonSize='btn--large'>
                {IntroData.button2}
            </Button>
        </div>

        <button className="btn-background" onClick={changeBackground}>
            {IntroData.backgroundChangeButton}
        </button>

    </div>
    </>
  )
}

export default IntroPage
