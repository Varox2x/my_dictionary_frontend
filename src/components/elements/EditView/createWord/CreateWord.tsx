import { useState } from "react"
import * as S from "../elements"
import { ENUM_WORD_RESOURCE } from "../types"
import SingleResourceRow from "./SingleResourceRow"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createWord } from "../../../../api/setApi"
import { CreateWordApiArgsType, ResponseDataType, WordType } from "../../../../global/types"
import { useParams } from "react-router-dom"

export type NewWordType = {
    names: string[],
    definitions: string[],
    exampleSentence: string[],
}





const CreateWord = () => {

    const [data, setData] = useState<NewWordType>({ names: [""], definitions: [""], exampleSentence: [""] })
    const queryClient = useQueryClient()
    const { id: setId } = useParams();

    const {
        mutate
    } = useMutation<WordType, Error, CreateWordApiArgsType>({
        mutationFn: createWord,
        mutationKey: ['setswords', Number(setId)],
        onSuccess: (newData: WordType) => {
            queryClient.setQueryData<ResponseDataType<WordType[]>>(
                ['setswords', Number(setId)],
                (data: ResponseDataType<WordType[]> | undefined) => {
                    if (!data) return undefined
                    data.data = [...data.data, newData]
                    return data
                }
            )
        },
    })

    const handleAddWord = () => {
        const formattedData = { ...data }
        const resourcesToCheck = [...Object.values(ENUM_WORD_RESOURCE)]
        resourcesToCheck.forEach(resource => {
            const singleResource = [...data[resource].filter(el => el != '')]
            formattedData[resource] = singleResource
        })
        mutate({ data: formattedData, setId: Number(setId) })
        setData({ names: [""], definitions: [""], exampleSentence: [""] })
    }


    return (
        <S.CreateWordWrapper>
            <SingleResourceRow data={data} setData={setData} wordResource={ENUM_WORD_RESOURCE.NAMES} />
            <SingleResourceRow data={data} setData={setData} wordResource={ENUM_WORD_RESOURCE.DEFINITIONS} />
            <SingleResourceRow data={data} setData={setData} wordResource={ENUM_WORD_RESOURCE.EXAMPLE_SENTENCE} isTextArea={true} />
            <button onClick={() => handleAddWord()} > DODAJ</button>
        </S.CreateWordWrapper >
    )
}

export default CreateWord