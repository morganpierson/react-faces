import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import UserCard from "./UserCard";
import AppContext from "./AppContext";
import business from "./info.json";

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
      <div className="container">
        <div className="team-rundown">
          <h3>Our Team</h3>
          <div className="our-team">
            {data.map(user => (
              <UserCard name={user.name} pic={user.photo} key={user.email} />
            ))}
          </div>
        </div>
        <div className="about-us">
          <h3 className="about">About Us</h3>
          <h3 className="about-mobile">Our Story</h3>
          <p className="biz-info">
            Today, our company is a family-owned business operating 21 store
            locations across Indiana. Each store offers a range of eye health
            services that help patients correct and protect their vision. In
            addition, our stores carry a large selection of designer frames and
            fashion-forward for Women, Men and Kids.
          </p>
          <p className="biz-info">
            More than 75 years later, we've helped Indiana residents maintain
            quality vision and find their perfect pair of eyewear still remains
            today throughout all our stores.
          </p>
        </div>
      </div>
    </AppContext.Provider>
  );
};

render(React.createElement(App), document.getElementById("root"));
