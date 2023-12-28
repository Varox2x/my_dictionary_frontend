import { useRef } from 'react';
import List from '../List';
import { useDispatchEditView, useEditView } from '../Store/EditViewProvider';
import { ACTION_TYPES } from '../Store/actionTypes';
import { WordResoureType } from '../types';
import AddResourceButton from './buttons/AddResourceButton';
import { EditComponentType } from './types';

type Props = {
    wordResource: WordResoureType,
    wordId: number,
    editComponent: React.FunctionComponent<EditComponentType>,
}

const ResourceField = ({ wordResource, wordId, editComponent }: Props) => {
    const state = useEditView()

    const dispatch = useDispatchEditView();

    const resourceData = state.words.find(el => el.id === wordId);
    const resourceRef = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([]);

    const converter = (data: string[]) => {
        return data.map((el, index) => {
            return {
                value: el, handleDelete: () => {
                    dispatch({
                        type: ACTION_TYPES.DELETE_WORD_RESOURCE, payload: {
                            id: wordId,
                            wordResourceType: wordResource,
                            index,
                        }
                    })
                }, setValue: async (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
                    await dispatch({
                        type: ACTION_TYPES.UPDATE_WORD_RESOURCE, payload: {
                            id: wordId,
                            wordResourceType: wordResource,
                            index,
                            newValue: e.target.value
                        }
                    })
                }, isCurrentlyEditing: state.currentlyEditingWord == wordId,
                resourceRef,
                index: index
            }
        })
    }

    const handleAddResourceButton = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        await dispatch({
            type: ACTION_TYPES.CREATE_WORD_RESOURCE, payload: {
                id: wordId,
                wordResourceType: wordResource,
            }
        })
        const lastResource = resourceRef.current[resourceRef.current.length - 1];
        lastResource.focus();
    }

    const isAddNewResourceAvaible = (): boolean => {
        // return !data[wordResource].includes("")
        if (resourceData && resourceData[wordResource].includes("")) return false
        return true
    }

    if (resourceData) {
        const resourceArray = resourceData[wordResource] as string[];
        const items = converter(resourceArray);

        return (
            <>
                <List<EditComponentType> itemComponent={editComponent} items={items} />
                <AddResourceButton isVisible={isAddNewResourceAvaible()} onClick={(e) => handleAddResourceButton(e)} />
            </>
        )
    }
    return null
}

export default ResourceField