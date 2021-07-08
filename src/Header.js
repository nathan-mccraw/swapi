import InstructionsModal from "./InstructionsModal";

const Header = ({
  isInstructionsModalOpen,
  showInstructionsModal,
  hideInstructionsModal,
}) => {
  return (
    <header className="container mb-4">
      <div className="row justify-content-center">
        <div className="col-5 border border-top-0 border-2 rounded px-2">
          <h1 className="display-3 border border-top-0 border-2 rounded p-3 text-center pt-1">
            Star Wars <br />
            APi App
          </h1>
        </div>
      </div>
      <div className="fixed-top">
        <div className="d-flex m-2">
          <InstructionsModal
            isInstructionsModalOpen={isInstructionsModalOpen}
            showInstructionsModal={showInstructionsModal}
            hideInstructionsModal={hideInstructionsModal}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
