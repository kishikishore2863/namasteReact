const head = React.createElement("h1", {}, "kishi");
const head2 = React.createElement("h2", {}, "shree");
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
