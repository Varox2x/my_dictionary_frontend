import { CardSideType, DIRECTION_ENUM, DirectionType, ENUM_CARD_SIDE } from "../types";
import { ACTION_TYPES } from "./actionTypes";

export type ActionType = {
    type: ReducerActionType,
    payload?: DirectionType | number
}

export type ReducerActionType = keyof typeof ACTION_TYPES

export type WordType = {
    name: string,
    definition: string
}

export type StateType = {
    cardSide: CardSideType,
    wordsArray: WordType[],
    enterDirection: DirectionType,
    currentIndex: number,
    previousCardSide: CardSideType,
    currentFrontStage: number,
    currentBackStage: number,
}

export const INITIAL_STATE: StateType = {
    cardSide: ENUM_CARD_SIDE.FRONT,
    previousCardSide: ENUM_CARD_SIDE.FRONT,
    wordsArray: [
        {
            name: "Kot",
            definition: "Cat"
        },
        {
            name: "Pies",
            definition: "Dog"
        },
        {
            name: "Samochód",
            definition: "Car"
        },
        {
            name: "Telefon",
            definition: "Phone"
        }
    ],
    currentIndex: 1,
    currentFrontStage: 0,
    currentBackStage: 0,
    enterDirection: DIRECTION_ENUM.LEFT,
}

const rollCard = (direction: DirectionType, state: StateType) => {
    state = { ...state, cardSide: ENUM_CARD_SIDE.FRONT, previousCardSide: state.cardSide, currentFrontStage: 0, currentBackStage: 0 }
    switch (direction) {
        case DIRECTION_ENUM.RIGHT:
            return { ...state, currentIndex: state.currentIndex + 1 > state.wordsArray.length - 1 ? 0 : state.currentIndex + 1, enterDirection: DIRECTION_ENUM.LEFT }
        case DIRECTION_ENUM.LEFT:
            return { ...state, currentIndex: state.currentIndex - 1 < 0 ? state.wordsArray.length - 1 : state.currentIndex - 1, enterDirection: DIRECTION_ENUM.RIGHT }
        default:
            return state
    }
}

export const learnViewReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case ACTION_TYPES.REVERT_CARD:
            return { ...state, cardSide: state.cardSide === ENUM_CARD_SIDE.BACK ? ENUM_CARD_SIDE.FRONT : ENUM_CARD_SIDE.BACK };
        case ACTION_TYPES.ROLL_CARD:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.ROLL_CARD} action`)
            }
            if (!(action.payload in DIRECTION_ENUM)) {
                throw new Error(`invalid payload in ${ACTION_TYPES.ROLL_CARD} action`)
            }
            return rollCard(action.payload as DirectionType, state)
        case ACTION_TYPES.CHANGE_FRONT_STAGE:
            if (action.payload == null && action.payload == undefined) {
                throw new Error(`action.payload wrong in ${ACTION_TYPES.ROLL_CARD} action`)
            }
            return { ...state, currentFrontStage: action.payload as number }
        default:
            return state;
    }
};