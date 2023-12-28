import { RefObject } from 'react';
import * as S from './elements'
import DeleteButton from '../../../moblieListEmenet/buttons/DeleteButton';

type Props = {
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => void,
    resourceRef: RefObject<(HTMLInputElement | HTMLTextAreaElement)[]>,
    index: number,
    handleDelete: () => void

}

const SingleTextAre = ({ onChange, resourceRef, index, handleDelete }: Props) => {

    const handleDeleteButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        handleDelete()
    }


    return (
        <S.Wrapper>
            <S.TextArea placeholder=' ' ref={(el) => {
                if (resourceRef.current) {
                    resourceRef.current[index] = el as HTMLTextAreaElement
                }
            }} onChange={(e) => onChange(e)} />
            <DeleteButton color='black' disabled={false} onClick={(e) => handleDeleteButton(e)} />
        </S.Wrapper>
    )
}

export default SingleTextAre