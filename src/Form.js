const Form = ({ handleQuery, setHandleQuery, handleSubmit }) => {
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <h1>{handleQuery}</h1>
        <input
          type="text"
          onChange={(e) => setHandleQuery(e.target.value)}
          value={handleQuery}
        />
        <button>Search</button>
      </form>
    </div>
  );
};
export default Form;
