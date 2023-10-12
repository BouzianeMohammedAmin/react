import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requesBreedList();
    }

    async function requesBreedList() {
      setBreedList([]);
      setStatus("Loading");

      const req = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await req.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("Loaded");
    }
    console.log(breedList) ;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , [animal]);
  return [breedList , status] ;
}
