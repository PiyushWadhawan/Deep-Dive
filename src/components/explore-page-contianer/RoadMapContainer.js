import React from 'react'
import './RoadMapContainer.css'

function RoadMapContainer( {point} ) {
  return (
    <div className='roadmap-container'>

        <div className='container1'>
            
        </div>
        <div className='container2'>
            {point}
        </div>

    </div>
  )
}

export default RoadMapContainer
