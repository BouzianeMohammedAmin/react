import React from "react";
import Pet from "./Pet";

const Reasaults = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found </h1>
      ) : (
        pets.map((pet) => (
          <Pet
            //  {...pet}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city} , ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Reasaults;
