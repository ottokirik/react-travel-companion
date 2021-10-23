import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
  },

  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  },

  spacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
