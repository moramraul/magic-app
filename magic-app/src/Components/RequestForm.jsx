import Select from "react-select";
import { useDispatch } from "react-redux";
import { colectFormData } from "../store/store";
import { useState } from "react";

const optionFormat = [
  { value: "Standard", label: "Standard" },
  { value: "Pioneer", label: "Pioneer" },
  { value: "Modern", label: "Modern" },
];
const optionColors = [
  { value: "G", label: "Green" },
  { value: "R", label: "Red" },
  { value: "U", label: "Blue" },
  { value: "W", label: "White" },
  { value: "B", label: "Black" },
];
export default function RequestForm() {
  const [colors, setColors] = useState([]);
  const [format, setFormat] = useState("");

  const dispatch = useDispatch();
  function handleFormInput(event) {
    event.preventDefault();
    const payload = {
      colors,
      format,
    };
    console.log(payload);
    dispatch(colectFormData(payload));
  }
  function handleColorsChange(colors) {
    let colorsNew = [];
    for (let i = 0; i < colors.length; i++) {
      colorsNew.push(colors[i].value);
    }
    setColors(colorsNew);
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
        <button onClick={(e) => handleFormInput(e)}>Send</button>
      </form>
    </div>
  );
}
