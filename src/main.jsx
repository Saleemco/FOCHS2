import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";  // This must point to the right file
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);