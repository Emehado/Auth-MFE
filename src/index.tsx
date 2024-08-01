import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.css";

const htmlEl = document.querySelector("html");
htmlEl?.setAttribute("class", 'h-full <div className="h-screen">');
const rootEl = document.getElementById("root");
rootEl?.setAttribute("class", "h-full ");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
