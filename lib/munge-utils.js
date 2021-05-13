export function formatLocation(data) {

  const item =  data[0];

  return {
    formatted_query: item.display_name,
    latitude: item.lat,
    longitude: item.lon
  };
  
}

export function formatWeather(data) {

  return data.map(place => {
    return {
      forecast: place.weather.description,
      time: place.datetime
    };
  });
}

//   const item = data[0];

//   return {
//     forecast: item.display_forecast,
//     time: item.time
//   };
