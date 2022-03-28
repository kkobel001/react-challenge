import React from 'react';
import { Button } from 'ui/atoms/Button';
import {
  CardHeader,
  CardActions,
  CardContent,
  Card,
  Modal as MuiModal,
  Typography,
} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
};

const Modal = ({
  description,
  title,
  children,
  showModal,
  onClose,
  onSubmit,
  canSubmit = true,
}) => {
  return (
    <MuiModal
      open={showModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      onClose={onClose}
    >
      <Card sx={style}>
        <CardHeader
          title={<Typography variant={'h4'}>{title}</Typography>}
          subheader={description}
        />
        <CardContent sx={{ mt: 2, mb: 2 }}>{children}</CardContent>
        <CardActions
          sx={{ marginTop: 4, display: 'flex', justifyContent: 'end' }}
        >
          <Button
            variant={'contained'}
            disabled={!canSubmit}
            onClick={onSubmit}
          >
            Zapisz
          </Button>
          <Button onClose={onClose} sa={{ marginRight: '8px' }}>
            Anuluj
          </Button>
        </CardActions>
      </Card>
    </MuiModal>
  );
};

export default Modal;
