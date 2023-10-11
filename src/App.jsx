import { createRoot } from "react-dom/client";
import React from "react";
import SearchParams from "./SearchParams";

const App = () => {
       return (
              <div>
                     <SearchParams/>
              </div>
       );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App/>) ;