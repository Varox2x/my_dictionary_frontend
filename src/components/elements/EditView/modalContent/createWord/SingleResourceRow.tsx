import React from 'react'
import { WordResoureType } from '../../types'
import AddNewResourceButton from './AddNewResourceButton'
import * as S from "../../elements"
import { NewWordType } from './CreateWord'

type Props = {
    wordResource: WordResoureType,
    data: NewWordType,
    setData: React.Dispatch<React.SetStateAction<NewWordType>>,
    isTextArea?: boolean
}

const SingleResourceRow = ({ data, setData, wordResource, isTextArea }: Props) => {

    const handleType = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const arrayCopy = [...data[wordResource]]
        arrayCopy[index] = e.target.value
        setData({ ...data, [e.target.name]: arrayCopy })
    }

    return (
        <S.Row>
            {wordResource}
            {data[wordResource].map((el, index) => {
                if (isTextArea) {
                    return <textarea key={index} name={wordResource} value={el} onChange={(e) => handleType(e, index)} />
                }
                return <input key={index} name={wordResource} value={el} onChange={(e) => handleType(e, index)} />

            })}
            <AddNewResourceButton setData={setData} wordResource={wordResource} />
        </S.Row>
    )
}

export default SingleResourceRow