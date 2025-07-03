import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./satoshi.css";
import "./index.css";
import Router from "./Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
