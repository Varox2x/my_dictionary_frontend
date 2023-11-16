import { useEffect } from 'react'
import Card from '../elements/LearnView/Card'
import CardEscape from '../elements/LearnView/CardEscape'
import CardSpaceContainer from '../elements/LearnView/CardSpaceContainer'
import ControllArea from '../elements/LearnView/ControllArea'
import ProgressBar from '../elements/LearnView/ProgressBar'
import * as S from '../elements/LearnView/elements'
import ActionMenu from '../elements/LearnView/menu/ActionMenu'
import { useDispatchLearnView } from '../elements/LearnView/Store/LearnViewProvider'
import { ACTION_TYPES } from '../elements/LearnView/Store/actionTypes'
import { useGetSetWords } from '../../api/hooks/useGet'
import { getSetWords } from '../../api/setApi'
import { WordType } from '../../global/types'



const LearnView = () => {

    const dispatch = useDispatchLearnView();
    const { data } = useGetSetWords<WordType[]>(getSetWords, 1, 87)


    useEffect(() => {
        if (data?.data) {
            dispatch({ type: ACTION_TYPES.SET_WORDS, payload: data.data })
        }
    }, [data, dispatch])

    return (
        <S.Wrapper>
            <ProgressBar />
            <ActionMenu />
            <CardSpaceContainer>
                <CardEscape />
            </CardSpaceContainer>
            <ControllArea />
            <CardSpaceContainer>
                <Card />
            </CardSpaceContainer>
        </S.Wrapper>
    )
}

export default LearnView