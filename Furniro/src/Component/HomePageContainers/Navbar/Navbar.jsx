import React, {  useState } from "react";
import logo from "../../../assets/logo.png";
import User from "../../../assets/Vector.png";
import "./Navbar.css";
import {
  HeartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Cart from "../../Components/Cart/Cart";

const MenuLinks = () => (
  <>
    <a href="#">Home</a>
    <a href="#">Shop</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </>
);

const Navbar = () => {
  console.log( 'hello from navbar',)
  const [menuIcon, setMenuIcon] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartToggle = () => {
    setIsCartVisible((prev) => !prev);
  };

  const onRemoveFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div className="furniro__Navbar__Container">
      <div className="furniro__Navbar__Container-Logo">
        <img src={logo} alt="Furniro Logo" />
        <h1>Furniro</h1>
      </div>
      <div className="furniro__Navbar__Container-links">
        <MenuLinks />
      </div>
      <div className="furniro__Navbar__Container-icon-links">
        <p>
          <img src={User} alt="User Icon" />
        </p>
        <p>
          <SearchOutlined />
        </p>
        <p>
          <HeartOutlined />
        </p>
        <div className="block">
          {isCartVisible ? (
            <div className="absolute right-0 top-0">
              <Cart
                cartItems={cartItems} 
                onRemoveFromCart={onRemoveFromCart}
                onClick={handleCartToggle}
              />
            </div>
          ) : (
            <ShoppingCartOutlined onClick={handleCartToggle} />
          )}
        </div>
      </div>
      <div className="furniro__Navbar__Menu">
        {menuIcon ? (
          <MenuUnfoldOutlined
            style={{
              color: "var(--bg-secondary)",
              fontWeight: "700",
              fontSize: "25px",
            }}
            onClick={() => setMenuIcon(false)}
          />
        ) : (
          <MenuFoldOutlined
            style={{
              color: "var(--bg-secondary)",
              fontWeight: "700",
              fontSize: "25px",
            }}
            onClick={() => setMenuIcon(true)}
          />
        )}
        {menuIcon && (
          <div className="furniro__Navbar__Menu__container">
            <MenuLinks />
            <div className="furniro__Navbar__Menu__Container-icon">
              <SearchOutlined />
              <HeartOutlined />
              <ShoppingCartOutlined onClick={handleCartToggle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
