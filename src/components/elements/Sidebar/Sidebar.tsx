import { Sidebar as ProTypesSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import * as S from "./elements"
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import routerList from '../../../routerList';
import { MODE_ENUM, ROLE_ENUM, Set } from '../../../global/types';
import { useDispatchStore } from '../../../store/StoreProvider';
import { ACTION_TYPES } from '../../../store/actionTypes';
import { useGetInfinite } from '../../../api/hooks/useGet';
import { getCurrentUserSets } from '../../../api/setApi';
import { QueryData } from '../../../global/types';
import { useEffect, useState } from 'react';
import SetsList from './SetsList';
import useHasPermission from '../../../global/hooks/useHasPermission';

const flatQueryDataToArray = (queryData: QueryData): Set[] => {
    let setArray: Set[] = []
    queryData.pages.forEach((responseData) => {
        if (!responseData.data || !Array.isArray(responseData.data)) return
        responseData.data.forEach(set => {
            if (!setArray.some(item => item.id === set.id)) setArray = [...setArray, set]
        });
    })
    return setArray
}



const Sidebar = () => {

    const dispatch = useDispatchStore()
    const [modeDisabled, setModeDisabled] = useState<boolean>(true)
    const { id: setId } = useParams();
    const { editable } = useHasPermission(Number(setId))

    useEffect(() => {
        if (setId) setModeDisabled(false)
        if (!setId) setModeDisabled(true)
    }, [setId])

    return (
        <ProTypesSidebar
            style={{ position: "fixed", top: 0, bottom: 0, zIndex: 2222 }}>
            <S.MenuTitleWrapper>
                <S.MenuTitle>
                    Mode
                </S.MenuTitle>
            </S.MenuTitleWrapper>
            <Menu>
                <MenuItem disabled={modeDisabled} onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.LEARN })} > Learn</MenuItem>
                <MenuItem disabled={modeDisabled || !editable} onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.EDIT })} > Edit</MenuItem>
            </Menu>
            <S.MenuTitleWrapper>
                <S.MenuTitle>
                    Sets
                </S.MenuTitle>
            </S.MenuTitleWrapper>
            <Menu>
                <MenuItem component={<Link to={`/${routerList.CreateNewSetPage.url}`} />}> Create new set</MenuItem>
                <SetsList labelName='Your Sets' role={ROLE_ENUM.OWNER} />
                <SetsList labelName='Editable Sets' role={ROLE_ENUM.EDITABLE} />
                <SetsList labelName='Sets Only To Learn' role={ROLE_ENUM.READ_ONLY} />
                <S.MenuTitleWrapper>
                    <S.MenuTitle>
                        User
                    </S.MenuTitle>
                </S.MenuTitleWrapper>
                <MenuItem component={<Link to={`/${routerList.SettingsPage.url}`} />}> Settings </MenuItem>
                <MenuItem component={<Link to={`/${routerList.HomeUserPage.url}`} />}> Home </MenuItem>
            </Menu>
        </ProTypesSidebar >
    )
}

export default Sidebar