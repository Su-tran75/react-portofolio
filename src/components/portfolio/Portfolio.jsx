import React, { useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  const [selected, setSelected] = useState("");

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "design", title: "Design" },
    { id: "content", title: "Content" },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            key={item.id}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?cs=srgb&dl=pexels-anna-shvets-4482900.jpg&fm=jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?cs=srgb&dl=pexels-anna-shvets-4482900.jpg&fm=jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?cs=srgb&dl=pexels-anna-shvets-4482900.jpg&fm=jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?cs=srgb&dl=pexels-anna-shvets-4482900.jpg&fm=jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?cs=srgb&dl=pexels-anna-shvets-4482900.jpg&fm=jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?cs=srgb&dl=pexels-anna-shvets-4482900.jpg&fm=jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?cs=srgb&dl=pexels-anna-shvets-4482900.jpg&fm=jpg"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
