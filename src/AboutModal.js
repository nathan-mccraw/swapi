import * as Icon from "bootstrap-icons-react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Author from "./aboutModalComponents/Author";

const AboutModal = ({ isAboutModalOpen, showAboutModal, hideAboutModal }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-light border-0"
        onClick={showAboutModal}
      >
        <Icon.InfoSquare />
      </button>
      <Modal
        show={isAboutModalOpen}
        onHide={hideAboutModal}
        dialogClassName={"aboutModal"}
      >
        <Modal.Header>About SWAPI App</Modal.Header>
        <Modal.Body>
          {/* <Author /> */}
          <p>explain the search feature and character modals</p>
          <p>SWAPI credit w link</p>
          <p>photo credits</p>
          <p>font credit w link</p>
          <p>languages used w icons across bottom</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default AboutModal;
