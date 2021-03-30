import { Link } from 'react-router-dom';
import '../styles/landing.css'

const Landing = () => {
    return ( 

        <div id="landing-wrap">
                    <div id="svg-wrap">
                        <Link to="/menu">
        <img id="svg-left" src="../svg/intro-graphic-left.svg" alt="left" />
        <img id="svg-center" src="../svg/airbean-landing.svg" alt="center" />
        <img id="svg-right" src="../svg/intro-graphic-right.svg" alt="left" />
        </Link>
      </div>
      </div>

        
     );
}
 
export default Landing;