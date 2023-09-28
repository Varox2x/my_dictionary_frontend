import * as S from "./elements"
import { AnimatePresence } from 'framer-motion';

type Props = {
    children: JSX.Element;
};

const CardSpaceContainer = ({ children }: Props) => {
    return (
        <S.CardSpaceContainer>
            <AnimatePresence>
                {children}
            </AnimatePresence>
        </S.CardSpaceContainer>
    )
}

export default CardSpaceContainer