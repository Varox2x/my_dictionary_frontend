import { useState } from "react"
import * as S from "./elements"
import { ENUM_WORD_RESOURCE } from "../../types"
import SingleResourceRow from "./SingleResourceRow"
import { useParams } from "react-router-dom"
import { useCreateWord } from "../../../../../api/hooks/mutations/useCreateWord"

export type NewWordType = {
    names: string[],
    definitions: string[],
    exampleSentence: string[],
}


const CreateWord = () => {

    const [data, setData] = useState<NewWordType>({ names: [""], definitions: [""], exampleSentence: [""] })
    const { id: setId } = useParams();

    const {
        mutate
    } = useCreateWord({ setId: Number(setId) })

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
            <S.Column>
                <SingleResourceRow data={data} setData={setData} wordResource={ENUM_WORD_RESOURCE.NAMES} />
            </S.Column>
            <S.Column>
                <SingleResourceRow data={data} setData={setData} wordResource={ENUM_WORD_RESOURCE.DEFINITIONS} />
            </S.Column>
            <S.Row>
                <SingleResourceRow data={data} setData={setData} wordResource={ENUM_WORD_RESOURCE.EXAMPLE_SENTENCE} isTextArea={true} />
            </S.Row>
            <S.AddButton onClick={() => handleAddWord()} > DODAJ</S.AddButton>
        </S.CreateWordWrapper >
    )
}

export default CreateWord