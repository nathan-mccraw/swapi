const TableAPI = ({ characterData }) => {
  return (
    <tbody>
      {characterData.map((characters) => (
        <tr>
          {Object.values(characters).map((data) => (
            <td>{data}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
export default TableAPI;
