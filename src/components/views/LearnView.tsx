import Card from '../elements/LearnView/Card'
import CardEscape from '../elements/LearnView/CardEscape'
import CardSpaceContainer from '../elements/LearnView/CardSpaceContainer'
import ControllArea from '../elements/LearnView/ControllArea'
import ProgressBar from '../elements/LearnView/ProgressBar'
import { LearnViewProvider } from '../elements/LearnView/Store/LearnViewProvider'
import * as S from '../elements/LearnView/elements'
import ActionMenu from '../elements/LearnView/menu/ActionMenu'



const LearnView = () => {

    return (
        <LearnViewProvider>
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
        </LearnViewProvider>
    )
}

export default LearnView