import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import { useStyles } from './styles';

export const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={({ center: { lat, lng }, bounds: { ne, sw } }) => {
          setCoordinates({ lat, lng });
          setBounds({ ne, sw });
        }}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
};
