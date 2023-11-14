import * as S from './elements'

type Props = {
    children: JSX.Element
    shouldShow: boolean
    onRequestClose: () => void
}

const Modal = ({ children, shouldShow, onRequestClose }: Props) => {
    return shouldShow ? (
        <S.ModalBackground onClick={onRequestClose} >
            <S.ModalContainer onClick={e => e.stopPropagation()}>
                <S.ModalWrapper>
                    {children}
                </S.ModalWrapper>
            </S.ModalContainer>
        </S.ModalBackground>
    ) : null
}

export default Modal