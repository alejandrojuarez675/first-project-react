import { useState } from "react"
import ResultList from "./components/ResultList"
import SearchBar from "./components/SearchBar"
import usersData from "./mockData/users.json"

export default function Search() {

    const [filteredData, setFilteredData] = useState(usersData)
    const [isShowingResults, setIsShowingResults] = useState(false)

    const onClickSearchButton = (inputText) => {
        const inputTextlowerCase = inputText.toLowerCase()
        const filteringData = usersData
            .filter(user => user.first_name.toLowerCase().includes(inputTextlowerCase) 
                || user.last_name.toLowerCase().includes(inputTextlowerCase))
        setFilteredData(filteringData)
        setIsShowingResults(true)
    }

    const onClickCloseButton = () => {
        setIsShowingResults(false)
    }

    return (
        <div>
            <SearchBar 
                onClickSearchButton={onClickSearchButton} 
                onClickCloseButton={onClickCloseButton} 
                isShowingResults={isShowingResults} 
            />
            <ResultList 
                data={filteredData} 
                isShowingResults={isShowingResults} 
            />
        </div>
    )
}