
import { ENUM_POPUP, MODE_ENUM, ModeType, PopupType } from "../global/types";
import { ACTION_TYPES } from "./actionTypes";

export type ActionType = {
    type: ReducerActionType,
    payload?: ModeType | PopupType
}

export type ReducerActionType = keyof typeof ACTION_TYPES

export type StateType = {
    currentMode: ModeType,
    isMobileMenuOpen: boolean,
    activePopup: PopupType
}

export const INITIAL_STATE: StateType = {
    currentMode: MODE_ENUM.LEARN,
    isMobileMenuOpen: true,
    activePopup: ENUM_POPUP.NONE
}


export const storeReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_MODE:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.CHANGE_MODE} action`)
            }
            if (!Object.values(MODE_ENUM).includes(action.payload as ModeType)) {
                throw new Error(`action.payload wrong in ${ACTION_TYPES.CHANGE_MODE} action`)
            }
            return { ...state, currentMode: action.payload as ModeType }
        case ACTION_TYPES.CLOSE_MOBILE_MENU:
            return { ...state, isMobileMenuOpen: false }
        case ACTION_TYPES.OPEN_MOBILE_MENU:
            return { ...state, isMobileMenuOpen: true }
        case ACTION_TYPES.SET_ACTIVE_POPUP:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.SET_ACTIVE_POPUP} action`)
            }
            return { ...state, activePopup: action.payload as PopupType }
        default:
            return state;
    }
};