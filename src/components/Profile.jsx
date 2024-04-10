import { useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <h1>this from profile </h1>
      <p>cmsdkcnkjsdncjkdsncjnjd</p>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
    </>
  );
};
export default Profile;
