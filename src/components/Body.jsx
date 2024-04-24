import { useEffect, useState } from "react";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import ResturauntCard, { withPromotedLabel } from "./ResturantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState();
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    apiFetch();
  }, []);

  async function apiFetch() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9978608&lng=77.5275458&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const online = useOnline();
  if (!online) {
    return <h1> offline</h1>;
  }
  console.log(restaurant);
  if (restaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="w-full h">
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
            const log = setRestaurant(data);
            console.log(log);
          }}
        >
          Search
        </button>
      </div>
      <div className="Body flex flex-wrap   ">
        {restaurant.map((restaurant, key) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <ResturauntCard restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
