import { useEffect } from "react";

const TableAPI = ({ characterData }) => {
  if (characterData.length > 0)
    return (
      <tbody>
        {characterData.map((character) => (
          <tr>
            <td key={character.name}>{character.name.toLowerCase()}</td>
            <td key={characterData.birth_year}>{character.birth_year}</td>
            <td key={characterData.height}>{character.height}</td>
            <td key={characterData.mass}>{character.mass}</td>
            <td key={characterData.homeworld}>{character.homeworld}</td>
            <td key={characterData.species}>{character.species}</td>
          </tr>
        ))}
      </tbody>
    );
  else {
    return (
      <tbody>
        <tr>
          <td colSpan="6" align="center">
            No returns, did this search yield
          </td>
        </tr>
      </tbody>
    );
  }
};
export default TableAPI;
