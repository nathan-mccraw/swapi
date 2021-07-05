import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import Header from "./Header";
import Buttons from "./Buttons";

const App = () => {
  const [handleQuery, setHandleQuery] = useState("");
  const [isAboutModalOpen, setisAboutModalOpen] = useState(false);
  const [characterData, setCharacterData] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  useEffect(() => {
    fetchCharacterData("https://swapi.dev/api/people/");
  }, []);

  const fetchCharacterData = (queryURL) => {
    try {
      axios.get(`${queryURL}`).then(async ({ data }) => {
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
        setNextPage(data.next);
        setPreviousPage(data.previous);
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

  const fetchSpecies = async (resultsArray) => {
    const speciesPromiseArray = resultsArray.map(({ species }) =>
      axios.get(species)
    );
    const speciesDataArray = await Promise.all(speciesPromiseArray);
    const speciesNameArray = speciesDataArray.map(({ data }) => data.name);
    return speciesNameArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCharacterData(`https://swapi.dev/api/people/?search=${handleQuery}`);
  };

  const handleNext = () => fetchCharacterData(`${nextPage}`);
  const handlePrevious = () => fetchCharacterData(`${previousPage}`);
  const showAboutModal = () => setisAboutModalOpen(true);
  const hideAboutModal = () => setisAboutModalOpen(false);

  console.log(characterData);

  return (
    <div className="container">
      <Header
        isAboutModalOpen={isAboutModalOpen}
        showAboutModal={showAboutModal}
        hideAboutModal={hideAboutModal}
      />
      <Form
        handleQuery={handleQuery}
        setHandleQuery={setHandleQuery}
        handleSubmit={handleSubmit}
      />
      <Buttons
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        nextPage={nextPage}
        previousPage={previousPage}
      />
      <Table characterData={characterData} />
    </div>
  );
};
export default App;
