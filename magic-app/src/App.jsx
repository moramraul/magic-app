import axios from "axios";
const baseURL = __API_PATH__;
import { useState } from "react";
import Header from "./Components/Header";
import { useEffect } from "react";
function App() {

const [isLoading, setIsLoading] = useState(false);
const [message, setMessage ] = useState("");

  async function fetchAPI() {
    try {
      // Set loading state to true
      //setIsLoading(true);
  
      // Send a GET request to the server
      const response = await fetch(baseURL + '/magic');
  
      // Parse the JSON response
      const data = await response.json();
  
      // Update the message with the response data
      //setMessage(data.message);
      console.log(data)
    } catch (error) {
      // Handle errors
      setMessage("Error fetching data");
      console.error(error);
    } finally {
      // Reset loading state
      //setIsLoading(false);
    }
  }
  useEffect(() => { 
  fetchAPI()
  })
  return (
    <>
      <Header />
      {isLoading ?? <h2>Loading</h2>}
      <h2>{message}</h2>
    </>
  )
}

export default App
