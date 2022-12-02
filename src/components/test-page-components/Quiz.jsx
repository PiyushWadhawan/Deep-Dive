import React, { useContext, useState } from 'react'
import { QuizContext } from '../../Context/QuizHolder';
import './style.css'

export default function Quiz() {
    const [current, setCurrent] = useState(0);
    return (
        <div className= "oned">
            <Box current={current} next={setCurrent} />
        </div>
    )
}
const score = {
    "a" : 10,
    "b" : 20,
    "c" : 30,
    "d" : 40
}

const Box = ({ current, next }) => {
    const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
    const [ans, setAns] = useState("");

    const saveHandler = () => 
    {
        if(ans==="a")
        {
            setCorrect(correct + score.a);
            console.log(correct + score.a);
        }
        else if(ans==="b")
        {
            setCorrect(correct + score.b);
            console.log(correct + score.b);
        }
        else if(ans==="c")
        {
            setCorrect(correct + score.c);
            console.log(correct + score.c);
        }
        else if(ans==="d")
        {
            setCorrect(correct + score.d);
            console.log(correct + score.d);
        }

        setAns("");
        if ((current + 1) === quizzes.length) {
            setExit(true)
        } else {
            next(current + 1);
        }    

    }
    
    return (
        <div className="bigbox">
            <div className="quesbox">
                {current + 1}) {quizzes[current].question}</div>
            <div className='optbox'>

                <div className= "inallopts"onClick={() => setAns("a")}>{quizzes[current].a}</div>
                
                <div className="inallopts" onClick={() => setAns("b")}>{quizzes[current].b}</div>

                <div className="inallopts" onClick={() => setAns("c")}>{quizzes[current].c}</div>

                <div className="inallopts" onClick={() => setAns("d")}>{quizzes[current].d}</div>

            </div>

            <div className='rse'>
                <div className='t-btn reset' onClick={() => setAns("")}>Reset</div>
                <div className='t-btn save' onClick={saveHandler}>Save & Next</div>
                <div className='t-btn exit' onClick={() => setExit(true)}>Exit</div>
            </div>
        </div>
    )
}