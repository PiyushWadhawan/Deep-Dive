import React, { useContext } from 'react'
import { QuizContext } from '../../Context/QuizHolder'
import './style.css'


export default function Start() {
    const { setStart } = useContext(QuizContext)
    return (
        <div className="startdiv">
            <button onClick={() => setStart(true)} className="startbut">Start Test</button>
        </div>
    )
}
