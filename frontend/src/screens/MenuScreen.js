import './MenuScreen.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from '../redux/actions/productActions';
import Product from '../components/Product'
import Hamburger from '../components/Hamburger'
import Bag from '../components/Bag';





const MenuScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch])

    return (
        <div className="menu">
            <Hamburger />
            <Bag />
            <h1>Meny</h1>
            <div className="menuscreen-products">
                {loading && <h2>Loading...</h2>}
                {error && <h2>Error</h2>}
                {products.map(product =>
                    <Product
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        id={product._id}
                    />)}
            </div>

        </div>
    );
}

export default MenuScreen;