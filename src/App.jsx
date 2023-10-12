import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import React from "react";


const App = () => {
  return (
    <div>
      <h1>Adopte Me</h1>
      <p>First</p>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
