const Form = ({ handleQuery, setHandleQuery, handleSubmit }) => {
  return (
    <div className="container col-4">
      <form onSubmit={handleSubmit}>
        <div className="input-group justify-content-center">
          <input
            className="form-control"
            type="text"
            placeholder="Search Character by Name"
            onChange={(e) => setHandleQuery(e.target.value)}
            value={handleQuery}
          />
          <button className="btn btn-outline-light" id="button-addon2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
