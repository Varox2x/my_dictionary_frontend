import { useNavigate, useParams } from "react-router-dom";
import { useGetInfinite } from "../../../../../../api/hooks/queries/useGetInfinite";
import { getCurrentUserSets } from "../../../../../../api/setApi";
import { RoleType, SetType } from "../../../../../../global/types";
import * as S from "./elements"
import setsQueryDataToArray from "../../../../../../global/helpers/setsQueryDataToArray";
import { useDispatchStore } from "../../../../../../store/StoreProvider";
import { ACTION_TYPES } from "../../../../../../store/actionTypes";

type Props = {
    role: RoleType,
}

const SetsView = ({ role }: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatchStore()
    const { id: setId } = useParams();

    const { data, isLoading, hasNextPage, fetchNextPage } = useGetInfinite<SetType[]>(getCurrentUserSets, role);



    return (
        <S.Container>
            <S.List>
                {!isLoading && data && setsQueryDataToArray(data).map((set) => {
                    return < S.ListElement $isActive={`${set.id}` == setId} onClick={() => {
                        navigate(`set/${set.id}`)
                        dispatch({ type: ACTION_TYPES.CLOSE_MOBILE_MENU })
                    }} key={set.id}  > {set.name}</S.ListElement>
                }
                )}
                {hasNextPage && data && setsQueryDataToArray(data).length > 0 && <S.ListElement $isActive={false} onMouseEnter={async () => await fetchNextPage()} key={"more"}>more...</S.ListElement>}
            </S.List>
        </S.Container>
    )
}

export default SetsView