import React from 'react';
import Modal from '../molecules/modal/Modal';
import PropTypes from 'prop-types';


const transitionKeys ={
  income:'wpływ',
  expense:'wydatek',
};

export const AddNewLedgerRecord = ({ showModal, onClose, type }) => {
  const handleClose = () => {
    onClose();
  }
  return (
    <Modal showModal={showModal} onClose={handleClose} title={`Dodaj ${transitionKeys[type.toLowerCase()]}`}/>
  );
};

AddNewLedgerRecord.propTypes={
  showModal: PropTypes.bool.isRequired,
  onClose:PropTypes.func.isRequired,
  type:PropTypes.string,

}
