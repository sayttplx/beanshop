import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import { useDispatch } from 'react-redux'

const CartItem = ({ name, price, quantity, id }) => {
    const dispatch = useDispatch();

    return (
      <div className="cart-item">
         <h2>{name}</h2>
         <p>{price} kr</p>
         <button onClick={() => dispatch(addToCart(id))}>Plus</button>
         <p>{quantity}</p>
         <button onClick={() => dispatch(removeFromCart(id))}>Minus</button>
      </div>
    );
}

export default CartItem;

