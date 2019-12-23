import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import UserCard from "./UserCard";

const API_KEY = "f7322ae2ae53159d961a474b67516e";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://uifaces.co/api?limit=10&emotion[]=happiness", {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        Accept: "application/json",
        "Cache-Control": "no-cache"
      }
    })
      .then(res => res.json())
      .then(response => console.log(response));
  });

  return (
    <div>
      <UserCard name={"Morgan"} pic={"https://www.placecage.com/c/200/300"} />
      <UserCard name={"Nick"} pic={"https://www.placecage.com/c/200/300"} />
      <UserCard
        name={"Crazy man"}
        pic={"https://www.placecage.com/c/200/300"}
      />
    </div>
  );
};

render(React.createElement(App), document.getElementById("root"));
