const Form = ({ handleQuery, setHandleQuery, handleSubmit }) => {
  return (
    <div className="col-4">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            onChange={(e) => setHandleQuery(e.target.value)}
            value={handleQuery}
          />
          <button className="btn btn-outline-secondary" id="button-addon2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
