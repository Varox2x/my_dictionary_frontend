import { useMemo } from "react";
import { useLearnView } from "../Store/LearnViewProvider";
import DefaultView from "../card/DefaultView";




const replaceHalfWithUnderscore = (word: string) => {
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

const formatData = (array: string[]) => {
    let newData: string[] = []
    array.forEach(el => {
        newData = [...newData, replaceHalfWithUnderscore(el)]
    })

    return newData
}

const HintStage = () => {

    const state = useLearnView()
    const hiddenWords = useMemo(() => formatData(state.wordsArray[state.currentIndex].definitions), [state.wordsArray[state.currentIndex].definitions]);

    return (
        <DefaultView data={hiddenWords} />
    )
}

export default HintStage