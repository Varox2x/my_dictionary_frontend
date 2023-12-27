import CreateNewWordButton from "./buttons/CreateNewWordButton"
import SaveButton from "./buttons/SaveButton"
import SetSettingsButton from "./buttons/SetSettingsButton"
import * as S from "./elements"

type Props = {
    setId: number
}

const PageButtons = ({ setId }: Props) => {
    return (
        <S.Wrapper>
            <SaveButton setId={setId} />
            <CreateNewWordButton />
            <SetSettingsButton setId={setId} />
        </S.Wrapper>
    )
}

export default PageButtons