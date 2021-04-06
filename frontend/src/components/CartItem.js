import { addToCart, removeFromCart } from '../redux/actions/cartActions'
import { useDispatch } from 'react-redux'

const CartItem = ({ name, price, quantity, id }) => {
    const dispatch = useDispatch();

    return (
      
      <div className="cart-item">
         <h2 className="h2-cart">{name}</h2>
         <p className="p-cart">{price} kr</p>
         <button onClick={() => dispatch(addToCart(id))}>Plus</button><button onClick={() => dispatch(removeFromCart(id))}>Minus</button>
         <p>{quantity}</p>
         
      </div>
    );
}

export default CartItem;

