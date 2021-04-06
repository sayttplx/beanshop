import "./Bag.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Bag = () => {
  // Extract data from the store
  const itemsInCart = useSelector(state => state.cart.cartItems).length

  return (

    <div className="cart-menu">
      <div>
        <Link to="/cart" className="cart-link">
          <img src="/bag.svg" alt="svg" width="30" height="30" />
          <span className="cart-logo">{itemsInCart}</span>
        </Link>
      </div>
    </div>
  );
};

export default Bag;