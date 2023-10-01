import { useState } from 'react';
import { Sidebar as ProTypesSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import * as S from "./elements"
import { Link } from 'react-router-dom';
import routerList from '../../../routerList';

export const MODE_ENUM = {
    LEARN: 'LEARN',
    EDIT: 'EDIT',
} as const;

export type ModeType = keyof typeof MODE_ENUM;


const Sidebar = () => {

    const [currentMode, setCurrentMode] = useState<ModeType>(MODE_ENUM.LEARN)

    return (
        <ProTypesSidebar
            style={{ position: "fixed", top: 0, bottom: 0, zIndex: 2222 }}>
            <S.MenuTitleWrapper>
                <S.MenuTitle>
                    Mode
                </S.MenuTitle>
            </S.MenuTitleWrapper>
            <Menu>
                <MenuItem component={<Link to={`/${routerList.SetPage.url}`} />}> Learn</MenuItem>
                <MenuItem component={<Link to={`/${routerList.SetPage.url}`} />}> Edit</MenuItem>
            </Menu>
            <S.MenuTitleWrapper>
                <S.MenuTitle>
                    Sets
                </S.MenuTitle>
            </S.MenuTitleWrapper>
            <Menu>
                <SubMenu label="My sets">
                    <MenuItem> set number one </MenuItem>
                    <MenuItem> set two </MenuItem>
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