import { useState } from "react"

export default function SearchBar({onClickSearchButton, onClickCloseButton, isShowingResults}) {

    const [inputText, setInputText] = useState("")

    const handlerClickSearchButton = () => {
        onClickSearchButton(inputText)
    }

    const handlerClickCloseButton = () => {
        setInputText("")
        onClickCloseButton()
    }

    return (
        <div>
            <label>
                <input 
                    value={inputText} 
                    onChange={(e) => setInputText(e.target.value)}
                />
                <button onClick={handlerClickSearchButton}>Buscar</button>
                { isShowingResults && <button onClick={handlerClickCloseButton}>Cerrar</button> }
            </label>
        </div>
    )
}