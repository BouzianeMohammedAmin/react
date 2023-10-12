import React from "react";
import { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPet] = useState([]);
  const breeds = useBreedList(animal)[0];

  useEffect(() => {
    requedtPeet();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requedtPeet() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPet(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requedtPeet();
        }}
      >
        <label htmlFor="location">
          location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="location"
          ></input>
        </label>

        <label htmlFor="animal">
          <select
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
            ;
          </select>
        </label>

        <label htmlFor="Breed">
          <select
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option></option>
            {breeds.map((bd) => (
              <option key={bd}>{bd}</option>
            ))}
            ;
          </select>
        </label>
        <button> Submet</button>
      </form>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default SearchParams;
