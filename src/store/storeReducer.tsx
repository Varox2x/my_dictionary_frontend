
import { MODE_ENUM, ModeType } from "../global/types";
import { ACTION_TYPES } from "./actionTypes";

export type ActionType = {
    type: ReducerActionType,
    payload?: ModeType
}

export type ReducerActionType = keyof typeof ACTION_TYPES

export type StateType = {
    currentMode: ModeType
}

export const INITIAL_STATE: StateType = {
    currentMode: MODE_ENUM.LEARN
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
            return { ...state, currentMode: action.payload }
        default:
            return state;
    }
};