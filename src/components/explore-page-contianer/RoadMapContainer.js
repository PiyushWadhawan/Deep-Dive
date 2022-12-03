import React from 'react'
import './RoadMapContainer.css'

function RoadMapContainer( {point, resources} ) {

  let domain="";
  if(resources)
  {
    domain = (new URL(resources));
    domain = domain.hostname;
  }

  return (
    <div className='roadmap-container'>

        <div className='container1'>
            
        </div>
        <div className='container2'>
            <h4 style={{"fontWeight": "normal"}}>{point}</h4>
            <br></br>
            {resources ? <p>Resources: <a className="resource-link" href={resources}>{domain}</a></p>: " "}
        </div>

    </div>
  )
}

export default RoadMapContainer
