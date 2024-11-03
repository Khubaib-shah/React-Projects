import { ShoppingCartOutlined } from "@ant-design/icons";
import Heading from "../Heading/Heading";
import CartCard from "../CartCard/CartCard";
const Cart = ({ cartItems = [], onRemoveFromCart, onClick }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.Price, 0);
  console.log(subtotal, cartItems);
  return (
    <div className="w-[417px] flex flex-col justify-between h-[726px] bg-white p-2 px-7 cursor-default">
      <div className="w-[350px] py-2 mx-auto ">
        <div className="flex items-center justify-between">
          <Heading
            className="text-[26px] font-[600] font-poppins"
            title="Shopping Cart"
          />
          <ShoppingCartOutlined
            aria-label="Close cart"
            alt="Close cart"
            onClick={onClick}
          />
        </div>
        <div className="w-[287px] h-[1px] bg-gray-400 mt-4"></div>

        {cartItems?.length > 0 ? (
          cartItems.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              onRemove={() => onRemoveFromCart(item.id)}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2 className="font-semibold">Subtotal</h2>
          <p className="text-[--bg-secondary] font-semibold">
            Rs. <span>{subtotal.toFixed(2)}</span>
          </p>
        </div>
        <div className="w-full h-[1px] bg-gray-400 mt-4"></div>
        <div className="flex justify-between mt-4">
          <button
            className="border border-slate-600 rounded-3xl py-[6px] px-[30px] text-[12px]"
            disabled={cartItems.length === 0}
            aria-label="View cart"
          >
            Cart
          </button>
          <button
            className="border border-slate-600 rounded-3xl py-[6px] px-[30px] text-[12px]"
            disabled={cartItems.length === 0}
            aria-label="Checkout"
          >
            Checkout
          </button>
          <button
            className="border border-slate-600 rounded-3xl py-[6px] px-[30px] text-[12px]"
            disabled={cartItems.length === 0}
            aria-label="Compare products"
          >
            Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
