import { MenuItem, SubMenu, Menu } from "react-pro-sidebar"
import { RoleType, SetType } from "../../../global/types"
import { getCurrentUserSets } from "../../../api/setApi"
import { useNavigate } from "react-router-dom"
import setsQueryDataToArray from "../../../global/helpers/setsQueryDataToArray"
import { useGetInfinite } from "../../../api/hooks/queries/useGetInfinite"



type Props = {
    role: RoleType,
    labelName: string
}

const SetsList = ({
    role,
    labelName
}: Props) => {
    const navigate = useNavigate();
    const { data, isLoading, hasNextPage, fetchNextPage } = useGetInfinite<SetType[]>(getCurrentUserSets, role);


    return (
        <SubMenu style={{ color: 'rgb(139, 161, 183)', backgroundColor: 'rgb(11, 41, 72)' }} label={labelName}>
            <Menu menuItemStyles={{
                button: ({ level, disabled }) => {
                    if (level === 0 || level === 1)
                        return {
                            color: disabled ? '#f5d9ff' : '#d359ff',
                            background: 'rgb(11, 41, 72)',
                            "&:hover": { backgroundColor: '#1a4169' }
                        };
                },
            }}>
                {!isLoading && data && setsQueryDataToArray(data).map((set) => {
                    return < MenuItem icon={<div />} style={{ color: 'rgb(139, 161, 183)' }} onClick={() => navigate(`set/${set.id}`)} key={set.id}  > {set.name}</MenuItem>
                }
                )}
                {hasNextPage && data && setsQueryDataToArray(data).length > 0 && <MenuItem onMouseEnter={async () => await fetchNextPage()} key={"more"}>more...</MenuItem>}
            </Menu>
        </SubMenu>
    )
}

export default SetsList