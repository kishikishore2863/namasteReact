import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../utils/locationSlice";
const Header = () => {
  const dispatch = useDispatch();
  const online = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  const handleLocation = async () => {
    await fetchLocation();
  };
  const fetchLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const userlocation = { latitude, longitude };
      dispatch(setUserLocation(userlocation));
    });
  };
  // if (fetchLocation) {
  //   const suni = fetchLocation;
  //   console.log(suni);
  // }
  return (
    <>
      {/* <div className="navbar">
        <div>
          <Title />
          <h1>{online ? "🟢" : "🔴"}</h1>
        </div>
        <div>
          <ul className="navitem">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </div> */}
      <div className="w-full flex justify-between h-[100px] p-[20px] bg-gray-200 shadow-lg">
        <div>
          <Link to="/">
            <h1 className="text-4xl tex font-bold italic">QuickEats</h1>{" "}
          </Link>
          <button
            className="text-black"
            onClick={() => {
              handleLocation();
            }}
          >
            📍 use your location
          </button>
        </div>
        <div>
          <ul>
            <Link className="p-[10px] text-xl"></Link>
            <Link className="p-[10px] text-xl">Menu</Link>
            <Link to="/cart" className="p-[10px] text-xl">
              Cart({cartItems.length})
            </Link>
            <Link className="p-[10px] text-xl">About</Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
