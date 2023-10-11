import React, { useState } from "react";

React
const SearchParams = ()=>{

    const [location , setlocation] = useState("");

    return (
        <di className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input 
                            onChange={e=>setlocation(e.target.value)}
                    id="location" value={location}  placeholder="location" ></input>
                </label>
                <button> Submet</button>
            </form>
        </di>

      ) ;
};


export default SearchParams ;