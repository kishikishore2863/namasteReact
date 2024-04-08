import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <Title />
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
