import { Sidebar as ProTypesSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import * as S from "./elements"
import { Link } from 'react-router-dom';
import routerList from '../../../routerList';
import { MODE_ENUM, Set } from '../../../global/types';
import { useDispatchStore } from '../../../store/StoreProvider';
import { ACTION_TYPES } from '../../../store/actionTypes';
import { useGet, useGetInfinite } from '../../../api/hooks/useGet';
import { getCurrentUserSets } from '../../../api/setApi';
import { useEffect, useState } from 'react';




const Sidebar = () => {

    const dispatch = useDispatchStore()
    const [page, setPage] = useState<number>(1)
    const { data, isLoading, isError, error, isFetching, isPreviousData, hasNextPage, fetchNextPage } = useGetInfinite<Set[]>(getCurrentUserSets);


    useEffect(() => {
        console.log("data")
        console.log(data)

        console.log("isLoading")
        console.log(isLoading)

        console.log("isError")
        console.log(isError)

        console.log("error")
        console.log(error)

        console.log("isFetching")
        console.log(isFetching)

        console.log("hasNextPage")
        console.log(hasNextPage)
    }, [page])

    return (
        <ProTypesSidebar
            style={{ position: "fixed", top: 0, bottom: 0, zIndex: 2222 }}>
            <S.MenuTitleWrapper>
                <S.MenuTitle>
                    Mode
                </S.MenuTitle>
            </S.MenuTitleWrapper>
            <Menu>
                <MenuItem onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.LEARN })} component={<Link to={`/${routerList.SetPage.url}`} />}> Learn</MenuItem>
                <MenuItem onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.EDIT })} component={<Link to={`/${routerList.SetPage.url}`} />}> Edit</MenuItem>
            </Menu>
            <S.MenuTitleWrapper>
                <S.MenuTitle>
                    Sets
                </S.MenuTitle>
            </S.MenuTitleWrapper>
            <Menu>
                <SubMenu label="My sets">
                    {!isLoading && data?.pages.map((page) =>
                        page.data.map((set: Set, index: number) => (
                            <MenuItem key={index}>{set.name}</MenuItem>
                        ))
                    )}
                    {hasNextPage && <MenuItem onClick={async () => await fetchNextPage()} key={"more"}>more...</MenuItem>}
                </SubMenu>
                <SubMenu label="Watching sets">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <S.MenuTitleWrapper>
                    <S.MenuTitle>
                        User
                    </S.MenuTitle>
                </S.MenuTitleWrapper>
                <MenuItem component={<Link to={`/${routerList.SettingsPage.url}`} />}> Settings </MenuItem>
                <MenuItem component={<Link to={`/${routerList.HomeUserPage.url}`} />}> Home </MenuItem>
            </Menu>
        </ProTypesSidebar>
    )
}

export default Sidebar