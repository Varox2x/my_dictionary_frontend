import { WordType } from "../../../../global/types";
import { CardSideType, DIRECTION_ENUM, DirectionType, ENUM_CARD_SIDE, ENUM_STAGES_NAMES, StagesNamesType } from "../types";
import { ACTION_TYPES } from "./actionTypes";

export type ActionType = {
    type: ReducerActionType,
    payload?: DirectionType | number | StagesNamesType | WordType[]
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
        {
            names: ["Kot", "Kotek"],
            definitions: ["Cat"],
            id: 1,
            exampleSentence: ["a"]
        },
    ],
    currentIndex: 0,
    currentFrontStage: ENUM_STAGES_NAMES.STAGE_DISABLE,
    currentBackStage: ENUM_STAGES_NAMES.STAGE_DISABLE,
    enterDirection: DIRECTION_ENUM.LEFT,
}

const rollCard = (direction: DirectionType, state: StateType) => {
    state = { ...state, cardSide: ENUM_CARD_SIDE.FRONT, previousCardSide: state.cardSide, currentFrontStage: ENUM_STAGES_NAMES.DEFAULT, currentBackStage: ENUM_STAGES_NAMES.DEFAULT }
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
            return rollCard(action.payload as DirectionType, state)
        case ACTION_TYPES.CHANGE_FRONT_STAGE:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.CHANGE_FRONT_STAGE} action`)
            }
            if (!Object.values(ENUM_STAGES_NAMES).includes(action.payload as StagesNamesType)) {
                throw new Error(`action.payload wrong in ${ACTION_TYPES.CHANGE_FRONT_STAGE} action`)
            }
            return { ...state, currentFrontStage: action.payload as StagesNamesType }
        case ACTION_TYPES.CHANGE_BACK_STAGE:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.CHANGE_BACK_STAGE} action`)
            }
            if (!Object.values(ENUM_STAGES_NAMES).includes(action.payload as StagesNamesType)) {
                throw new Error(`action.payload wrong in ${ACTION_TYPES.CHANGE_BACK_STAGE} action`)
            }
            return { ...state, currentBackStage: action.payload as StagesNamesType }
        case ACTION_TYPES.SET_WORDS:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.SET_WORDS} action`)
            }
            return { ...state, wordsArray: action.payload as WordType[] }
        default:
            return state;
    }
};