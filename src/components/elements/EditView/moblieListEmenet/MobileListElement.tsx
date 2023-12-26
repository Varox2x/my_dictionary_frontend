import * as S from "./elements"
import { WordType } from '../../../../global/types'
import ResourceField from './ResourceField'
import SingleInput from './inputs/SingleInput'
import { ENUM_WORD_RESOURCE } from '../types'
import SingleTextArea from './inputs/SingleTextArea'
import { useDispatchEditView, useEditView } from '../Store/EditViewProvider'
import { ACTION_TYPES } from '../Store/actionTypes'
import { MdExpandMore } from "react-icons/md";
import IconContainer from "../../../../global/hoc/IconContainer"

type Props = WordType


const MobileListElement = ({
    id,
}: Props) => {

    // const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatchEditView();
    const state = useEditView()

    const handleShowButton = (id: number) => {
        if (state.currentlyEditingWord == id) {
            dispatch({
                type: ACTION_TYPES.SET_CURRENTLY_EDITING_WORD, payload: false
            })
        } else {
            dispatch({
                type: ACTION_TYPES.SET_CURRENTLY_EDITING_WORD, payload: id
            })
        }

    }

    return (
        <S.SingleElementWrapper onClick={() => handleShowButton(id)} $isOpen={state.currentlyEditingWord == id}>
            {state.currentlyEditingWord != id && <IconContainer icon={MdExpandMore} style={{ position: 'absolute', right: "10px", top: '15px' }} />}
            <S.WordsFieldWrapper>
                <S.Column $isBorder={true} $isOpen={state.currentlyEditingWord == id}>
                    <ResourceField editComponent={SingleInput} wordId={id} wordResource={ENUM_WORD_RESOURCE.NAMES} />
                </S.Column>
                <S.Column>
                    <ResourceField editComponent={SingleInput} wordId={id} wordResource={ENUM_WORD_RESOURCE.DEFINITIONS} />
                </S.Column>
            </S.WordsFieldWrapper>
            <S.ExampleSentencesFieldWrapper>
                <ResourceField editComponent={SingleTextArea} wordId={id} wordResource={ENUM_WORD_RESOURCE.EXAMPLE_SENTENCE} />
            </S.ExampleSentencesFieldWrapper>
        </S.SingleElementWrapper>
    )
}

export default MobileListElement