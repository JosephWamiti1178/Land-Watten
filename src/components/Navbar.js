//import { NavLink } from "react-router-dom"
import React from "react"
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'



function NavBar() {
  //const [isNavExpanded, setIsNavExpanded] = useState(false)

    
    // function handleLinkClick(e) {
    //     e.preventDefault()
    //     onChangePage(e.target.pathname)
    // }
    
    return (
    // <div className="container-fluid">
    //   <Navbar bg="light" expand="lg">
    //     <a href="/" className="brand-name">
    //     MacroSoft
    //       </a>
    //   <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
    //     {/* icon from heroicons.com */}
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-5 w-5"
    //       viewBox="0 0 20 20"
    //       fill="white"
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   </button>
    //   <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
    //     }>
    //     <ul>
    //       <li>
    //         <LinkContainer style={({ isActive }) => ({
    //             color: isActive ? '#fff' : '#545e6f',
    //             background: isActive ? '#7600dc' : '#f0f0f0',
    //          })} exact to="/">Home</LinkContainer>
    //       </li>
    //       <li>
    //         <LinkContainer style={{textDecoration: 'none', 
    //         color:"black"}}  to="/about">
    //           About</LinkContainer>
    //       </li>
    //       <li>
    //         <LinkContainer style={{textDecoration: 'none'}}  to="/property">Property</LinkContainer>
    //       </li>
    //       <li>
    //         <LinkContainer to="/blog">Blogs</LinkContainer>
    //       </li>
    //       <li>
    //         <LinkContainer to="/testimonial">Testimonials</LinkContainer>
    //       </li>
    //       <li>
    //         <LinkContainer to="/contact">Contact</LinkContainer>
    //       </li>
    //     </ul>
    //   </div>
    //   </Navbar>
    //</div>
    <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand>React-Bootstrap</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/service">
      <Nav.Link>Service</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
      <Nav.Link>About</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default NavBar;
