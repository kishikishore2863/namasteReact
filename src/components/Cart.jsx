import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { IMG_CDN_URL } from "./config";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div>
        <h1 className="font-bold text-center text-2xl">Cart</h1>
        <div className="">
          {cartItems.map((item) => (
            <div
              className="shadow-lg m-2 p-4 flex justify-between "
              key={item.info.id}
            >
              <div className="w-96">
                <h1 className="font-bold">{item.info.name}</h1>
                <h2>
                  ₹
                  {item.info.price
                    ? item.info.price / 100
                    : item.info.defaultPrice / 100}
                </h2>
                <div className="">
                  <p className="text-xs mt-2">{item.info.description}</p>
                </div>
              </div>
              <div className="w-36 h-36 rounded-lg">
                <img
                  className="rouded-lg w-30 h-30 rounded-lg object-contain"
                  src={IMG_CDN_URL + item.info.imageId}
                />
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleClearCart}>clear cart</button>
      </div>
    </>
  );
};
export default Cart;
