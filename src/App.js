import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import Header from "./Header";

const App = () => {
  const fetchCharacters = async (query) => {
    try {
      const res = await axios.get(
        `https://swapi.dev/api/people/?search=${query}`
      );
      setCharacterData(res.data.results);
      fetchWorld(res.data.results);
      // fetchSpecies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const [characterWorldsArray, setCharacterWorldsArray] = useState([]);
  const fetchWorld = async (dataArray) => {
    try {
      let worldsArray = dataArray.map((character) => {
        return axios.get(character.world);
      });
      setCharacterWorldsArray(worldsArray);
      console.log(worldsArray);
    } catch (error) {
      console.log(error);
    }
  };

  const [handleQuery, setHandleQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCharacters(handleQuery);
    setHandleQuery("");
  };
  const [characterData, setCharacterData] = useState([]);

  return (
    <div className="container">
      <Header />
      <Form
        handleQuery={handleQuery}
        setHandleQuery={setHandleQuery}
        handleSubmit={handleSubmit}
      />
      <Table
        characterData={characterData}
        characterWorlds={characterWorldsArray}
      />
    </div>
  );
};
export default App;
