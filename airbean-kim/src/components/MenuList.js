import { Link } from "react-router-dom";

const MenuList = ( { drinks } ) => {
    
    

    return (
            <div>
                {drinks.map((drink) => (
                    <div key={drink.id} >
                        <Link to="/cart">
                        <img onClick={() => {console.log(`added item ${drink.title}`)}} width="30" height="30" src="../svg/add.svg" alt="add button" />
                        </Link>
                        <h2>{drink.title}</h2>
                        <hr/>
                        <p>{drink.desc}</p>
                        <h2>{drink.price}</h2>
                    </div>
                ))}
            </div>
    );
}

export default MenuList;