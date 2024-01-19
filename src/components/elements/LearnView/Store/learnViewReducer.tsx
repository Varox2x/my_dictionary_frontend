import { WordType } from "../../../../global/types";
import { CardSideType, DIRECTION_ENUM, DirectionType, ENUM_CARD_SIDE, ENUM_STAGES_NAMES, StagesNamesType } from "../types";
import { ACTION_TYPES } from "./actionTypes";

export type ActionType = {
    type: typeof ACTION_TYPES.REVERT_CARD,
} | {
    type: typeof ACTION_TYPES.SHUFFLE
} | {
    type: typeof ACTION_TYPES.ROLL_CARD,
    payload: DirectionType
} | {
    type: typeof ACTION_TYPES.CHANGE_FRONT_STAGE,
    payload: StagesNamesType
} | {
    type: typeof ACTION_TYPES.CHANGE_BACK_STAGE,
    payload: StagesNamesType
} | {
    type: typeof ACTION_TYPES.SET_WORDS,
    payload: WordType[]
}

export type ReducerActionType = keyof typeof ACTION_TYPES



export type StateType = {
    cardSide: CardSideType,
    wordsArray: WordType[],
    enterDirection: DirectionType,
    currentIndex: number,
    previousCardSide: CardSideType,
    currentFrontStage: StagesNamesType,
    currentBackStage: StagesNamesType,
}

export const INITIAL_STATE: StateType = {
    cardSide: ENUM_CARD_SIDE.FRONT,
    previousCardSide: ENUM_CARD_SIDE.FRONT,
    wordsArray: [
    ],
    currentIndex: 0,
    currentFrontStage: ENUM_STAGES_NAMES.STAGE_DISABLE,
    currentBackStage: ENUM_STAGES_NAMES.STAGE_DISABLE,
    enterDirection: DIRECTION_ENUM.LEFT,
}

const rollCard = (direction: DirectionType, state: StateType) => {
    if (state.wordsArray.length == 1) return state
    state = { ...state, cardSide: ENUM_CARD_SIDE.FRONT, previousCardSide: state.cardSide, currentFrontStage: ENUM_STAGES_NAMES.STAGE_DISABLE, currentBackStage: ENUM_STAGES_NAMES.STAGE_DISABLE }
    switch (direction) {
        case DIRECTION_ENUM.RIGHT:
            return { ...state, currentIndex: state.currentIndex + 1 > state.wordsArray.length - 1 ? 0 : state.currentIndex + 1, enterDirection: DIRECTION_ENUM.LEFT }
        case DIRECTION_ENUM.LEFT:
            return { ...state, currentIndex: state.currentIndex - 1 < 0 ? state.wordsArray.length - 1 : state.currentIndex - 1, enterDirection: DIRECTION_ENUM.RIGHT }
        default:
            return state
    }
}

const shuffleCards = (state: StateType) => {
    const randomSort = () => Math.random() - 0.5;

    const shuffledArray = [...state.wordsArray];

    shuffledArray.sort(randomSort);

    state = { ...state, wordsArray: shuffledArray }
    return state;
}

export const learnViewReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case ACTION_TYPES.REVERT_CARD:
            state = { ...state, cardSide: state.cardSide === ENUM_CARD_SIDE.BACK ? ENUM_CARD_SIDE.FRONT : ENUM_CARD_SIDE.BACK }
            return state;
        case ACTION_TYPES.SHUFFLE:
            return shuffleCards(state)
        case ACTION_TYPES.ROLL_CARD:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.ROLL_CARD} action`)
            }
            return rollCard(action.payload, state)
        case ACTION_TYPES.CHANGE_FRONT_STAGE:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.CHANGE_FRONT_STAGE} action`)
            }
            if (!Object.values(ENUM_STAGES_NAMES).includes(action.payload)) {
                throw new Error(`action.payload wrong in ${ACTION_TYPES.CHANGE_FRONT_STAGE} action`)
            }
            return { ...state, currentFrontStage: action.payload }
        case ACTION_TYPES.CHANGE_BACK_STAGE:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.CHANGE_BACK_STAGE} action`)
            }
            if (!Object.values(ENUM_STAGES_NAMES).includes(action.payload)) {
                throw new Error(`action.payload wrong in ${ACTION_TYPES.CHANGE_BACK_STAGE} action`)
            }
            return { ...state, currentBackStage: action.payload }
        case ACTION_TYPES.SET_WORDS:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.SET_WORDS} action`)
            }
            return { ...state, wordsArray: action.payload, currentIndex: 0 }
        default:
            return state;
    }
};