import React, { useState } from "react";

React
const SearchParams = ()=>{

    const [location , setlocation] = useState("");
    const [animal  ,setAnimal] = useState("");
    const ANIMALS = ["animal1" , "animal2" , "animal3" , "animal4"] ;

    return (
        <di className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input 
                            onChange={e=>setlocation(e.target.value)}
                    id="location" value={location}  placeholder="location" ></input>
                </label>

                <label htmlFor="animal">
                <select   value={animal}  onChange={e=>{setAnimal(e.target.value)}}>
                {ANIMALS.map((animal)=> (
                      <option key={animal}>{animal}</option>
                ))} ;

                </select>
                </label>
                <button> Submet</button>
            </form>
        </di>

      ) ;
};


export default SearchParams ;