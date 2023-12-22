import { CurrentlyEditingWordType, UpdateWordType, WordType } from "../../../../global/types";
import { CreateWordResourceType, DeleteWordResourceType, ENUM_WORD_RESOURCE, UpdateWordResourceType } from "../types";
import { ACTION_TYPES } from "./actionTypes";

export type ActionType = {
    type: ReducerActionType,
    payload?: UpdateWordType | WordType[] | UpdateWordResourceType | CurrentlyEditingWordType
}

export type ReducerActionType = keyof typeof ACTION_TYPES

export type StateType = {
    words: WordType[],
    currentlyEditingWord: CurrentlyEditingWordType
}

export const INITIAL_STATE: StateType = {
    words: [],
    currentlyEditingWord: false
}

const updateWord = (state: StateType, updateData: UpdateWordType): WordType[] => {
    return state.words.map(word => {
        if (word.id === updateData.id) {
            return { ...word, ...updateData };
        }
        return word;
    })
}

const updateWordResource = ({ state, wordResourceType, id, index, newValue }: UpdateWordResourceType & {
    state: StateType;
}): WordType[] => {
    return state.words.map(word => {
        if (word.id === id) {
            const resourceArrayCopy = [...word[wordResourceType]]
            resourceArrayCopy[index] = newValue
            return { ...word, [wordResourceType]: resourceArrayCopy };
        }
        return word;
    })
}

const createWordResource = ({ state, wordResourceType, id, }: CreateWordResourceType & {
    state: StateType;
}): WordType[] => {
    return state.words.map(word => {
        if (!word[wordResourceType]) return { ...word, [wordResourceType]: [""] }
        if (word.id === id) {
            //special handle for adding example sentence
            if (wordResourceType == ENUM_WORD_RESOURCE.EXAMPLE_SENTENCE) {
                const resourceArrayCopy = [...word[wordResourceType]]
                resourceArrayCopy.push("")
                return { ...word, [wordResourceType]: resourceArrayCopy };
            }
            if (word[wordResourceType].includes("")) {
                return word
            }
            const resourceArrayCopy = [...word[wordResourceType]]
            resourceArrayCopy.push("")
            return { ...word, [wordResourceType]: resourceArrayCopy };
        }
        return word;
    })
}

const deleteWordResource = ({ state, wordResourceType, id, index }: DeleteWordResourceType & {
    state: StateType;
}): WordType[] => {
    return state.words.map(word => {
        if (word.id === id) {
            const resourceArrayCopy = [...word[wordResourceType]]
            resourceArrayCopy.splice(index, 1)
            return { ...word, [wordResourceType]: resourceArrayCopy };
        }
        return word;
    })
}


export const editViewReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_WORD:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.UPDATE_WORD} action`)
            }
            return { ...state, words: updateWord(state, action.payload as UpdateWordType) };
        case ACTION_TYPES.SET_WORDS:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.UPDATE_WORD} action`)
            }
            return { ...state, words: action.payload as WordType[] };
        case ACTION_TYPES.UPDATE_WORD_RESOURCE:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.UPDATE_WORD_RESOURCE} action`)
            }
            return { ...state, words: updateWordResource({ ...action.payload as UpdateWordResourceType, state }) };
        case ACTION_TYPES.CREATE_WORD_RESOURCE:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.CREATE_WORD_RESOURCE} action`)
            }
            return { ...state, words: createWordResource({ ...action.payload as CreateWordResourceType, state }) };
        case ACTION_TYPES.DELETE_WORD_RESOURCE:
            if (!action.payload) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.DELETE_WORD_RESOURCE} action`)
            }
            return { ...state, words: deleteWordResource({ ...action.payload as DeleteWordResourceType, state }) };
        case ACTION_TYPES.SET_CURRENTLY_EDITING_WORD:
            if (!action.payload && action.payload !== false) {
                throw new Error(`action.payload missing in ${ACTION_TYPES.SET_CURRENTLY_EDITING_WORD} action`)
            }
            return { ...state, currentlyEditingWord: action.payload as CurrentlyEditingWordType };
        default:
            return state;
    }
};