import { Link } from 'react-router-dom';
import './LandingScreen.css'


const LandingScreen = () => {

    return (

        <div className="landing-wrap">
            <div className="svg-wrap">

                <img className="svg-left" src="../intro-graphic-left.svg" alt="left" />
                <Link to="/menu">
                    <img className="svg-center" src="../airbean-landing.svg" alt="center" />
                </Link>
                <img className="svg-right" src="../intro-graphic-right.svg" alt="left" />

            </div>
        </div>
    );
}

export default LandingScreen;