import IconContainer from "../../../../../../global/hoc/IconContainer"
import * as S from "./elements"

type Props = {
    icon: React.FunctionComponent,
    color: string,
    onClick: () => void
};

const PermissionButton = ({ icon, color, onClick }: Props) => {
    return (
        <S.Button onClick={onClick}>
            <IconContainer color={color} icon={icon} />
        </S.Button>
    )
}

export default PermissionButton