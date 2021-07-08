import Modal from "react-bootstrap/Modal";
import AppInstructions from "./InstructionsContent";

const InstructionsModal = ({
  isInstructionsModalOpen,
  showInstructionsModal,
  hideInstructionsModal,
}) => {
  return (
    <div className="d-flex align-items-end">
      <button
        type="button"
        className="btn btn-sm btn-outline-light"
        onClick={showInstructionsModal}
      >
        INSTRUCTIONS
      </button>
      <Modal
        show={isInstructionsModalOpen}
        onHide={hideInstructionsModal}
        dialogClassName={"instructionsModal"}
      >
        <Modal.Header>
          <h3>How To Use SWAPI App</h3>
        </Modal.Header>
        <Modal.Body>
          <AppInstructions />
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default InstructionsModal;
