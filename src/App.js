import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import Header from "./Header";
import PageButtons from "./PageButtons";

const App = () => {
  const swapiURL = "https://swapi.dev/api/people/";
  const [handleQuery, setHandleQuery] = useState("");
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [characterData, setCharacterData] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  useEffect(() => {
    fetchCharacterData(swapiURL);
  }, []);

  const fetchCharacterData = (queryURL) => {
    try {
      setIsLoading(true);
      axios.get(`${queryURL}`).then(async ({ data }) => {
        const resultsArray = data.results;

        const result = Promise.all(
          resultsArray.map(async (character) => {
            character.homeworld = await fetchWorld(character);
            character.species = await fetchSpecies(character);
            return character;
          })
        );

        const characters = await result;

        setCharacterData(characters);
        setIsLoading(false);
        setNextPage(data.next);
        setPreviousPage(data.previous);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWorld = async (character) => {
    const homeworld = await axios.get(character.homeworld);
    return homeworld.data.name;
  };

  const fetchSpecies = async (character) => {
    if (!character.species.length) return "human";
    const species = await axios.get(character.species);
    return species.data.name;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCharacterData(`https://swapi.dev/api/people/?search=${handleQuery}`);
  };

  const handleNext = () => fetchCharacterData(`${nextPage}`);
  const handlePrevious = () => fetchCharacterData(`${previousPage}`);
  const showInstructionsModal = () => setIsInstructionsModalOpen(true);
  const hideInstructionsModal = () => setIsInstructionsModalOpen(false);

  return (
    <div className="container">
      <Header
        isInstructionsModalOpen={isInstructionsModalOpen}
        showInstructionsModal={showInstructionsModal}
        hideInstructionsModal={hideInstructionsModal}
      />
      <Form
        handleQuery={handleQuery}
        setHandleQuery={setHandleQuery}
        handleSubmit={handleSubmit}
      />
      <PageButtons
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        nextPage={nextPage}
        previousPage={previousPage}
      />
      <Table characterData={characterData} isLoading={isLoading} />
    </div>
  );
};
export default App;
