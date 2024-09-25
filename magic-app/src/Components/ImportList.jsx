import { useSelector } from "react-redux"
export default function ImportList() {
const deckSelector = useSelector((state) => state.deck.formatedDeck);
const formSelector = useSelector((state) => state.form.requestData.colors);
const copyDeck = []
deckSelector.map((el)=> {
    const countName = "1 " + el.name
    copyDeck.push(countName)
})

if (formSelector.includes('G')) copyDeck.push("12 Forest")
if (formSelector.includes('U')) copyDeck.push("12 Island")
if (formSelector.includes('R')) copyDeck.push("12 Mountain")
if (formSelector.includes('W')) copyDeck.push("12 Plains")
if (formSelector.includes('B')) copyDeck.push("12 Swamp")
const stringedDeck = copyDeck.join( "\n" )
   async function copy() {
        let text = document.getElementById('myDeck').innerHTML;
          try {
            await navigator.clipboard.writeText(text);
            console.log('Content copied to clipboard');
          } catch (err) {
            console.error('Failed to copy: ', err);
          }
    }
    return (
        <div className="import-view">
            <div className="instructions">
            <h1>Exporta el mazo a Magic Arena</h1>
            <p>Puedes copiar el listado e importarlo a Magic Arena</p>
            </div>
            <div className="import-list">
                <span id="myDeck">{stringedDeck}</span>
            </div>
            <div className="clipboard">
                <button onClick={copy}>Copy Deck!</button>
            </div>
        </div>
    )
}