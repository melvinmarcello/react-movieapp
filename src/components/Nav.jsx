import { NavLink } from "react-router-dom"
import logo from '../assets/Logofix1.png'
import '../style/nav.css'
import { useState } from "react";


export const Nav = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {

      if (window.scrollY >= 80) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);


  return (
    <nav className={colorChange ? 'navbar navbar-scroll' : 'navbar'}>
        <div className="brand-wrapper">          
          <a className="nav-brand p-2" href="/"> <img src={logo} alt='' className="logo ms-3 me-1" />M-LIX</a>
        </div>
        <div className="routes">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/trending">Movies</NavLink>        
        </div>
    </nav>    
  )
}
