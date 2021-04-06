import './StatusScreen.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { resetOrder } from '../redux/actions/cartActions'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Hamburger from '../components/Hamburger';
import Bag from '../components/Bag';

const StatusScreen = () => {
  const dispatch = useDispatch();
  const order = useSelector(state => state.cart.order)
  const [timeLeft, setTimeLeft] = useState(null);

  const eta = order
    ? order.items
      .map(item => item.eta)
      .reduce((a, b) => a + b, 0)
    : 0

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  const calculateTimeLeft = () => {
    return millisToMinutesAndSeconds(
      -(new Date() - new Date(new Date(order.timestamp).getTime() + eta * 60000))
    )
  }

  useEffect(() => {
    if (!order) return
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearInterval(timer);
  });

  return (

    (order && <div className="status-wrap">

      <p>Ordernummer {order.id}</p>
      <div className="status-wrap-img">
        <img src="../drone.png" alt="drone"></img>
        <img className="cup" src="../cup.png" alt="cup"></img>
      </div>
      <h1>Din beställning är påväg!</h1>
      <h2>{timeLeft}</h2>
      <Link to="/menu">
        <button onClick={() => dispatch(resetOrder())}>Ok, cool!</button>
      </Link>
    </div>
    ) || <>
      <Hamburger />
      <Bag />
      <h2 className="no-order">Ingen order</h2>
    </>
  );
}

export default StatusScreen;