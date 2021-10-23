import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  },

  mapContainer: {
    height: '85vh',
    width: '100%',
  },

  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    transition: `all .3s`,
    zIndex: 1,
    '&:hover': { zIndex: 20, transform: `scale(1.2) translate(-50%, -50%)` },
  },

  pointer: {
    cursor: 'pointer',
  },
}));
