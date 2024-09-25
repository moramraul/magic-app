import { useSelector } from "react-redux"
export default function ImportList() {
    const deckSelector = useSelector((state) => state.deck.rawDeck)
    return (
        <div className="import-view">
            <div className="instructions">
            <h1>Exporta el mazo a Magic Arena</h1>
            <p>Puedes copiar el listado e importarlo a Magic Arena</p>
            </div>
            <div className="import-list">
                <ul>
                    {deckSelector.map((el)=> <li key={el.id}>{el.name}</li>)}
                </ul>
            </div>
        </div>
    )
}