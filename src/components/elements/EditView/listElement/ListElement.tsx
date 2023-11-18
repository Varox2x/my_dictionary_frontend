
import React, { useState } from "react";
import { ResponseDataType, WordType } from "../../../../global/types"
import * as S from "../elements"
import { useDispatchEditView } from "../Store/EditViewProvider";
import { ACTION_TYPES } from "../Store/actionTypes";
import ExampleSentenceElement from "./ExampleSentenceElement";
import ExposedRow from "./ExposedRow";
import { ENUM_WORD_RESOURCE } from "../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { deleteWord } from "../../../../api/setApi";
import { useParams } from "react-router-dom";

type Props = WordType

const ListElement: React.FunctionComponent<Props> = ({
    id,
    definitions,
    names,
    exampleSentence
}) => {
    const { id: setId } = useParams();

    const [showDetails, setShowDetails] = useState<boolean>(false)
    const dispatch = useDispatchEditView();
    const queryClient = useQueryClient()
    const {
        mutate
    } = useMutation<AxiosResponse, Error, number>({
        mutationFn: deleteWord,
        mutationKey: ['setswords', Number(setId)],
        onSuccess: () => {
            queryClient.setQueryData<ResponseDataType<WordType[]>>(
                ['setswords', Number(setId)],
                (data: ResponseDataType<WordType[]> | undefined) => {
                    if (!data) return undefined
                    data.data = [...data.data.filter(el => el.id != id)]
                    return data
                }
            )
        },
    })

    const handleCreateExampleSentence = () => {
        dispatch({
            type: ACTION_TYPES.CREATE_WORD_RESOURCE, payload: {
                id,
                wordResourceType: ENUM_WORD_RESOURCE.EXAMPLE_SENTENCE,
            }
        })
        setShowDetails(true)
    }

    return (
        <S.SingleElementWrapper $height={!showDetails}>
            <ExposedRow id={id} exampleSentence={exampleSentence} definitions={definitions} names={names} />
            {exampleSentence && exampleSentence.map((singleExampleSentence, index) => {
                if (singleExampleSentence == null) return
                return <ExampleSentenceElement key={index} word_id={id} value={exampleSentence[index]} index={index} />
            })}
            <S.WordListActionWrapper>
                <S.ShowDetailsButton onClick={() => mutate(id)} >D</S.ShowDetailsButton>
                <S.ShowDetailsButton onClick={() => handleCreateExampleSentence()} >+</S.ShowDetailsButton>
                {exampleSentence && exampleSentence.length > 0 && <S.ShowDetailsButton onClick={() => setShowDetails(prev => !prev)} >\/</S.ShowDetailsButton>}
            </S.WordListActionWrapper>
        </S.SingleElementWrapper>
    )
}

export default ListElement