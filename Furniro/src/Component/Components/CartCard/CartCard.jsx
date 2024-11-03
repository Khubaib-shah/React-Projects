import React from "react";
import vector1 from "../../../assets/vector1.png";

const CartCard = ({ item, onRemove }) => {
  console.log( 'fromcartCard',item)
  return (
    <div className="mt-5 flex items-center justify-between">
      <img
        src={item.image}
        alt={item.Title}
        className="w-[105px] h-[105px] rounded-md object-cover cursor-pointer"
      />
      <div className="w-[130px] h-[56px] flex flex-col justify-between">
        <h3 className="text-[16px] font-medium">{item.Title}</h3>
        <div className="flex justify-between text-sm w-full">
          <p>1</p>
          <p>x</p>
          <p className="text-[--bg-secondary]">{item.Price}</p>
        </div>
      </div>
      <img
        src={vector1}
        className="cursor-pointer"
        alt="Remove"
        onClick={onRemove} 
      />
    </div>
  );
};

export default CartCard;
