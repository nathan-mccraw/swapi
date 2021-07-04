const TableAPI = ({ characterData }) => {
  return (
    <tbody>
      {characterData.map((characters) => (
        <tr>
          <td>{characters.name}</td>
          <td>{characters.birth_year}</td>
          <td>{characters.height}</td>
          <td>{characters.mass}</td>
          <td>{characters.homeworld}</td>
          <td>{characters.species}</td>
        </tr>
      ))}
    </tbody>
  );
};
export default TableAPI;
