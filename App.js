import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
  <>
    <h2 id="title" key="h2">
      Namaste React
    </h2>
    <h1>ymkc</h1>
  </>
);
// const heading2 = React.createElement(
//   "h1",
//   { id: "title", hellow: "world" },
//   "Namaste everyone from Heading 2"
// );
// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading2,
// ]);
// const jsString = "arey bc js ka string";
const HeaderComponent = () => {
  return (
    <div>
      <Heading />
      {/* {jsString} */}
      <h1>Namaste React functional component</h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
