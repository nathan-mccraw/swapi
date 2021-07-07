import { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import Header from "./Header";
import Buttons from "./Buttons";

const App = () => {
  const swapiURL = "https://swapi.dev/api/people/";
  const [handleQuery, setHandleQuery] = useState("");
  const [isAboutModalOpen, setisAboutModalOpen] = useState(false);
  const [characterData, setCharacterData] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  useEffect(() => {
    fetchCharacterData(swapiURL);
  }, []);

  const fetchCharacterData = (queryURL) => {
    try {
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
    const species = await axios.get(character.species);
    if (!species.data.name) return "human";
    else return species.data.name;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCharacterData(`https://swapi.dev/api/people/?search=${handleQuery}`);
  };

  const handleNext = () => fetchCharacterData(`${nextPage}`);
  const handlePrevious = () => fetchCharacterData(`${previousPage}`);
  const showAboutModal = () => setisAboutModalOpen(true);
  const hideAboutModal = () => setisAboutModalOpen(false);

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
