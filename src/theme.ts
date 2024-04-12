import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E15C31',
    },
    text: {
      primary: '#fff',
    },
  },
  components: {
    MuiTextField:{
      styleOverrides:{
        root:{
          backgroundColor: 'white',
          fontFamily: 'Montserrat',
          width: '100%',
          borderRadius: '4px',
          // borderBottom: 'none', 
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
          '&:focus': {
            color: 'black',
          },
          '& input': {
            color: 'black',
            fontFamily: 'Montserrat',
          },
          '& .MuiInputLabel-root':{
            paddingLeft: '4px',
          },
          '& .MuiInputAdornment-root': {
            paddingLeft: '4px',
          },
        }
      }
    }
  }
});

export default theme;
