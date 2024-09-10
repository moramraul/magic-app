const baseURL = __API_PATH__;
import { useState } from "react";
import Header from "./Components/Header";
import { useEffect } from "react";
import MagicCard from "./Components/MagicCard";
import RequestForm from "./Components/RequestForm";
function App() {
const [card, setCard] = useState('');

  async function fetchAPI() {
    try {
  
      // Send a GET request to the server
      const response = await fetch(baseURL + '/magic');
      const rjson = await response.json()
      console.log(rjson.data)
      setCard(rjson.data[0].image_uris.normal)
      //const resp = await fetch('https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3')
      // Parse the JSON response
      // const data = await response.json();
      // console.log(data);
      // setCard(data);
      // console.log(card)
    } catch (error) {
      // Handle errors
      console.error(error);
    } finally {
      // Reset loading state
      //setIsLoading(false);
    }
  }
  // useEffect(() => { 
  // fetchAPI()
  //})
  return (
    <>
      <Header />
      {card ? <MagicCard img={card}/> : ''}
      <RequestForm/>
    </>
  )
}

export default App
