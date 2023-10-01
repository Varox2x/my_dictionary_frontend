import { MODE_ENUM } from "../../global/types"
import { useStore } from "../../store/StoreProvider"
import EditView from "../views/EditView"
import LearnView from "../views/LearnView"

const SetPage = () => {

    const state = useStore()

    return (
        <>
            {state.currentMode === MODE_ENUM.LEARN && <LearnView />}
            {state.currentMode === MODE_ENUM.EDIT && <EditView />}
        </>
    )
}

export default SetPage