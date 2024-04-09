import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface Props {
    open: boolean;
    errorMsg: string;
    type: string;
}

export const CustomSnackbar: React.FC<Props> = ({ open = true, errorMsg = "error", type ="info" }) => {
    let severity: 'error' | 'warning' | 'info' | 'success' = 'info';

    // Determine severity based on type prop
    switch (type) {
        case 'error':
            severity = 'error';
            break;
        case 'warning':
            severity = 'warning';
            break;
        case 'success':
            severity = 'success';
            break;
        default:
            severity = 'info';
    }

    return (
        <Snackbar open={open} autoHideDuration={6000}>
            <Alert severity={severity} sx={{ width: '100%' }}>
                {errorMsg}
            </Alert>
        </Snackbar>
    );
};
