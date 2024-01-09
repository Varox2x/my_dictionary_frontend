import IconContainer from "../../../../../global/hoc/IconContainer";
import { IoIosAddCircle } from "react-icons/io";

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    isVisible: boolean
}

const AddNewResourceButton = ({ onClick, isVisible }: Props) => {


    return (
        <button style={{ background: 'transparent', border: 'none', marginTop: '10px' }} onClick={(e) => onClick(e)} >
            <IconContainer color={isVisible ? "black" : "white"} icon={IoIosAddCircle} />
        </button>
    )
}

export default AddNewResourceButton

