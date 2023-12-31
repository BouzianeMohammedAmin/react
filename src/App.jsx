import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";
import Detailst from "./Details";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to ="/"> Adopte Me </Link>
      </header>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/details/:id" element={<Detailst />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
