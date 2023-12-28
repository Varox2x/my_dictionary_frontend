import IconContainer from "../../../../../global/hoc/IconContainer"
import { MdDelete } from "react-icons/md";

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    disabled: boolean,
    color?: string
};

const DeleteButton = ({ disabled, onClick, color }: Props) => {
    return (
        <button style={{ background: 'transparent', border: 'none' }} disabled={disabled} onClick={onClick} >
            <IconContainer color={color || 'white'} icon={MdDelete} />
        </button>
    )
}

export default DeleteButton