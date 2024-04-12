import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./config";
import { filterData } from "../utils/helper";
import Shimmer from "./Shimmer";
const RestraurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9993221&lng=77.5285469&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);
    // const filterData =
    //   json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    //     (c) =>
    //       c.card.card?.["@type"] ==
    //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //   );
    const tempfilter = json.data;
    setRestaurant(tempfilter);
  }
  if (!restaurant) {
    return <Shimmer />;
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
