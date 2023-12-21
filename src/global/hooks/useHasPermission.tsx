import { QueryData, ROLE_ENUM, RoleType, SetType } from "../types"
import setsQueryDataToArray from "../helpers/setsQueryDataToArray"
import { useGetInfinite } from "../../api/hooks/queries/useGetInfinite";
import { getCurrentUserSets } from "../../api/setApi";

const useHasPermission = (setId: number) => {

    let removable: boolean, editable: boolean;

    const { data: ownSets } = useGetInfinite<SetType[]>(getCurrentUserSets, ROLE_ENUM.OWNER);
    const { data: editableSets } = useGetInfinite<SetType[]>(getCurrentUserSets, ROLE_ENUM.EDITABLE);
    const { data: readOnlybleSets } = useGetInfinite<SetType[]>(getCurrentUserSets, ROLE_ENUM.READ_ONLY);

    let role: RoleType = ROLE_ENUM.READ_ONLY

    if (setsQueryDataToArray(ownSets as QueryData).find(el => el.id == setId)) {
        role = ROLE_ENUM.OWNER
    } else
        if (setsQueryDataToArray(editableSets as QueryData).find(el => el.id == setId)) {
            role = ROLE_ENUM.EDITABLE
        } else
            if (setsQueryDataToArray(readOnlybleSets as QueryData).find(el => el.id == setId)) {
                role = ROLE_ENUM.READ_ONLY
            }

    switch (role) {
        case ROLE_ENUM.OWNER:
            removable = true
            editable = true
            break
        case ROLE_ENUM.READ_ONLY:
            removable = false
            editable = false
            break
        case ROLE_ENUM.EDITABLE:
            removable = false
            editable = true
            break
    }

    return { removable, editable }

}

export default useHasPermission