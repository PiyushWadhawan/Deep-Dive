import React from 'react'
import './InfoBox.css'
import { useState, useEffect } from 'react'

function InfoBox({ heading, points, format, image, altimage }) {

  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1024) 
      setDesktop(true);
    else 
      setDesktop(false);
    

    const updateMedia = () => {
      if (window.innerWidth > 1024) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <>
      <div id="howitworks" className={format === 'normal'? 'info-container' : 'info-container mirrored'} style={{background: isDesktop === true ? "":`url(${altimage}) center center/cover no-repeat`}}>
        
        <div className="pic" >
            <img src={image} alt="pictures"/>
        </div>
        
        <div className="info">
            <h2>{heading}</h2>
            <ul>
                {points.map((item) => <li>{item.p}</li>)}
            </ul>
        </div>

      </div>
    </>
  )
}

export default InfoBox
