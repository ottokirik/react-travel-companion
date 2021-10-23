import axios from 'axios';

export const PLACES_URL = `https://travel-advisor.p.rapidapi.com/[TYPE]/list-in-boundary`;
export const WEATHER_URL = `https://community-open-weather-map.p.rapidapi.com/weather`;

export const getPlacesData = async (URL, { sw, ne }, type) => {
  const options = {
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
    },
  };

  try {
    const {
      data: { data },
    } = await axios.get(URL.replace('[TYPE]', type), options);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getWeatherData = async (URL, lat, lng) => {
  const options = {
    params: {
      lat,
      lon: lng,
    },
    headers: {
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
    },
  };

  try {
    const { data } = await axios.get(URL, options);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
