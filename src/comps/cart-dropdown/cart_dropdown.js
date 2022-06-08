import { useContext } from "react";

import { CartContext } from "../../context/cart_context";
import { useNavigate } from "react-router-dom";

import Button from "../button/button_component";
import CartItem from "../cart-item/cart_item_component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHanker = () => {
    navigate(`/checkout`);
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckoutHanker}>go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
