import { useMemo } from "react";
import { useLearnView } from "../Store/LearnViewProvider";




function replaceHalfWithUnderscore(word: string) {
    if (typeof word !== 'string' || word.length === 0) {
        return word;
    }
    const wordArray = word.split('');
    const halfLength = Math.ceil(wordArray.length / 2);
    const indicesToReplace: number[] = [];
    while (indicesToReplace.length < halfLength) {
        const randomIndex = Math.floor(Math.random() * wordArray.length);
        if (!indicesToReplace.includes(randomIndex)) {
            indicesToReplace.push(randomIndex);
        }
    }
    indicesToReplace.forEach((index) => {
        wordArray[index] = '_';
    });
    return wordArray.join('');
}

const HintStage = () => {

    const state = useLearnView()
    const hiddenWord = useMemo(() => replaceHalfWithUnderscore(state.wordsArray[state.currentIndex].definitions), [state.wordsArray[state.currentIndex].definitions]);

    return (
        <div>{hiddenWord}</div>
    )
}

export default HintStage