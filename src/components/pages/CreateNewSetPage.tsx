import React, { useState } from 'react'
import { useCreateSet } from '../../api/hooks/mutations/useCreateSet'

const CreateNewSetPage = () => {

    const [name, setName] = useState<string>("")
    const {
        mutate,
    } = useCreateSet()

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