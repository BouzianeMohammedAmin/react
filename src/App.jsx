import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import React from "react";
import Detailst from "./Details";

const App = () => {
  return (
    <BrowserRouter>
          <h1>Adopte Me</h1>
          <Routes>
            <Route path="/" element={<SearchParams />}/>
            <Route path="/details/:id" element={<Detailst/>} />

          </Routes>

    </BrowserRouter>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
