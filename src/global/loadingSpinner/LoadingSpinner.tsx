type Props = {
    isLoading: boolean
    isWhite: boolean
}

const LoadingSpinner = ({ isLoading, isWhite }: Props) => {

    return (
        <div style={{ maxHeight: '40px', height: '40px', }}>
            {isLoading && <div className={`lds-roller pranker ${isWhite ? "" : "purple"}`}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
        </div>
    )
}

export default LoadingSpinner