import { useState } from "react";
import axios from "axios";
import Form from "./Form";
import Table from "./Table";
import Header from "./Header";

const App = () => {
  const [handleQuery, setHandleQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setHandleQuery("");
  };
  const [characterData, setCharacterData] = useState(APIreturnObject.results);

  //         [
  //     {
  //       name: "Test Character 1",
  //       birth: "01/01/01",
  //       height: "100 cm",
  //       mass: "100 kg",
  //       home: "home1URL",
  //       species: "human",
  //     },
  //     {
  //       name: "Test Character 2",
  //       birth: "02/02/02",
  //       height: "200 cm",
  //       mass: "200 kg",
  //       home: "home2URL",
  //       species: "droid",
  //     },
  //     {
  //       name: "Test Character 3",
  //       birth: "03/03/03",
  //       height: "300 cm",
  //       mass: "300 kg",
  //       home: "home3URL",
  //       species: "clone",
  //     },
  //     {
  //       name: "Test Character 4",
  //       birth: "04/04/04",
  //       height: "400 cm",
  //       mass: "400 kg",
  //       home: "home4URL",
  //       species: "beast",
  //     },
  //   ]);

  const QueryAPI = async (query) => {
    try {
      return axios.get(`"https://swapi.dev/api/people/?search="${query}`);
    } catch (error) {
      console.error(error);
    }
  };

  const APIreturnObject = await QueryAPI("");

  return (
    <div>
      <Header />
      <Form
        handleQuery={handleQuery}
        setHandleQuery={setHandleQuery}
        handleSubmit={handleSubmit}
      />
      <Table characterData={characterData} />
    </div>
  );
};
export default App;
