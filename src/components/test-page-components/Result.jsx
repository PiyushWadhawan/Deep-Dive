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

    let data;

    if(correct >=0 && correct<=260)
        data=1;
    else if(correct >=261 && correct<=380)
        data=2;
    else if(correct >=381 && correct<=490)
        data=3;
    else
        data=4;
        

    return (
        <>
            <div className='maindiv'>
                <div className='hugebox'>

                    <p className='oneh' > Thank you for your response, Here's are your recommended career options </p>

                    
                        {correct >=0 && correct<=260  ? 
                        <>
                            <div className='career_container'>
                                <div>Finance</div>
                                <div>Judicial</div>
                                <div>Management</div> 
                            </div> 
                            <button onClick={playAgain} className='startag'>Start Again</button>
                        </> : ''}

                        {correct >=261 && correct<=380  ? 
                        <>
                            <div className='career_container'>
                                <div>Engineering</div>
                                <div>Medical</div>
                                <div>Defense</div>
                            </div> 
                            <button onClick={playAgain} className='startag'>Start Again</button>
                        </> : ''}

                        {correct >=381 && correct<=490  ?
                        <>
                            <div className='career_container'>
                                <div>Defense</div> 
                                <div>Judicial</div>
                                <div>Management</div>
                                <div>Engineering</div>
                            </div> 
                            <button onClick={playAgain} className='startag'>Start Again</button>
                        </> : ''}

                        {correct > 490 ?
                        <>
                            <div className='career_container'>
                                <div>Sports</div>
                                <div>Arts</div> 
                                <div>Cinema</div>
                                <div>Journalism</div>
                            </div> 
                            <button onClick={playAgain} className='startag'>Start Again</button>
                        </> : ''} 

                </div>
            </div>
            <Results data={data} />
        </>
    )
}
