import { useEffect } from 'react'
import Card from '../elements/LearnView/Card'
import CardEscape from '../elements/LearnView/CardEscape'
import CardSpaceContainer from '../elements/LearnView/CardSpaceContainer'
import ControllArea from '../elements/LearnView/ControllArea'
import ProgressBar from '../elements/LearnView/ProgressBar'
import * as S from '../elements/LearnView/elements'
import * as GlobalStyles from '../elements/global/elements'
import ActionMenu from '../elements/LearnView/menu/ActionMenu'
import { useDispatchLearnView, useLearnView } from '../elements/LearnView/Store/LearnViewProvider'
import { ACTION_TYPES } from '../elements/LearnView/Store/actionTypes'
import { WordType } from '../../global/types'
import { getSetWords } from '../../api/setApi'
import { useGetSetWords } from '../../api/hooks/queries/useGetSetWords'
import SetActionMenu from '../elements/LearnView/menu/SetActionMenu'
import LoadingSpinner from '../../global/loadingSpinner/LoadingSpinner'

type Props = {
    setId: number
}


const LearnView = ({ setId }: Props) => {

    const dispatch = useDispatchLearnView();
    const state = useLearnView()
    const { data, isLoading, dataUpdatedAt } = useGetSetWords<WordType[]>(getSetWords, 1, setId)

    useEffect(() => {
        if (data?.data) {
            dispatch({ type: ACTION_TYPES.SET_WORDS, payload: data.data })
        }
    }, [data, dispatch, dataUpdatedAt])

    if (isLoading) {
        return <GlobalStyles.LoadingWrapper ><LoadingSpinner isLoading={true} isWhite={false} /></GlobalStyles.LoadingWrapper>
    }

    if (state.wordsArray.length == 0) {
        return <p>empty set - visit edit to add word</p>
    }

    return (
        <S.Wrapper>
            <ProgressBar />
            <ActionMenu />
            <SetActionMenu />
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