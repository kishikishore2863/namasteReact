import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";

const About = () => {
  return (
    <>
      <h1>this is an about </h1>
      <p>kfvknjenvkjenvjkrenvjknjk</p>
      <Outlet />
      <ProfileClass />
      <profile />
    </>
  );
};
export default About;
