import { useState } from "react"

const InputStage = () => {

    const [inputData, setInputData] = useState<string>("")

    const handleInputType = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        setInputData(e.currentTarget.value)
    }

    const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.stopPropagation();
    }

    return (
        <>
            <input type="text" value={inputData} onClick={(e) => handleInputClick(e)} onChange={(e) => handleInputType(e)} />
        </>
    )
}

export default InputStage