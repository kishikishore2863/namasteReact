import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "./config";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item.card));
    console.log(item);
  };
  return (
    <>
      <div className="">
        {items.map((item) => (
          <div
            className="shadow-lg m-2 p-4 flex justify-between "
            key={item.card.info.id}
          >
            <div className="w-96">
              <h1 className="font-bold">{item.card.info.name}</h1>
              <h2>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </h2>
              <div className="">
                <p className="text-xs mt-2">{item.card.info.description}</p>
              </div>
              <button
                className="bg-white text-green-500 align-middle mt-2"
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                ADD
              </button>
            </div>
            <div className="w-36 h-36 rounded-lg">
              <img
                className="rouded-lg w-30 h-30 rounded-lg object-contain"
                src={IMG_CDN_URL + item.card.info.imageId}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ItemList;
