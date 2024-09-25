const baseURL = __API_PATH__;
import Select from "react-select";
import { useDispatch } from "react-redux";
import { colectFormData } from "../store/store";
import { setRawDeck } from "../store/store";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const optionFormat = [
  { value: "standard", label: "Standard" },
  { value: "pioneer", label: "Pioneer" },
  { value: "modern", label: "Modern" },
];
const optionColors = [
  { value: "G", label: "Green" },
  { value: "R", label: "Red" },
  { value: "U", label: "Blue" },
  { value: "W", label: "White" },
  { value: "B", label: "Black" },
];
const deckTypes = [
  {value: "Midrange", label: "Midrange"},
  {value: "Aggro", label: "Aggro"},
  {value: "Control", label: "Control"}
]
export default function RequestForm() {
  const navigate = useNavigate();
  const [colors, setColors] = useState([]);
  const [format, setFormat] = useState("");
  const [typeDeck, setTypeDeck ] = useState("");

  const dispatch = useDispatch();
  async function handleFormInput(event) {
    event.preventDefault();
    const payload = {
      colors,
      format,
      typeDeck
    };
    dispatch(colectFormData(payload));
    await fetchHomeCards();
    //
  }
  function handleColorsChange(colors) {
    let colorsNew = [];
    for (let i = 0; i < colors.length; i++) {
      colorsNew.push(colors[i].value);
    }
    setColors(colorsNew);
  }
  async function fetchHomeCards() {
    try {
      // Send a GET request to the server
      const response = await axios.post(baseURL + "/magic", {
        colors,
        format
      });
      const payload = response.data;
      dispatch(setRawDeck(payload))

    } catch (error) {
      // Handle errors
      console.error(error);
    } finally {
      navigate("/export")
    }
  }

  return (
    <div className="form-container">
      <form>
        <label>Select Format:</label>
        <Select
          onChange={(format) => setFormat(format.value)}
          options={optionFormat}
        />
        <label>Select Colors:</label>
        <Select
          onChange={(colors) => handleColorsChange(colors)}
          isMulti
          options={optionColors}
        />
        <label>Select type:</label>
        <Select
          onChange={(type) => setTypeDeck(type.value)}
          options={deckTypes}
        />
        <button onClick={(e) => handleFormInput(e)}>Send</button>
      </form>
    </div>
  );
}
