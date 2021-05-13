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
  return data.map(business => {
    return {
      name: business.name,
      image_url: business.image_url,
      price: business.price,
      rating: business.rating,
      url: business.url
    };
  });
}
