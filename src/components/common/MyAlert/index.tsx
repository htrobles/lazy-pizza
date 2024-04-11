import React, { useState, useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { MyAlertProps } from '../../../types';

const MyAlert: React.FC<MyAlertProps> = ({ open, alertType, message }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={alertType}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default MyAlert;
