import {Provider} from 'react-redux'
import store from './store/store.js'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx';
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);