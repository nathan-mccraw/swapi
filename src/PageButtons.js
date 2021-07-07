import * as Icon from "bootstrap-icons-react";

const PageButtons = ({
  handleNext,
  handlePrevious,
  nextPage,
  previousPage,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between">
          {previousPage && (
            <button className="btn btn-outline-light" onClick={handlePrevious}>
              <Icon.CaretLeft />
              Previous Page
            </button>
          )}
          {nextPage && (
            <button className="btn btn-outline-light" onClick={handleNext}>
              Next Page
              <Icon.CaretRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default PageButtons;
