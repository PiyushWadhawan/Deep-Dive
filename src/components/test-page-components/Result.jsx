import React, { useContext } from 'react'
import { QuizContext } from '../../Context/QuizHolder'
import Results from './Results'
import './style.css'


export default function Result() {
    const { correct, setExit, setStart /*,quizzes*/ } = useContext(QuizContext)
    const playAgain = () => {
        setExit(false);
        setStart(false);
    }

    return (
        <>
            <div className='maindiv'>
                <div className='hugebox'>

                    <p className='oneh' > Thank you for your response, Here's are your recommended career options :</p>

                    
                        {correct >=150 && correct<=260  ? <div>Bussiness Man <br /> Entepreneur <br/> Real EState Agent <br/> PR Manager <br/> Event Organizer </div> : ''}

                        {correct >=270 && correct<=380  ? 
                        <>
                            <div className='career_container'>
                                <div>Engineer</div>
                                <div>Scientist</div>
                                <div>Biochemist</div>
                                <div>Pilot</div>
                                <div>Astronaut</div> 
                            </div> 
                            <button onClick={playAgain} className='startag'>Start Again</button>
                        </> : ''}

                        {correct >=390 && correct<=490  ? <div>
                        Leader <br/> Teacher <br/> Motivational Coach <br/> Social Worker <br/> TV Host <br/> President! </div> : ''}

                        {correct > 490 ? <div>
                        Artist <br/> Writer <br/> Photographer<br/> Designer <br/> Dancer, Actor, Musician <br/> or other Art form </div> : ''}

                </div>
            </div>
            <Results/>
        </>
    )
}
