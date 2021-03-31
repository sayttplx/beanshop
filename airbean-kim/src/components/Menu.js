import MenuList from './MenuList';
import useFetch from '../useFetch'

const Menu = () => {
  const { data: drinks } = useFetch('http://localhost:8005/drinks')

  return (
    // Här kör vi en en (Logical AND) som kollar om events är sant då renderar den ut EvenList, annars om det är falskt händer ingeting.
    <div>
      { drinks && <MenuList drinks={drinks} />}
    </div>
  );
}

export default Menu;