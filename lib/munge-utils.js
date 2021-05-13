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

export function formatReviews(data) {
  return data.map(rest => {
    return {
      name: rest.name,
      image_url: rest.image_url,
      price: rest.price,
      rating: rest.rating,
      url: rest.url
    };
  });
}
