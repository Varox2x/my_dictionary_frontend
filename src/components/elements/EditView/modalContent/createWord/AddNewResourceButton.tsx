import { WordResoureType } from "../../types"
import { NewWordType } from "./CreateWord"

type Props = {
    wordResource: WordResoureType,
    setData: React.Dispatch<React.SetStateAction<NewWordType>>,
}

const AddNewResourceButton = ({ wordResource, setData }: Props) => {

    const handleClick = () => {
        setData(prev => {
            return {
                ...prev,
                [wordResource]: [...prev[wordResource], ""]
            }
        })
    }

    return (
        <button onClick={handleClick} >+</button>
    )
}

export default AddNewResourceButton