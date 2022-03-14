import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
import { Button } from 'ui/atoms/Button';
import { CardHeader, CardActions, CardContent } from '@mui/material';

const Modal = ({
  description,
  disabled,
  children,
  showModal,
  handleClose,
  onSubmit,
}) => {
  return (
    <Modal
      open={showModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <CardHeader>{description}</CardHeader>
      <CardContent>{children}</CardContent>
      <CardActions>
        <Button variant={'contained'} disabled={disabled} onSumbit={onSubmit}>
          Zapisz
        </Button>
        <Button variant={'contained'} onClose={handleClose}>
          Anuluj
        </Button>
      </CardActions>
    </Modal>
  );
};

Modal.propTypes = {
  description: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};

export default Modal;
