import TableAPI from "./TableAPI.js";

const Table = ({ characterData }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Birth Date</td>
          <td>Height</td>
          <td>Mass</td>
          <td>Home World</td>
          <td>Species</td>
        </tr>
      </thead>
      <TableAPI characterData={characterData} />
    </table>
  );
};

export default Table;
