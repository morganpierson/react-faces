import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import UserCard from "./UserCard";
import AboutUs from "./AboutUs";
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
        setData(response);
        setLoading(false);
      });
  }, [loading]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <AppContext.Provider value={data}>
      <div className="container">
        <div className="team-rundown">
          <h3>Our Team</h3>
          <div className="our-team">
            {data.map(user => (
              <UserCard name={user.name} pic={user.photo} key={user.email} />
            ))}
          </div>
        </div>
        <AboutUs />
      </div>
    </AppContext.Provider>
  );
};

render(React.createElement(App), document.getElementById("root"));
