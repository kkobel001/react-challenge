import React from 'react';
import Modal from '../molecules/modal/Modal';
import { PropTypes } from 'prop-types';

export const AddNewBudgetRecord = ({ showModal, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      showModal={showModal}
      onClose={handleClose}
      description="Zdefiniuj budet"
    />
  );
};

AddNewBudgetRecord.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
};
