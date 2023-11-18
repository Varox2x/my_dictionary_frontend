import React from 'react'
import { useLearnView } from '../Store/LearnViewProvider'

const ExampleSentenceStage = () => {

    const state = useLearnView()

    if (!state.wordsArray[state.currentIndex].exampleSentence || state.wordsArray[state.currentIndex].exampleSentence.length == 0) {
        return null
    }


    return (
        <div>
            <ul>
                {state.wordsArray[state.currentIndex].exampleSentence.map((el, index) => {
                    return <li key={index}>{el}</li>
                })}
            </ul>
        </div>
    )
}

export default ExampleSentenceStage