import React, { useState } from 'react'
import { createSet } from '../../api/setApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Set } from '../../global/types'
import { QueryData } from '../../global/types'



const CreateNewSetPage = () => {

    const [name, setName] = useState<string>("")
    const queryClient = useQueryClient()

    const {
        mutate,
    } = useMutation<Set, Error, string>({
        mutationFn: createSet,
        onSuccess: (newData: Set) => {
            queryClient.setQueryData<QueryData>(
                ['sets'],
                (data: QueryData | undefined) => {
                    if (!data) return undefined
                    if (data?.pages.length == 0) return data
                    const increasedPage: Set[] = [...data.pages[0].data, newData]
                    data.pages[0].data = increasedPage
                    return data
                }
            )
        },
    })

    const handleSend = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        mutate(name)
    }

    return (
        <form onSubmit={(e) => handleSend(e)} >
            <input placeholder='set name' onChange={(e) => setName(e.target.value)} value={name} />
            <button>CREATE</button>
        </form>
    )
}

export default CreateNewSetPage