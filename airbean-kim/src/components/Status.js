import { Link } from "react-router-dom";

const Status = () => {
  return (
    <div className="status-wrap">
      <p>Ordernummer #12DV23F</p>
      <div className="status-wrap-img">
        <img src="../svg/drone.png" alt="drone"></img>
        <img src="../svg/cup.png" alt="cup"></img>
      </div>
      <h1>Din beställning är påväg!</h1>
      <h2>13 minuter</h2>
      <Link to="/menu">
      <button>Ok, cool!</button>
      </Link>
    </div>
  );
}

export default Status;