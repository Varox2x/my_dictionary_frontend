import React, { useRef } from 'react'
import { WordResoureType } from '../../types'
import AddNewResourceButton from './AddNewResourceButton'
import * as S from "./elements"
import { NewWordType } from './CreateWord'
import SingleInput from './inputs/SingleInput'
import SingleTextAre from './inputs/SingleTextAre'

type Props = {
    wordResource: WordResoureType,
    data: NewWordType,
    setData: React.Dispatch<React.SetStateAction<NewWordType>>,
    isTextArea?: boolean,
}

const SingleResourceRow = ({ data, setData, wordResource, isTextArea }: Props) => {

    const resourceRef = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([]);


    const handleType = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const arrayCopy = [...data[wordResource]]
        arrayCopy[index] = e.target.value
        setData({ ...data, [wordResource]: arrayCopy })
        // resourceRef.current[index].value = e.target.value
    }
    const handleDelete = (index: number) => {
        const arrayCopy = [...data[wordResource]]
        arrayCopy.splice(index, 1)
        setData({ ...data, [wordResource]: arrayCopy })
    }

    const isAddNewResourceAvaible = (): boolean => {
        return !data[wordResource].includes("")
    }

    const handleAddNewResourceButton = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        if (isAddNewResourceAvaible()) {
            await setData(prev => {
                return {
                    ...prev,
                    [wordResource]: [...prev[wordResource], ""]
                }
            })
            const lastResource = resourceRef.current[resourceRef.current.length - 1];
            lastResource.focus();
        }
    }

    return (
        <>
            <S.ResourceTitle>
                {wordResource}
            </S.ResourceTitle>
            {data[wordResource].map((el, index) => {
                if (isTextArea) {
                    return <SingleTextAre value={el} resourceRef={resourceRef} index={index} key={index} onChange={(e) => handleType(e, index)} handleDelete={() => handleDelete(index)} />
                }
                return <SingleInput value={el} index={index} resourceRef={resourceRef} key={index} onChange={(e) => handleType(e, index)} handleDelete={() => handleDelete(index)} />

            })}
            <AddNewResourceButton isVisible={isAddNewResourceAvaible()} onClick={handleAddNewResourceButton} />
        </>
    )
}

export default SingleResourceRow