import axios from 'axios';

export const URL = `https://travel-advisor.p.rapidapi.com/[TYPE]/list-in-boundary`;

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
  }
};
