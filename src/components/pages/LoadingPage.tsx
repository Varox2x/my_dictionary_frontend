import LoadingSpinner from "../../global/loadingSpinner/LoadingSpinner"
import * as GlobalStyles from '../elements/global/elements'

const LoadingPage = () => {
    return (
        <GlobalStyles.FullPageWrapper>
            <LoadingSpinner isWhite={false} isLoading={true} />
        </GlobalStyles.FullPageWrapper>
    )
}

export default LoadingPage