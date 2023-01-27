//import { NavLink } from "react-router-dom"
import React, {useState} from "react"
import { NavLink } from "react-router-dom";
// import {Navbar, Nav} from 'react-bootstrap'
// import {LinkContainer} from 'react-router-bootstrap'



function NavBar({ onChangePage }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

    
    // function handleLinkClick(e) {
    //     e.preventDefault()
    //     onChangePage(e.target.pathname)
    // }
    
    return (
    <div className="container-fluid">
      <nav className="navigation">
        <a href="/" className="brand-name">
          WattenDevelopers
          </a>
      <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <NavLink style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#7600dc' : '#f0f0f0',
             })} exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink style={{
            color:"black"}}  to="/about">
              About</NavLink>
          </li>
          <li>
            <NavLink style={{color:"black", display: "block",}}  to="/property">Property</NavLink>
          </li>
          <li>
            <NavLink style={{color:"black", display: "block"}}  to="/blog">Blogs</NavLink>
          </li>
          <li>
            <NavLink style={{color:"black", display: "block"}}  to="/testimonial">Testimonials</NavLink>
          </li>
          <li>
            <NavLink  style={{color:"black", display: "block"}}  to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    );
}

export default NavBar;
