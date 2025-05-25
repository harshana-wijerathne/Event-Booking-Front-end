import './Checkout.css';
import {NavLink} from "react-router-dom";

function Checkout() {
  return (
    <>
      Checkout
        <NavLink to={'/main'}>Main</NavLink>
    </>
  );
}

export default Checkout;
