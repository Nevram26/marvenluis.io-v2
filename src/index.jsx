import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Only "/" is prerendered; dev mode leaves just a comment in #root (not an element).
if (location.pathname === "/" && root.firstElementChild) hydrateRoot(root, app);
else {
  root.textContent = "";
  createRoot(root).render(app);
}
