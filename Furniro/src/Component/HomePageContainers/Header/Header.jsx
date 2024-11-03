import React from "react";
import Button from "../../Components/button/Button";
import "./Header.css";
const Header = () => {
  return (
    <div className="Furniro__Header__container">
      <div className="Furniro__Header__container-Content">
        <h4>New Arrival</h4>
        <h1>Discover Our New Collection</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          consequatur
        </p>
        <div className="Furniro__Header__container-Content-Button">
          <Button Button={"Buy Now"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
