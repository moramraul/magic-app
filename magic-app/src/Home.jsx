const baseURL = __API_PATH__;
import { useState, useEffect } from "react";
import axios from "axios";
import HomeMenu from "./Components/HomeMenu";
import HomeAside from "./Components/HomeAside";

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
    <div className="home">
    <HomeMenu />
    <HomeAside />
    </div>
  );
}
