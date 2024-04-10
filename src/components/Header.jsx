import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const online = useOnline();
  return (
    <>
      <div className="navbar">
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
