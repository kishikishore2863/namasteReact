const Header = () => {
  return (
    <>
      <div className="navbar">
        <div>
          <Title />
        </div>
        <div>
          <ul className="navitem">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
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
      <h1>Belluli Kabab</h1>
    </>
  );
};
