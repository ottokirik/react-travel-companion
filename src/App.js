import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData, URL } from 'api';
import { Header, List, Map } from 'components';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export const App = () => {
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  const { data, error } = useSWR(bounds ? [URL, bounds] : null, getPlacesData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
      setCoordinates({ lat, lng });
    });
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List places={data} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map setCoordinates={setCoordinates} setBounds={setBounds} coordinates={coordinates} />
        </Grid>
      </Grid>
    </>
  );
};
