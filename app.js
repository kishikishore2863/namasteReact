import React from "react";
import ReactDOM from "react-dom/client";

const head = React.createElement(
  "h1",
  {
    key: "2",
  },
  "kishi"
);
const head2 = React.createElement(
  "h2",
  {
    key: "1",
  },
  "shree"
);
const container = React.createElement(
  "div",
  {
    id: "title",
  },
  [head, head2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

const x = React.createElement("p", {}, "i love shree");
const xroot = ReactDOM.createRoot(document.getElementById("ki"));
root.render(container);
xroot.render(x);

const para = React.createElement(
  "p",
  {
    id: "kig",
    kishi: "shree ",
  },
  "dgjksdfgkahjskgfhjasgdfhkasdfg"
);
const pararoot = ReactDOM.createRoot(document.getElementById("p"));
pararoot.render(para);

const heading2 = (
  <h1 id="title" key="h2">
    namaste react
  </h1>
);
