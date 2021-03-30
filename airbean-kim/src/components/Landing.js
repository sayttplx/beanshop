import { Link } from 'react-router-dom';
import '../styles/landing.css'

const Landing = () => {
    return ( 

        <div className="wrapper">
            <Link to="/menu">
        <h1>AIR BEAN</h1>
        </Link>
        <p>DRONEDELIVERED COFFEE</p>
        </div>
        
     );
}
 
export default Landing;