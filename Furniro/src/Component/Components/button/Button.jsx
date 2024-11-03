import React from "react";
import "./Button.css";
const Button = ({ Button ,onClick }) => {
  return (
    <div onClick={onClick} className="Global-button">
      {Button}
      
    </div>
  );
};

export default Button;
