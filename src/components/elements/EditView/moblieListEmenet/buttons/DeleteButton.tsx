import IconContainer from "../../../../../global/hoc/IconContainer"
import { MdDelete } from "react-icons/md";

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    disabled: boolean
};

const DeleteButton = ({ disabled, onClick }: Props) => {
    return (
        <button style={{ background: 'transparent', border: 'none' }} disabled={disabled} onClick={onClick} >
            <IconContainer icon={MdDelete} />
        </button>
    )
}

export default DeleteButton