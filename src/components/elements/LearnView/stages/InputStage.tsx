import { useEffect, useRef, useState } from "react"
import { useLearnView } from "../Store/LearnViewProvider"
import * as S from '../elements';
import { CiCircleCheck } from "react-icons/ci";
import IconContainer from "../../../../global/hoc/IconContainer";

const ENUM_USER_RESPONSE = {
    NOT_PROVIDE: 'NOT_PROVIDE',
    CORRECT: 'CORRECT',
    NOT_CORRECT: 'NOT_CORRECT',
} as const
export type UserResponseType = keyof typeof ENUM_USER_RESPONSE;


const InputStage = () => {


    const state = useLearnView()

    const [inputData, setInputData] = useState<string>("")
    const [userResponse, setUserResponse] = useState<UserResponseType>(ENUM_USER_RESPONSE.NOT_PROVIDE)
    const inputRef = useRef<HTMLInputElement>(null);

    const validateWord = () => {
        if (state.wordsArray[state.currentIndex].definitions) {
            if ([...state.wordsArray[state.currentIndex].definitions.map(el => el.toUpperCase())].includes(inputData.toUpperCase())) {
                setUserResponse(ENUM_USER_RESPONSE.CORRECT)
            } else {
                setUserResponse(ENUM_USER_RESPONSE.NOT_CORRECT)

            }
        }
    }

    const handleInputType = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        e.preventDefault()
        setInputData(e.currentTarget.value)
        setUserResponse(ENUM_USER_RESPONSE.NOT_PROVIDE)
    }

    const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
    }

    const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
        e.stopPropagation();
        e.preventDefault();
        validateWord()
    }

    useEffect(() => {
        if (inputRef.current) {
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus()
                }
            }, 500);
        }
    }, []);

    return (
        <S.InputStageWrapper onSubmit={(e) => handleCheck(e)} background={userResponse == ENUM_USER_RESPONSE.NOT_PROVIDE ? "transparent" : userResponse == ENUM_USER_RESPONSE.CORRECT ? "rgba(4, 245, 11, 0.46)" : "rgba(255, 0, 66, 1)"} >
            <S.Input ref={inputRef} type="text" value={inputData} onClick={(e) => handleInputClick(e)} onChange={(e) => handleInputType(e)} />
            <S.CheckButton onClick={(e) => e.stopPropagation()} type="submit">
                <IconContainer color="#030507" size={40} icon={CiCircleCheck} />
            </S.CheckButton>
        </S.InputStageWrapper>
    )
}

export default InputStage