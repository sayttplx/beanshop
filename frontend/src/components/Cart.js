import { useSelector } from "react-redux";
import { placeOrder } from '../redux/actions/cartActions'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import CartItem from './CartItem'
import Hamburger from "./Hamburger";
import Bag from "./Bag";

const Cart = () => {
    // dispatch any action to the store
    const dispatch = useDispatch();

    // Extract data from the store
    const cart = useSelector(state => state.cart.cartItems)
    const formattedCart = cart
        .reduce((list, item) => {
            // Reduce cart from state to group products of same type
            const foundIndex = list.findIndex(({product}) => product === item.product)
            
            if(foundIndex !== -1) {
                list[foundIndex].quantity++
            } else {
                list.push({ ...item, quantity: 1 })
            }

            return list
        }, [])

    // Add price of all items
    const total = formattedCart
        .map(({ price, quantity}) => price * quantity)
        .reduce((a, b) => a + b, 0)

    return (
        <div>
            <Hamburger/>
            <Bag/>
            {formattedCart.map(item => 
                <CartItem
                    key={item.product}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    id={item.product} />
            )}
            <h1>Total: {total} kr</h1>

            <Link to="/status">
                <button onClick={() => dispatch(placeOrder(cart))}>Take my money!</button>
            </Link>
        </div>
    );
}

export default Cart;