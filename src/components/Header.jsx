import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const online = useOnline();
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
        </div>
        <div>
          <ul>
            <Link className="p-[10px] text-xl"></Link>
            <Link className="p-[10px] text-xl">Menu</Link>
            <Link className="p-[10px] text-xl">Cart</Link>
            <Link className="p-[10px] text-xl">About</Link>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;

const Title = () => {
  return (
    <>
      <h1>BELLULI KEBAB</h1>
    </>
  );
};
