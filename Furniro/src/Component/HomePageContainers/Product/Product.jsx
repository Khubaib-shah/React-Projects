import React, { useState } from "react";
import Heading from "../../Components/Heading/Heading";
import Card from "../../Components/Card/Card";
import Button from "../../Components/button/Button.jsx";
import OurProductObject from "./ProductList.js";
import "./Product.css";

const Product = ({ onAddToCart }) => {
  const [limit, setLimit] = useState(8);

  const handleOnClick = () => {
    setLimit((prevLimit) => prevLimit + 8);
  };

  const displayedProducts = OurProductObject.slice(0, limit);

  return (
    <div className="Furniro__Product-Container">
      <Heading title="Our Product" />
      <div className="Cards">
        {displayedProducts.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            Category={item.Category}
            Title={item.Title}
            Price={item.Price}
            handleAddToCart={() => {
              onAddToCart(item);
              console.log("added succes ", item);
            }}
          />
        ))}
      </div>
      {limit < OurProductObject.length && (
        <div className="Furniro__Product-Show-More">
          <Button Button={"Show more"} onClick={handleOnClick} />
        </div>
      )}
    </div>
  );
};

export default Product;
