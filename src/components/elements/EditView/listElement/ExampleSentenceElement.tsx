import { useDispatchEditView } from "../Store/EditViewProvider";
import { ACTION_TYPES } from "../Store/actionTypes";
import * as S from "../elements"
import { ENUM_WORD_RESOURCE } from "../types";


type Props = {
    word_id: number,
    value: string | null,
    index: number
}

const ExampleSentenceElement = ({ value, word_id, index }: Props) => {

    const dispatch = useDispatchEditView();

    const handleType = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch({
            type: ACTION_TYPES.UPDATE_WORD_RESOURCE, payload: {
                id: word_id,
                wordResourceType: ENUM_WORD_RESOURCE.EXAMPLE_SENTENCE,
                index,
                newValue: e.target.value
            }
        })
    }
    return (
        <S.Row>
            <S.TextArea onChange={(e) => handleType(e)} value={value || ""} />
        </S.Row>
    )
}

export default ExampleSentenceElement