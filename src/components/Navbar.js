//import { Link } from "react-router-dom"
import React, {useState} from "react"
import { Link} from "react-router-dom";
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
          <li className="nav-item">
            <Link className="nav-link" to="/">
              
                    Home
                  
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="about">
                    About
                  </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="property">
                    Property
                  </Link>
          </li>
          {/* <li>
            <Link style={{color:"black", display: "block"}}  to="/blog">Blogs</Link>
          </li>
          <li>
            <Link style={{color:"black", display: "block"}}  to="/testimonial">Testimonials</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link"  to="contact">
                    Contact
                  </Link>
          </li>
        </ul>
        
      </div>
      <form className="d-flex search" role="search">
              <input
                // onChange={handleSearch}
                class="form-control me-1"
                type="text"
                name="price"
                placeholder="Search"
                aria-label="Search"
              />
              <Link className="nav-link" to="add">
                {" "}
                <button class="btn btn-outline-success" type="submit">
                  Add
                </button>
              </Link>
            </form>
    </nav>
    </div>
    );
}

export default NavBar;
