import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DeleteModal(props) {
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleClick = () => {
    setAmount(props.amount);
    props.deleteStudent();
    setLoading(true);
    setTimeout(() => setDeleted(true), 3000);
  };

  const resetModal = () => {
    props.toggleDelete();
    setTimeout(() => setLoading(false), 1000);
    setTimeout(() => setDeleted(false), 1000);
  };

  return (
    <Modal isOpen={props.deleteModal} toggle={props.toggleDelete}>
      <ModalHeader toggle={props.toggleDelete}>Delete</ModalHeader>
      {deleted ? (
        <div>
          <ModalBody>Student {amount} is deleted</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={resetModal}>
              Ok
            </Button>
          </ModalFooter>
        </div>
      ) : (
        <div>
          {loading ? (
            <Spinner className="m-5" color="info">
              Loading...
            </Spinner>
          ) : (
            <div>
              <ModalBody>
                Are you sure that you want to delete {props.amount} students?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={handleClick}>
                  Yes
                </Button>
                <Button color="secondary" onClick={props.toggleDelete}>
                  Cancel
                </Button>
              </ModalFooter>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
}

DeleteModal.propTypes = {
  amount: PropTypes.number,
  toggleDelete: PropTypes.func,
  deleteModal: PropTypes.bool,
  deleteStudent: PropTypes.func,
};

export default DeleteModal;
