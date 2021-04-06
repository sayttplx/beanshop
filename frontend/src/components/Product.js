import './Product.css'
import { addToCart } from '../redux/actions/cartActions'
import { useDispatch } from 'react-redux'

const Product = ({ name, price, description, id }) => {
    const dispatch = useDispatch();

    return (

        <div id="product">

            <img className="product-add" src="/add.svg" alt="add" onClick={() => dispatch(addToCart(id))} />

            <h3 className="product-name">{name}</h3>
            <hr className="product-hr" />
            <p className="product-desc">{description}</p>
            <h3 className="product-price">{price}</h3>
            
        </div>

    );
}

export default Product;

