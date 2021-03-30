import { Link } from 'react-router-dom';


const Landing = () => {
    return ( 

        <div className="landing-wrap">
                    <div className="svg-wrap">
                        <Link to="/menu">
        <img className="svg-left" src="../svg/intro-graphic-left.svg" alt="left" />
        <img className="svg-center" src="../svg/airbean-landing.svg" alt="center" />
        <img className="svg-right" src="../svg/intro-graphic-right.svg" alt="left" />
        </Link>
      </div>
      </div>
     );
}
 
export default Landing;