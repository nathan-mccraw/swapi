const TableAPI = ({ characterData }) => {
  if (characterData.length > 0)
    return (
      <tbody>
        {characterData.map((characters) => (
          <tr>
            <td>{characters.name.toLowerCase()}</td>
            <td>{characters.birth_year}</td>
            <td>{characters.height}</td>
            <td>{characters.mass}</td>
            <td>{characters.homeworldName}</td>
            <td>{characters.speciesName}</td>
          </tr>
        ))}
      </tbody>
    );
  else {
    return (
      <tbody>
        <tr>
          <td colspan="6" align="center">
            No returns, did this search yield
          </td>
        </tr>
      </tbody>
    );
  }
};
export default TableAPI;
