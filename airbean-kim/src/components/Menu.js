import MenuList from './MenuList';
import useFetch from './useFetch'

const Menu = () => {
  const { data: drinks } = useFetch('http://localhost:8005/drinks')

  return (
    <div>
      { drinks && <MenuList drinks={drinks} />}
    </div>
  );
}

export default Menu;