import React from "react";
import "../../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="headerContainer">
      <h1>
        <Link to="/">Spicy sitater fra Krydderhyllen</Link>
      </h1>
      <Link to="/addQuote" className="button submit">
        Har noen sagt noe dumt?
      </Link>
      <button className="button random">Vil du ha et tilfeldig sitat?</button>
    </div>
  );
}

export default Header;
