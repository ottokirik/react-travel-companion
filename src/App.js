import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData, getWeatherData, PLACES_URL, WEATHER_URL } from 'api';
import { Header, List, Map } from 'components';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export const App = () => {
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);
  const [places, setPlaces] = useState();

  const { data } = useSWR(bounds ? [PLACES_URL, bounds, type] : null, getPlacesData, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const { data: weatherData } = useSWR(
    coordinates.lat && coordinates.lng ? [WEATHER_URL, coordinates.lat, coordinates.lng] : null,
    getWeatherData,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
      setCoordinates({ lat, lng });
    });
  }, []);

  useEffect(() => {
    if (!data) return;

    const filteredPlaces = data.filter((d) => d.name && d.rating > rating);

    setPlaces(filteredPlaces);
  }, [rating, data]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={places}
            childClicked={childClicked}
            isLoading={!data}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
            weatherData={weatherData}
          />
        </Grid>
      </Grid>
    </>
  );
};
