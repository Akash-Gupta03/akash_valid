import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/extra2.css'

const Extrapage = () => {
    const ToggleDropDown= (e)=>{
        e.preventDefault()
        let drop_down_active = e.currentTarget.nextElementSibling
        drop_down_active.classList.toggle('dropdown-active')
      }

      const onToggle = () => {
        let navbarid = document.getElementById("navbar");
        navbarid.classList.toggle("navbar-mobile");
      };
    
      const ToggleButton = () => {
        let navbar = document.getElementById("navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = document.getElementById("toggle-button");
          navbarToggle.classList.add("bi-list");
        }
      };
  return (
    <div>
          <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle fs-6 mx-3  font-navbar" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:"pointer"}} >
                  COMPANY
                </a>
                <ul className="dropdown-menu about-mobile-view dropdown" aria-labelledby="navbarDropdown" onClick={ToggleDropDown}>
                  <li onClick={ToggleButton}><a className="dropdown-item font-navbar-service" style={{cursor:"pointer"}} >About</a></li>
                  <li onClick={ToggleButton}><a className="dropdown-item font-navbar-service"  style={{cursor:"pointer"}}>Career</a></li>

                  <li onClick={ToggleButton}><Link to='/team' className="dropdown-item font-navbar-service"  style={{cursor:"pointer"}}>Gallery</Link></li>

                </ul>
              </li>
    </div>
  )
}

export default Extrapage
