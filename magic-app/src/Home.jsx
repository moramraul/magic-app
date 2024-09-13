const baseURL = __API_PATH__;
import { useState } from "react";
import Header from "./Components/Header";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import MagicCard from "./Components/MagicCard";
import axios from "axios";

export default function Home() {
  const [card, setCard] = useState("");
  const requestData = useSelector((state) => state.form.requestData);

//   async function fetchAPI() {
//     try {
//       // Send a GET request to the server
//       const response = await axios.post(baseURL + "/magicReq", requestData);
//       console.log(response.data);
//       //const rjson = await response.json()
//       //console.log(rjson.data)
//       //setCard(rjson.data[0].image_uris.normal)
//       //const resp = await fetch('https://api.scryfall.com/cards/search?order=cmc&q=c%3Ared+pow%3D3')
//       // Parse the JSON response
//       // const data = await response.json();
//       // console.log(data);
//       // setCard(data);
//       // console.log(card)
//     } catch (error) {
//       // Handle errors
//       console.error(error);
//     } finally {
//       // Reset loading state
//       //setIsLoading(false);
//     }
//   }
  // useEffect(() => {
  //   fetchAPI(), [requestData];
  // });
  return (
    <>
    <h2>Consigue un mazo aleatorio para exportar a Magic Arena y Magic Online</h2>
      {card ? <MagicCard img={card} /> : ""}
    </>
  );
}
