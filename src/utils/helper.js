export function filterData(searchTxt, restaurant) {
  return restaurant.filter((restaurant) => {
    return restaurant.info.name.includes(searchTxt);
  });
}
