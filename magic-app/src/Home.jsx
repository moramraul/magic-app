const baseURL = __API_PATH__;
import { useState, useEffect } from "react";
import MagicCard from "./Components/MagicCard";
import axios from "axios";

export default function Home() {
  const [cards, setCards] = useState([]);

  async function fetchHomeCards() {
    try {
      // Send a GET request to the server
      const response = await axios.get(baseURL + "/magic");
      console.log(response.data); 
      setCards(response.data)
    } catch (error) {
      // Handle errors
      console.error(error);
    } 
  }
  useEffect(() => {
    fetchHomeCards()}, []
  );
  return (
    <>
    <h2>Consigue un mazo aleatorio para exportar a Magic Arena y Magic Online</h2>
      {cards ? cards.map((el) => <MagicCard key={el.id} card={el} />) : ""}
    </>
  );
}
