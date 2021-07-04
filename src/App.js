import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import Header from "./Header";

const App = () => {
  const [handleQuery, setHandleQuery] = useState("");
  const [characterData, setCharacterData] = useState([]);

  const fetchCharacterData = (query) => {
    try {
      axios
        .get(`https://swapi.dev/api/people/?search=${query}`)
        .then(async ({ data }) => {
          let resultsArray = data.results;
          const worldNameArray = await fetchWorld(resultsArray);
          const speciesNameArray = await fetchSpecies(resultsArray);
          let index = 0;
          resultsArray.forEach((character) => {
            character.homeworldName = worldNameArray[index];
            character.speciesName = speciesNameArray[index];
            index++;
          });
          setCharacterData(resultsArray);
          return data;
        })
        .then((data) => {
          console.log(data.next);
          console.log(data.previous);
          // setNextPage(data.next);
          // setPreviousPage(data.previous);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWorld = async (resultsArray) => {
    const worldsPromiseArray = resultsArray.map(({ homeworld }) =>
      axios.get(homeworld)
    );
    const worldDataArray = await Promise.all(worldsPromiseArray);
    const worldNameArray = worldDataArray.map(({ data }) => data.name);
    return worldNameArray;
  };

  const fetchSpecies = async (dataArray) => {
    const speciesPromiseArray = dataArray.map(({ species }) =>
      axios.get(species)
    );
    const speciesDataArray = await Promise.all(speciesPromiseArray);
    const speciesNameArray = speciesDataArray.map(({ data }) => data.name);
    return speciesNameArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCharacterData(handleQuery);
    setHandleQuery("");
  };

  return (
    <div className="container">
      <Header />
      <Form
        handleQuery={handleQuery}
        setHandleQuery={setHandleQuery}
        handleSubmit={handleSubmit}
      />
      <button>Previous Page</button>
      <Table characterData={characterData} />
      <button>Next Page</button>
    </div>
  );
};
export default App;
