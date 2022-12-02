import React from 'react'
import Result from "../components/test-page-components/Result";
import Start from "../components/test-page-components/Start";
import Quiz from "../components/test-page-components/Quiz";
import { QuizContext } from "../Context/QuizHolder";
import { useContext } from "react";

function Test() {
    
    const { start, exit } = useContext(QuizContext);
  
    return (
    <>
      {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <Quiz />
                :
                <Start />
            }
          </>
          : <Result />
      }

      {/* <Result /> */}
    </>
  );
}

export default Test
