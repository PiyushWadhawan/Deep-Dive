import React from 'react'
import './RoadMapContainer.css'

function RoadMapContainer( {point, resources} ) {
  return (
    <div className='roadmap-container'>

        <div className='container1'>
            
        </div>
        <div className='container2'>
            <h4 style={{"fontWeight": "normal"}}>{point}</h4>
            <br></br>
            <p>Resources: {resources}</p>
        </div>

    </div>
  )
}

export default RoadMapContainer
