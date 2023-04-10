const heading = React.createElement(
  "h1",
  { id: "title" },
  "Namaste everyone from Heading 1"
);
const heading2 = React.createElement(
  "h1",
  { id: "title", hellow: "world" },
  "Namaste everyone from Heading 2"
);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
