
type Props = {
    currentPage: number,
    setCurrentPage: (page: number) => void,
}

const Pagination = ({ currentPage, setCurrentPage }: Props) => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }} >
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>c {currentPage}</p>
            <button onClick={() => setCurrentPage(currentPage + 1)} >+</button>
        </div>
    )
}

export default Pagination