
import { useState } from 'react';
import {LOGO_URL} from '../utils/constants'

const Header = () => {
  const [text,setText] = useState("LOGIN");


  const fn_ToggleMe = ()=>{
    if (text === "LOGIN") {
      setText("LOGOUT");
    }
    else{
      setText("LOGIN");
    }   
  }

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={fn_ToggleMe} className='login-btn'>{text}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;