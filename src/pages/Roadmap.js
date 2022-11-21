import React from 'react'
import { useParams } from 'react-router-dom'

function Roadmap() {

    const { career_id } = useParams();

  return (
    <div>
      <h1>Roadmap for career {career_id}</h1>
    </div>
  )
}

export default Roadmap
