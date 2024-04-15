import { IMG_CDN_URL } from "./config";
const ResturauntCard = ({ restaurant }) => {
  return (
    <>
      <div className="card w-56   h-96 shadow-xl p-2 m-2 bg-gray-100 align-middle hover:bg-gray-200 rounded-2xl">
        <div className="w-55 h-55 object-contain overflow-hidden">
          <img
            className="w-full h-full object-contain overflow-hidden aspect-auto rounded-2xl"
            src={IMG_CDN_URL + restaurant.info.cloudinaryImageId}
          />
        </div>
        <h2>{restaurant.info.name}</h2>
        <h3 className="text-xs">{restaurant.info.cuisines.join(", ")}</h3>
        <h4>{restaurant.info.areaName}</h4>
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
