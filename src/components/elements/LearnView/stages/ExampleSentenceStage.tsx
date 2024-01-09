import { useLearnView } from '../Store/LearnViewProvider'
import Slider from './exampleSentenceStage/Slider'

const ExampleSentenceStage = () => {

    const state = useLearnView()

    if (!state.wordsArray[state.currentIndex].exampleSentence || state.wordsArray[state.currentIndex].exampleSentence.length == 0) {
        return null
    }

    return <Slider data={state.wordsArray[state.currentIndex].exampleSentence} />
}

export default ExampleSentenceStage