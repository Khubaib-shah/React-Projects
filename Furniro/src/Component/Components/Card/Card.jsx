import "./Card.css";
import Button from "../button/Button";

const Card = ({ handleAddToCart, image, Category, Title, Price }) => {
  return (
    <div className="Card-Body">
      <div className="Card__Image">
        <img src={image} alt={Title} />
      </div>
      <div className="Card__Content">
        <h2>{Category}</h2>
        <p>{Title}</p>
        <h3>{Price}</h3>
      </div>
      <div className="Card__On__Hover-Options">
        <Button Button={"Add to cart"} onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default Card;
