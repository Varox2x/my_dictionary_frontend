import { MenuItem, SubMenu } from "react-pro-sidebar"
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
        <SubMenu label={labelName}>
            {!isLoading && data && setsQueryDataToArray(data).map((set) => {
                return < MenuItem onClick={() => navigate(`set/${set.id}`)} key={set.id}  > {set.name}</MenuItem>
            }
            )}
            {hasNextPage && data && setsQueryDataToArray(data).length > 0 && <MenuItem onMouseEnter={async () => await fetchNextPage()} key={"more"}>more...</MenuItem>}
        </SubMenu>
    )
}

export default SetsList