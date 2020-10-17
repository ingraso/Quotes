import React from "react";
import "../../styles/header.css";

function Header() {
  return (
    <div id="headerContainer">
      <h1>Spicy sitater fra Krydderhyllen</h1>
      <button className="button submitt">Har noen sakt noe dumt?</button>
      <button className="button random">Vil du ha et tilfeldig sitat?</button>
    </div>
  );
}

export default Header;
