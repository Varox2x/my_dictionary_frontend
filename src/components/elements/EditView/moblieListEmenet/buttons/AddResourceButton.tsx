import { IoIosAddCircle } from "react-icons/io";
import IconContainer from "../../../../../global/hoc/IconContainer";

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    disabled?: boolean,
    isVisible: boolean
};

const AddResourceButton = ({ onClick, isVisible }: Props) => {
    return (
        <button style={{ background: 'transparent', border: 'none', marginTop: '10px' }} disabled={!isVisible} onClick={onClick} >
            {isVisible && <IconContainer icon={IoIosAddCircle} />}
        </button>
    )
}

export default AddResourceButton