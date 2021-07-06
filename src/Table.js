import TableAPI from "./TableAPI.js";

const Table = ({ characterData }) => {
  console.log(characterData);

  return (
    <table className="table table-hover table-dark table-sm .table-bordered opacity-4 mt-2">
      <thead>
        <tr>
          <th className="col">Name</th>
          <th className="col">
            Birth
            <br />
            Date
          </th>
          <th className="col">Height</th>
          <th className="col">Mass</th>
          <th className="col">
            Home <br />
            World
          </th>
          <th className="col">Species</th>
        </tr>
      </thead>
      {/* <TableAPI characterData={characterData} key={characterData} /> */}
      <tbody>
        {characterData.map((character) => (
          <tr>
            <td key={character.name}>{character.name.toLowerCase()}</td>
            <td key={character.birth_year}>{character.birth_year}</td>
            <td key={character.height}>{character.height}</td>
            <td key={character.mass}>{character.mass}</td>
            <td key={character.homeworld}>{character.homeworld}</td>
            <td key={character.species}>{character.species}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
