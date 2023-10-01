import { createContext, useReducer, useContext, useMemo } from "react";
import { ActionType, INITIAL_STATE, StateType, storeReducer } from "./storeReducer";

const StoreContext = createContext<StateType>(INITIAL_STATE);
const StoreDispatchContext = createContext<React.Dispatch<ActionType>>(() => {
    throw new Error("useDispatchStore must be used within a StoreProvider");
});

type Props = {
    children: JSX.Element;
};

export const StoreProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(storeReducer, INITIAL_STATE);
    const store = useMemo(() => ({ state, dispatch }), [state])

    return (
        <StoreDispatchContext.Provider value={store.dispatch}>
            <StoreContext.Provider value={store.state}>
                {children}
            </StoreContext.Provider>
        </StoreDispatchContext.Provider>
    )
}
export const useStore = () => {
    const context = useContext(StoreContext);
    if (context === null) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
};

export const useDispatchStore = () => {
    const context = useContext(StoreDispatchContext);
    if (context === null) {
        throw new Error("useDispatchStore must be used within a StoreProvider");
    }
    return context;
};