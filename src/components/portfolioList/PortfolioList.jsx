import React from "react";
import "./portfolio.scss";

export default function PortfolioList({ title, id, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
