import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import { config } from "./overmind";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
const overmind = createOvermind(config);

root.render(
  <Provider value={overmind}>
    <App />
  </Provider>
);
