import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import UserCard from "./UserCard";
import AppContext from "./AppContext";

const API_KEY = "f7322ae2ae53159d961a474b67516e";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://uifaces.co/api?limit=6&emotion[]=happiness", {
      method: "GET",
      headers: {
        "X-API-KEY": API_KEY,
        Accept: "application/json",
        "Cache-Control": "no-cache"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        setData(response);
        setLoading(false);
      });
  }, [loading]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <AppContext.Provider value={data}>
      <div>
        <pre>
          <code>{JSON.stringify(data[0], null, 4)}</code>
        </pre>
        <UserCard name={data[0].name} pic={data[0].photo} />
      </div>
    </AppContext.Provider>
  );
};

render(React.createElement(App), document.getElementById("root"));
