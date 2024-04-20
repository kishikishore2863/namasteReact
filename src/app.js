import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestraurantMenu from "./components/RestraurantMenu";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const HeaderComponent = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <HeaderComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      { path: "/cart", element: <Cart /> },
      {
        path: "/About",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestraurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("ki"));
root.render(<RouterProvider router={approuter} />);
