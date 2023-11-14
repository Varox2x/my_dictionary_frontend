import { createContext, useReducer, useContext } from "react";
import { ActionType, INITIAL_STATE, StateType, editViewReducer } from "./editViewReducer"

const EditViewContext = createContext<StateType>(INITIAL_STATE);
const EditViewDispatchContext = createContext<React.Dispatch<ActionType>>(() => {
    throw new Error("useDispatchLearnView must be used within a EditViewProvider");
});

type Props = {
    children: JSX.Element;
};

export const EditViewProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(editViewReducer, INITIAL_STATE);

    return (
        <EditViewDispatchContext.Provider value={dispatch}>
            <EditViewContext.Provider value={state}>
                {children}
            </EditViewContext.Provider>
        </EditViewDispatchContext.Provider>
    )
}
export const useEditView = () => {
    const context = useContext(EditViewContext);
    if (context === null) {
        throw new Error("useEditView must be used within a EditViewProvider");
    }
    return context;
};

export const useDispatchEditView = () => {
    const context = useContext(EditViewDispatchContext);
    if (context === null) {
        throw new Error("useDispatchEditView must be used within a EditViewProvider");
    }
    return context;
};