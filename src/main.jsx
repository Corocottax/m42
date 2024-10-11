import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RouteProvider from "./providers/RouteProvider.jsx";

createRoot(document.getElementById("root")).render(
  <RouteProvider>
    <App />
  </RouteProvider>
);
