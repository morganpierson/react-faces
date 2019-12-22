import React from "react";
import { render } from "react-dom";
import UserCard from "./UserCard";

const App = () => {
  return (
    <UserCard name={"Morgan"} pic={"https://www.placecage.com/c/200/300"} />
  );
};

render(React.createElement(App), document.getElementById("root"));
