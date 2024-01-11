import React, { useState } from 'react'
import { useCreateSet } from '../../api/hooks/mutations/useCreateSet'
import * as S from '../elements/createNewSetPage/elements'
import { MdCreateNewFolder } from "react-icons/md";
import IconContainer from '../../global/hoc/IconContainer';
import { useDispatchStore } from '../../store/StoreProvider';
import { ACTION_TYPES } from '../../store/actionTypes';
import { MODE_ENUM } from '../../global/types';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../global/loadingSpinner/LoadingSpinner';
const CreateNewSetPage = () => {

    const dispatch = useDispatchStore()
    const navigate = useNavigate();

    const [name, setName] = useState<string>("")
    const [errorContent, setErrorContent] = useState<string>(" ")
    const {
        mutateAsync, isLoading
    } = useCreateSet()

    const handleSend = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        mutateAsync(name).then(r => {
            if (r.id) {
                dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.EDIT })
                navigate(`../set/${r.id}`, { replace: true })
            }
        }).catch(err => {
            if (err.response?.data?.message[0]) {
                setErrorContent(err.response.data.message[0])
            }
        })
    }

    const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        setErrorContent("")
    }

    const disabledButton = (): boolean => {
        return !(name.length > 0)
    }

    return (
        <S.Wrapper>
            <S.Form onSubmit={(e) => handleSend(e)} >
                <S.Label>
                    <S.Input $isText={name.length > 0} type='text' placeholder='set name' onChange={(e) => handleType(e)} value={name} disabled={isLoading} />
                    {!isLoading && <S.Button $isDisabled={disabledButton()} disabled={disabledButton()}><IconContainer size={35} icon={MdCreateNewFolder} color={disabledButton() ? '#CFCFCF' : '#48CAE4'} /></S.Button>}
                    <LoadingSpinner isLoading={isLoading} isWhite={true} />
                </S.Label>
                <S.Error>{errorContent}</S.Error>
            </S.Form>
        </S.Wrapper>
    )
}

export default CreateNewSetPage