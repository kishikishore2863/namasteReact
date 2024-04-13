import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
const RestraurantMenu = () => {
  const { resId } = useParams();
  const [categories, setCategories] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  async function fetchData() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4065&lng=78.4772&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);
    const categories =
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

    setCategories(categories);
    setRestaurantInfo(json.data?.cards[2].card.card.info);
    console.log(json.data?.cards[2].card.card.info);
    console.log(categories);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="w-[800px]  p-2">
        <h1 className="text-2xl font-bold">{restaurantInfo.name}</h1>
        <div className="h-[196px] w-[768px] shadow-2xl p-2 rounded-lg">
          <h2 className="text-xl font-semibold">
            ✪{restaurantInfo.avgRating}
            <span className="m-2">({restaurantInfo.totalRatingsString})</span>
            {"•"}
            <span className="m-2">{restaurantInfo.costForTwoMessage}</span>
          </h2>
          <h3 className="text-red-400 ">
            {restaurantInfo.cuisines.join(",")}{" "}
          </h3>
          <h3 className="">
            Outlet{" "}
            <span className="text-gray-500">{restaurantInfo.areaName}</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default RestraurantMenu;
