import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
    {
        "question": "If you had access to a time machine, would you rather travel to: ",
        "a": "I'd sell it",
        "b": "The Future",
        "c": "To new places, not in time",
        "d": "The Past",
        "correct": "d"
    },
    {
        "question": "What sounds like the worst idea to you?",
        "a": "Annoying Boss",
        "b": "Travelling to the same place",
        "c": "Give away your social media",
        "d": "You can't choose outfit",
        "correct": "b"
    },
    {
        "question": "You feel happiest when you... ",
        "a": "Perform on stage",
        "b": "Solve Technical issue ",
        "c": "Solve friend's problem",
        "d": "Create Something",
        "correct": "d"
    },
    {
        "question": "You friends will be at your place in 30 minutes, your actions? ",
        "a": "Guests? I don't think so",
        "b": "Clean up ASAP",
        "c": "Let's see what I can cook",
        "d": "Gotta pick the right music",
        "correct": "c"
    },
    {
        "question": "You just won unlimted access to your favorite ride at the funfair. What is it going to be?",
        "a": "Bumper Cars",
        "b": "Roller coaster please",
        "c": "Merry-go-round",
        "d": "I'd swap it for craft materials",
        "correct": "c"
    },
    {
        "question": "Describe your ideal workout: ",
        "a": "No workout at all",
        "b": "Gym",
        "c": "I run",
        "d": "Yoga is life",
        "correct": "c"
    },
    {
        "question": "How much time do you spend on social media daily? ",
        "a": "No more than 1 Hour",
        "b": "I don't have time for that",
        "c": "24 hours a day 7 days a week",
        "d": "About 3 Hours",
        "correct": "a"
    },
    {
        "question": "Which of those sounds like your socail media behavior",
        "a": "I share memes and posts",
        "b": "I'm not using any of those",
        "c": "I post a lot about myself",
        "d": "O mostly scroll the feed",
        "correct": "c"
    },
    {
        "question": "Pick a word that describes your mood",
        "a": "Following",
        "b": "Lightning",
        "c": "Sunrise",
        "d": "Lost",
        "correct": "c"
    },
    {
        "question": "You Decide to paint the walls in your room for a change. Is it going to be: ",
        "a": "Grey",
        "b": "Blue",
        "c": "Green",
        "d": "Variety of colors",
        "correct": "d"
    },
    {
        "question": "Time to fill that new empty wall. Will you go with: ",
        "a": "Something work-related",
        "b": "Abstract and simple art",
        "c": "A favourite quote ",
        "d": "A photo collage",
        "correct": "b"
    },
    {
        "question": "You got a suprise bonus at work. How are you going to spend it?",
        "a": "I'll invest it",
        "b": "Private jet",
        "c": "I'll throw a party",
        "d": "Designer",
        "correct": "b"
    },
    {
        "question": "Describe the perfect office space for you",
        "a": "My own big office or workshop",
        "b": "A cubbicle",
        "c": "My favorite coffee shop",
        "d": "An informal lounge",
        "correct": "b"
    },
    {
        "question": "Would rather be: ",
        "a": "Richest one but forever alone",
        "b": "A world class villian",
        "c": "An unrecognized hero",
        "d": "Always happy but poor",
        "correct": "b"
    },
    {
        "question": "Reward Yourself! You can pick one desert! ",
        "a": "Salad",
        "b": "Some fancy cake",
        "c": "Brownies for life",
        "d": "Sundae please",
        "correct": "b"
    },

]


export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };
