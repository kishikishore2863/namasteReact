import { DATA } from "./config";
import { IMG_CDN_URL } from "./config";
import { useState } from "react";

const ResturauntCard = ({ restaurant }) => {
  const [searchInput, setSearchInput] = useState("KFC");

  return (
    <>
      <div>
        <input
          type="text"
          className="seacrch-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button>Search</button>
      </div>
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
  return (
    <>
      <div className="Body">
        {resturantList.map((restaurant) => (
          <ResturauntCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
