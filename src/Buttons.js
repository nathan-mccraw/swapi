const Buttons = ({ handleNext, handlePrevious }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-light" onClick={handlePrevious}>
            Previous Page
          </button>
          <button className="btn btn-outline-light" onClick={handleNext}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};
export default Buttons;
