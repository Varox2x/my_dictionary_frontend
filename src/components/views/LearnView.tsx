import Card from '../elements/LearnView/Card'
import CardEscape from '../elements/LearnView/CardEscape'
import CardSpaceContainer from '../elements/LearnView/CardSpaceContainer'
import ControllArea from '../elements/LearnView/ControllArea'
import { LearnViewProvider, useLearnView } from '../elements/LearnView/Store/LearnViewProvider'
import * as S from '../elements/LearnView/elements'
import ActionMenu from '../elements/LearnView/menu/ActionMenu'



const LearnView = () => {

    const state = useLearnView()

    console.log(state)

    return (
        <LearnViewProvider>
            <S.Wrapper>
                <ActionMenu />
                <CardSpaceContainer>
                    <CardEscape />
                </CardSpaceContainer>
                <ControllArea />
                <CardSpaceContainer>
                    <Card />
                </CardSpaceContainer>
            </S.Wrapper>
        </LearnViewProvider>
    )
}

export default LearnView