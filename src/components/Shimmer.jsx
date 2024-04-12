const Cards = () => {
  return (
    <div className="  w-56   h-96 shadow-lg p-2 m-2 bg-gray-100 align-middle hover:bg">
      <div className="img-shimmer w-full h-[200px] bg-lightgray rounded-xl mb-4"></div>
      <h2 className=" h-10 bg-lightgray mb-4"></h2>
      <h4 className="w-[40%] h-5 bg-lightgray mb-4"></h4>
      <p className="w-[80%] h-4 bg-lightgray"></p>
    </div>
  );
};

const Shimmer = () => {
  return (
    <>
      <div className="flex flex-wrap  justify-evenly md:justify-center align-middle ">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <Cards key={index} />
          ))}
      </div>
    </>
  );
};
export default Shimmer;
