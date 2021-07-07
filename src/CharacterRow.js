import uuid from "react-uuid";

const CharacterRow = ({ characterData }) => {
  if (characterData.length > 0)
    return (
      <tbody>
        {characterData.map((character) => (
          <tr key={uuid()}>
            <td key={character.name}>{character.name.toLowerCase()}</td>
            <td key={uuid()}>{character.birth_year}</td>
            <td key={uuid()}>{character.height}</td>
            <td key={uuid()}>{character.mass}</td>
            <td key={uuid()}>{character.homeworld}</td>
            <td key={uuid()}>{character.species}</td>
          </tr>
        ))}
      </tbody>
    );
  else {
    return (
      <tbody>
        <tr key={uuid()}>
          <td colSpan="6" align="center">
            No returns, did this search yield
          </td>
        </tr>
      </tbody>
    );
  }
};
export default CharacterRow;
