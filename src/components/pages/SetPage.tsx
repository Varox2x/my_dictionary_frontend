import { MODE_ENUM } from "../../global/types"
import { useStore } from "../../store/StoreProvider"
import { EditViewProvider } from "../elements/EditView/Store/EditViewProvider"
import { LearnViewProvider } from "../elements/LearnView/Store/LearnViewProvider"
import EditView from "../views/EditView"
import LearnView from "../views/LearnView"
import { useParams } from "react-router-dom"

const SetPage = () => {

    const state = useStore()
    const { id: setId } = useParams();


    return (
        <>
            {state.currentMode === MODE_ENUM.LEARN && <LearnViewProvider><LearnView key={setId} setId={Number(setId)} /></LearnViewProvider>}
            {state.currentMode === MODE_ENUM.EDIT && <EditViewProvider><EditView key={setId} setId={Number(setId)} /></EditViewProvider>}
        </>
    )
}

export default SetPage