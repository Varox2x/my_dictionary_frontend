import { Sidebar as ProTypesSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import * as S from "./elements"
import { Link, useParams } from 'react-router-dom';
import routerList from '../../../routerList';
import { MODE_ENUM, ROLE_ENUM } from '../../../global/types';
import { useDispatchStore } from '../../../store/StoreProvider';
import { ACTION_TYPES } from '../../../store/actionTypes';
import { useEffect, useState } from 'react';
import SetsList from './SetsList';
import useHasPermission from '../../../global/hooks/useHasPermission';
import { FaBook } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";

type SedebarMenuItemProps = {
    disabled: boolean,
    title: string,
    onClick?: () => void,
    icon?: React.ReactNode,
    component?: string | React.ReactElement;
}

const SedebarMenuItem = ({ disabled, title, onClick, icon, component }: SedebarMenuItemProps) => {
    return (
        <MenuItem icon={icon} style={{ color: disabled ? '#506a85' : 'rgb(139, 161, 183)' }} disabled={disabled} onClick={onClick} component={component} >
            {title}
        </MenuItem>
    )
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
            backgroundColor={'rgb(11, 41, 72)'}
            style={{ position: "fixed", top: 0, bottom: 0, zIndex: 2222 }}>
            <S.MenuTitleWrapper>
                <S.MenuTitle>
                    Mode
                </S.MenuTitle>
            </S.MenuTitleWrapper>
            <Menu menuItemStyles={{
                button: ({ level, disabled }) => {
                    if (level === 0)
                        return {
                            color: disabled ? '#f5d9ff' : '#d359ff',
                            "&:hover": { backgroundColor: '#1a4169' }
                        };
                },
            }}>
                <SedebarMenuItem title='Learn' icon={<FaBook />} disabled={modeDisabled} onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.LEARN })} />
                <SedebarMenuItem title='Edit' icon={<MdModeEditOutline />} disabled={modeDisabled || !editable} onClick={() => dispatch({ type: ACTION_TYPES.CHANGE_MODE, payload: MODE_ENUM.EDIT })} />
            </Menu>
            <S.MenuTitleWrapper>
                <S.MenuTitle>
                    Sets
                </S.MenuTitle>
            </S.MenuTitleWrapper>
            <Menu menuItemStyles={{
                button: ({ level, disabled }) => {
                    if (level === 0 || level === 1)
                        return {
                            color: disabled ? '#f5d9ff' : '#d359ff',
                            "&:hover": { backgroundColor: '#1a4169' }
                        };
                },
            }}>
                <SedebarMenuItem title='Create new set' icon={<FaPlusCircle />} component={<Link to={`/${routerList.CreateNewSetPage.url}`} />} disabled={false} />
                <SetsList labelName='Your Sets' role={ROLE_ENUM.OWNER} />
                <SetsList labelName='Editable Sets' role={ROLE_ENUM.EDITABLE} />
                <SetsList labelName='Sets Only To Learn' role={ROLE_ENUM.READ_ONLY} />
                <S.MenuTitleWrapper>
                    <S.MenuTitle>
                        User
                    </S.MenuTitle>
                </S.MenuTitleWrapper>
                <SedebarMenuItem title='Settings' icon={<IoIosSettings />} component={<Link to={`/${routerList.SettingsPage.url}`} />} disabled={true} />
                <SedebarMenuItem title='Home' icon={<FaHome />} component={<Link to={`/${routerList.HomeUserPage.url}`} />} disabled={true} />
            </Menu>
        </ProTypesSidebar >
    )
}

export default Sidebar