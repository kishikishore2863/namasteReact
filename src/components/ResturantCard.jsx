import { useContext } from "react";
import { IMG_CDN_URL } from "./config";
import UserContext from "../utils/UserContext";
const ResturauntCard = ({ restaurant }) => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <div className="card w-56   h-96 shadow-xl p-2 m-2 bg-gray-100 align-middle hover:bg-gray-200 rounded-2xl">
        <div className="w-52 h-56 ">
          <img
            className="w-full h-full object-cover aspect-auto rounded-2xl"
            src={IMG_CDN_URL + restaurant.info.cloudinaryImageId}
          />
        </div>
        <h2>{restaurant.info.name}</h2>
        <h3 className="text-xs">{restaurant.info.cuisines.join(", ")}</h3>
        <h4>{restaurant.info.areaName}</h4>
        {/* <h4>{loggedInUser}</h4> */}
      </div>
    </>
  );
};

export const withPromotedLabel = (Restaurantcard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black rounded-lg">
          promoted
        </label>
        <Restaurantcard {...props} />
      </div>
    );
  };
};

export default ResturauntCard;
