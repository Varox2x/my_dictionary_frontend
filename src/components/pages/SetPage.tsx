import { MODE_ENUM } from "../../global/types"
import { useStore } from "../../store/StoreProvider"
import { EditViewProvider } from "../elements/EditView/Store/EditViewProvider"
import { LearnViewProvider } from "../elements/LearnView/Store/LearnViewProvider"
import EditView from "../views/EditView"
import LearnView from "../views/LearnView"

const SetPage = () => {

    const state = useStore()

    return (
        <>
            {state.currentMode === MODE_ENUM.LEARN && <LearnViewProvider><LearnView /></LearnViewProvider>}
            {state.currentMode === MODE_ENUM.EDIT && <EditViewProvider><EditView /></EditViewProvider>}
        </>
    )
}

export default SetPage