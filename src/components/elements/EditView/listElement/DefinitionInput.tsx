import { ExampleSentenceType } from "../../../../global/types";
import { useDispatchEditView } from "../Store/EditViewProvider";
import { ACTION_TYPES } from "../Store/actionTypes";
import * as S from "../elements"
import { ENUM_WORD_RESOURCE } from "../types";

type Props = {
    value: string,
    index: number,
    word_id: number
}

const DefinitionInput = ({ value, index, word_id }: Props) => {

    const dispatch = useDispatchEditView();


    const handleType = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // if (e.target.value && e.target.value.includes('/')) {
        //     await dispatch({
        //         type: ACTION_TYPES.CREATE_WORD_RESOURCE, payload: {
        //             id: word_id,
        //             wordResourceType: ENUM_WORD_RESOURCE.NAMES,
        //         }
        //     })
        //     document.getElementById(`input-name-${index + 1}${word_id}`)?.focus()
        //     return
        // }
        await dispatch({
            type: ACTION_TYPES.UPDATE_WORD_RESOURCE, payload: {
                id: word_id,
                wordResourceType: ENUM_WORD_RESOURCE.DEFINITIONS,
                index,
                newValue: e.target.value
            }
        })
    }
    const handleRemove = () => {
        dispatch({
            type: ACTION_TYPES.DELETE_WORD_RESOURCE, payload: {
                id: word_id,
                wordResourceType: ENUM_WORD_RESOURCE.DEFINITIONS,
                index,
            }
        })
    }


    return (
        <S.WordInputWrapper>
            <S.Input id={`input-name-${index + 1}${word_id}`} $width={`${value.length * 10}px`} key={"aa"} value={value} onChange={(e) => handleType(e)} />
            <S.DeteleButton onClick={() => handleRemove()} >x</S.DeteleButton>
        </S.WordInputWrapper>
    )
}

export default DefinitionInput