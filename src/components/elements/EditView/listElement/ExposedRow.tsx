import { WordType } from "../../../../global/types"
import { useDispatchEditView } from "../Store/EditViewProvider";
import * as S from "../elements"
import { ACTION_TYPES } from "../Store/actionTypes";
import NameInput from "./NameInput";
import { ENUM_WORD_RESOURCE } from "../types";
import DefinitionInput from "./DefinitionInput";

type Props = WordType;


const ExposedRow = ({ id, names, definitions }: Props) => {

    const dispatch = useDispatchEditView();


    const handleCreateName = async () => {
        await dispatch({
            type: ACTION_TYPES.CREATE_WORD_RESOURCE, payload: {
                id: id,
                wordResourceType: ENUM_WORD_RESOURCE.NAMES,
            }
        })
        const row = document.getElementById(`resource_wrapper_name${id}`)
        const rowLength = row?.getElementsByTagName("input").length
        if (rowLength) {
            row?.getElementsByTagName("input")[rowLength - 1].focus()
        }
    }

    const handleCreateDefinition = async () => {
        await dispatch({
            type: ACTION_TYPES.CREATE_WORD_RESOURCE, payload: {
                id: id,
                wordResourceType: ENUM_WORD_RESOURCE.DEFINITIONS,
            }
        })
        const row = document.getElementById(`resource_wrapper_definition${id}`)
        const rowLength = row?.getElementsByTagName("input").length
        if (rowLength) {
            row?.getElementsByTagName("input")[rowLength - 1].focus()
        }
    }

    return (
        <S.Row  >
            <S.ResourceWordWrapper id={`resource_wrapper_name${id}`}>
                {names.map((singleName, index) => {
                    return <NameInput key={index} value={singleName} index={index} word_id={id} />
                })}
                <S.AddButton onClick={() => handleCreateName()} >+</S.AddButton>
            </S.ResourceWordWrapper>
            <S.ResourceWordWrapper id={`resource_wrapper_definition${id}`}>
                {definitions.map((singleDefinition, index) => {
                    return <DefinitionInput key={index} value={singleDefinition} index={index} word_id={id} />
                })}
                <S.AddButton onClick={() => handleCreateDefinition()} >+</S.AddButton>
            </S.ResourceWordWrapper>
        </S.Row>
    )
}

export default ExposedRow