import ItemList from "./ItemList";
const Restraurantcategory = ({ data, showItems, setShowItem }) => {
  const handleClick = () => {
    setShowItem();
  };

  return (
    <>
      <div>
        <div
          className="bg-gray-200 p-4 shadow-lg flex justify-between m-2 rounded-lg cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data.title}( {data.itemCards.length})
          </span>
          <span>{"👇"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};
export default Restraurantcategory;
