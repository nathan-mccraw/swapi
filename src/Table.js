import TableAPI from "./TableAPI.js";

const Table = ({ characterData }) => {
  return (
    <table className="table table-dark table-sm .table-bordered opacity-3">
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
      <TableAPI characterData={characterData} />
    </table>
  );
};

export default Table;
