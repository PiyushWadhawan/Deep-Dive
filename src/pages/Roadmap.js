import React from 'react'
import { useParams } from 'react-router-dom'
import RoadmapData from '../data/Roadmap/RoadMap.json'

function Roadmap() {

  const { heading, career_id } = useParams();

  return (
    <div>
      <h1>Roadmap for {heading}</h1>
      {
        RoadmapData[career_id].map((item) => <p>{item.point}</p>)
      }
    </div>
  )
}

export default Roadmap
