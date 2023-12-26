import { IoIosAddCircle } from "react-icons/io";
import IconContainer from "../../../../../global/hoc/IconContainer";

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    disabled?: boolean
};

const AddResourceButton = ({ onClick, disabled }: Props) => {
    return (
        <button style={{ background: 'transparent', border: 'none', marginTop: '10px' }} disabled={disabled} onClick={onClick} >
            <IconContainer icon={IoIosAddCircle} />
        </button>
    )
}

export default AddResourceButton