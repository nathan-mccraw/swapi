const CharacterRow = ({ characterData }) => {
  if (characterData.length > 0)
    return (
      <tbody>
        {characterData.map((character) => (
          <tr key={character.name}>
            <td>{character.name.toLowerCase()}</td>
            <td>{character.birth_year}</td>
            <td>{character.height}</td>
            <td>{character.mass}</td>
            <td>{character.homeworld}</td>
            <td>{character.species}</td>
          </tr>
        ))}
      </tbody>
    );
  else {
    return (
      <tbody>
        <tr key={Date.now()}>
          <td colSpan="6" align="center">
            No returns, did this search yield
          </td>
        </tr>
      </tbody>
    );
  }
};
export default CharacterRow;
