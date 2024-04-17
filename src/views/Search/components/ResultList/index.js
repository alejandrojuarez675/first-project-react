import ResultItem from "../ResultItem";

export default function ResultList({data, isShowingResults}) {
    return isShowingResults && (
        (data.length == 0 && <p>No hay resultados disponibles para tu búsqueda</p>)
        || data?.map(user => <ResultItem key={user.email} {...user}/>)
    )
}