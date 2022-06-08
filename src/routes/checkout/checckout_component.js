import { useContext } from "react";
import { CartContext } from "../../context/cart_context";
import "./checkout.styles.scss";
import CheckOutItem from "../../comps/checkout-item/checkout_Item_component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <h1>I am the checkout page</h1>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          . <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        return <CheckOutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">total :{cartTotal}$</span>
    </div>
  );
};

export default Checkout;
