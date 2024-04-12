import { useEffect, useState } from "react";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import ResturauntCard, { withPromotedLabel } from "./ResturantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("B");
  const [searchTxt, setSearchTxt] = useState();
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    apiFetch();
  }, []);

  async function apiFetch() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9634&lng=77.5855&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const online = useOnline();
  if (!online) {
    return <h1> offline</h1>;
  }
  if (restaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div>
        <input
          type="text"
          className="seacrch-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchTxt, restaurant);
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Body flex flex-wrap   ">
        {restaurant.map((restaurant) => (
          <Link to={"/restaurant" + restaurant.id}>
            <ResturauntCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;

{
  /* <Link
// key={restaurant.data.id}
// to={"/resturants/" + restaurant.data.id}
>
  {restaurant.data.promoted ? (
    <withPromotedLabel resData={restaurant} />
  ) : (
    <ResturauntCard resData={restaurant} />
  )}
  <ResturauntCard key={restaurant.info.id} restaurant={restaurant} />
</Link> */
}
