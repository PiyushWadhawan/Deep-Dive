import React from 'react'
import {Button} from './Button'
import './IntroPage.css'

import IntroData from '../../data/Home/IntroPage.json'

function IntroPage({ background, changeBackground }) {  

  return (
      <>
      {background === 0 ? <video src={IntroData.backgroundVideo} autoPlay loop muted /> : ''}
      <div className='intro-container' style={{background: background === 1 ? `url(${IntroData.alternateBackgroundImage}) center center/cover no-repeat`:''}}>
        <h1>{IntroData.heading}</h1>
        <p>{IntroData.subHeading1}</p>
        <p>{IntroData.subHeading2}</p>
        <div className="intro-btns">
            <Button className='btns' style={{"scrollbeahaviour": "smooth"}} link={'#howitworks'} buttonStyle='btn--outline' buttonSize='btn--large'>
                {IntroData.button1}
            </Button>
            <Button className='btns' link={'/test'} buttonStyle='btn--test' buttonSize='btn--large'>
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
