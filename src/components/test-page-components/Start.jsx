import React, { useContext } from 'react'
import { QuizContext } from '../../Context/QuizHolder'
import './style.css'


export default function Start() {
    const { setStart } = useContext(QuizContext)
    return (
        <div className="startdiv" style={{"background": "url('https://images.hdqwalls.com/wallpapers/apple-waves-5k-image.jpg') center center/cover no-repeat"}}>
            <button onClick={() => setStart(true)} className="startbut">Start Test</button>
        </div>
    )
}
