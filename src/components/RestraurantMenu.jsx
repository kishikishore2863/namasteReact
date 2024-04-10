import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./config";
const RestraurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9993221&lng=77.5285469&restaurantId=614178&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json.data.cards[2].card.card.info);
    setRestaurant(json.data.cards[2].card.card.info);
    console.log(json.data.cards);
  }
  return (
    <>
      <div>
        <div>
          <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
          <h1>restaurant id:{resId} </h1>
          <h2>{restaurant.name}</h2>
          <h3>{restaurant.area}</h3>
          <h3>{restaurant.city}</h3>
          <h4>{restaurant.avgRating}Star</h4>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>{}</ul>
        </div>
      </div>
    </>
  );
};

export default RestraurantMenu;
