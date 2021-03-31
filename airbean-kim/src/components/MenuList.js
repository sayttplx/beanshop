const MenuList = ( { drinks } ) => {

    return (
            <div>
                {drinks.map((drink) => (
                    <div key={drink.id} >
                        <img width="30" height="30" src="../svg/add.svg" alt="add button" />
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