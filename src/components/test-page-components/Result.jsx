import React, { useContext } from 'react'
import { QuizContext } from '../../Context/QuizHolder'
import './style.css'


export default function Result() {
    const { correct, setExit, setStart /*,quizzes*/ } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }

    return (
        <div className='maindiv'>
            <div className='hugebox'>

                <p className='oneh' > Hey! Thanks For your Honest response Here's your Recommended Career Traits : </p>

                <p className='twoh'>
                
                    {correct >=150 && correct<=260  ? <div>Bussiness Man <br /> Entepreneur <br/> Real EState Agent <br/> PR Manager <br/> Event Organizer </div> : ''}

                    {correct >=270 && correct<=380  ? <div>
                    Engineer <br/> Scientist <br/> Biochemist <br/> Pilot <br/> Astronaut </div> : ''}

                    {correct >=390 && correct<=490  ? <div>
                    Leader <br/> Teacher <br/> Motivational Coach <br/> Social Worker <br/> TV Host <br/> President! </div> : ''}

                    {correct > 490 ? <div>
                    Artist <br/> Writer <br/> Photographer<br/> Designer <br/> Dancer, Actor, Musician <br/> or other Art form </div> : ''}
                
                </p>

                <button onClick={playAgain} className='startag'>Start Again</button>

            </div>
        </div>
    )
}
