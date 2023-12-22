import List from '../List';
import { useDispatchEditView, useEditView } from '../Store/EditViewProvider';
import { ACTION_TYPES } from '../Store/actionTypes';
import { WordResoureType } from '../types';

type Props = {
    wordResource: WordResoureType,
    wordId: number,
    editComponent: React.FunctionComponent<{ value: string, setValue: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void, handleDelete: () => void, isCurrentlyEditing: boolean }>,
}

const ResourceField = ({ wordResource, wordId, editComponent }: Props) => {
    const state = useEditView()

    const dispatch = useDispatchEditView();

    const resourceData = state.words.find(el => el.id === wordId);

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
                }, isCurrentlyEditing: state.currentlyEditingWord == wordId
            }
        })
    }

    const createResource = async () => {
        await dispatch({
            type: ACTION_TYPES.CREATE_WORD_RESOURCE, payload: {
                id: wordId,
                wordResourceType: wordResource,
            }
        })
    }

    const handleButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        createResource()
    }

    if (resourceData) {
        const resourceArray = resourceData[wordResource] as string[];
        const items = converter(resourceArray);

        return (
            <>
                <List<{ value: string, setValue: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void, handleDelete: () => void, isCurrentlyEditing: boolean }> itemComponent={editComponent} items={items} />
                <button style={{ marginTop: "10px" }} onClick={(e) => handleButton(e)} >+</button>
            </>
        )
    }
    return null
}

export default ResourceField