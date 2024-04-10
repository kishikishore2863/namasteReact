import { DATA } from "./config";
import { IMG_CDN_URL } from "./config";
import { useEffect, useState } from "react";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

console.log("1");

const ResturauntCard = ({ restaurant }) => {
  return (
    <>
      <div className="card">
        <img src={IMG_CDN_URL + restaurant.info.cloudinaryImageId} />
        <h2>{restaurant.info.name}</h2>
        <h3>{restaurant.info.cuisines.join(", ")}</h3>
        <h4>{restaurant.info.areaName}</h4>
      </div>
    </>
  );
};

const resturantList = DATA;

const Body = () => {
  console.log("B");
  const [searchTxt, setSearchTxt] = useState();
  const [restaurant, setRestaurant] = useState(resturantList);

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
      <div className="Body">
        {restaurant.map((restaurant) => (
          <ResturauntCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
