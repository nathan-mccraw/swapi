import TableAPI from "./TableAPI.js";

const Table = ({ characterData }) => {
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
      <TableAPI characterData={characterData} />
    </table>
  );
};

export default Table;
