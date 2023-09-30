import { useLearnView } from "./Store/LearnViewProvider"
import * as S from "./elements"

const ProgressBar = () => {

    const state = useLearnView()


    return (
        <S.ProgressBarWrapper>
            {state.currentIndex + 1} / {state.wordsArray.length}
        </S.ProgressBarWrapper>
    )
}

export default ProgressBar