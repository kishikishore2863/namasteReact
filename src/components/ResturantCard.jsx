import { IMG_CDN_URL } from "./config";
const ResturauntCard = ({ restaurant }) => {
  return (
    <>
      <div className="card w-56   h-96 shadow-lg p-2 m-2 bg-gray-100 align-middle hover:bg">
        <div className="w-55 h-55">
          <img src={IMG_CDN_URL + restaurant.info.cloudinaryImageId} />
        </div>
        <h2>{restaurant.info.name}</h2>
        <h3>{restaurant.info.cuisines.join(", ")}</h3>
        <h4>{restaurant.info.areaName}</h4>
      </div>
    </>
  );
};

export const withPromotedLabel = (Restaurantcard) => {
  return () => {
    return (
      <div>
        <label>promoted </label>
        <Restaurantcard />
      </div>
    );
  };
};

export default ResturauntCard;
