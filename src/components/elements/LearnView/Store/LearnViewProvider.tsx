import { createContext, useReducer, useContext } from "react";
import { ActionType, INITIAL_STATE, StateType, learnViewReducer } from "./learnViewReducer";

const LearnViewContext = createContext<StateType>(INITIAL_STATE);
const LearnViewDispatchContext = createContext<React.Dispatch<ActionType>>(() => {
    throw new Error("useDispatchLearnView must be used within a LearnViewProvider");
});

type Props = {
    children: JSX.Element;
};

export const LearnViewProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(learnViewReducer, INITIAL_STATE);

    return (
        <LearnViewDispatchContext.Provider value={dispatch}>
            <LearnViewContext.Provider value={state}>
                {children}
            </LearnViewContext.Provider>
        </LearnViewDispatchContext.Provider>
    )
}
export const useLearnView = () => {
    const context = useContext(LearnViewContext);
    if (context === null) {
        throw new Error("useLearnView must be used within a LearnViewProvider");
    }
    return context;
};

export const useDispatchLearnView = () => {
    const context = useContext(LearnViewDispatchContext);
    if (context === null) {
        throw new Error("useDispatchLearnView must be used within a LearnViewProvider");
    }
    return context;
};