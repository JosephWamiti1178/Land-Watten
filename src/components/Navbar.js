import { NavLink } from "react-router-dom"
import logo from './icon/logo.jpeg'

function NavBar(){
  return(
    <div className="container-fluid">
      <div className="container-fluid navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/property">Property</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

      </div>
    </div>
  )
}
export default NavBar;

// //import { NavLink } from "react-router-dom"
// import React, {useState} from "react"
// import { NavLink} from "react-router-dom";
// // import {Navbar, Nav} from 'react-bootstrap'
// // import {LinkContainer} from 'react-router-bootstrap'


// //{ onChangePage, handleSearch}
// function NavBar() {
//   const [isNavExpanded, setIsNavExpanded] = useState(false)

    
//     // function handleLinkClick(e) {
//     //     e.preventDefault()
//     //     onChangePage(e.target.pathname)
//     // }
    
//     return (
//     <div className="container-fluid">
//       <nav className="navigation">
//         <a href="/" className="brand-name">
//           WattenDevelopers
//           </a>
//       <button className="hamburger" onClick={() => {setIsNavExpanded(!isNavExpanded)}}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           viewBox="0 0 20 20"
//           fill="white"
//         >
//           <path
//             fillRule="evenodd"
//             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </button> 
//       <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//         }>
//         <ul>
//           <li>
//             <NavLink className="nav-link" exact to="/">
              
//                     Home
                  
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-link"  to="/about">
//                     About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-link" to="/property">
//                     Property
//             </NavLink>
//           </li>
//            {/* <li>
//             <NavLink style={{color:"black", display: "block"}}  to="/blog">Blogs</NavLink>
//           </li>
//           <li>
//             <NavLink style={{color:"black", display: "block"}}  to="/testimonial">Testimonials</NavLink>
//           </li> */}
//           <li>
//             <NavLink className="nav-link"  to="/contact">
//                     Contact
//                   </NavLink>
//           </li>
//         </ul>
        
//       </div>
//       <form className="d-flex search" role="search">
//               <input
//                 // onChange={handleSearch}
//                 class="form-control me-1"
//                 type="text"
//                 name="price"
//                 placeholder="Search"
//                 aria-label="Search"
//               />
//               <NavLink className="nav-link" to="add">
//                 {" "}
//                 <button class="btn btn-outline-success" type="submit">
//                   Add
//                 </button>
//               </NavLink>
//             </form>
//     </nav>
//     </div>
//     );
// }

// export default NavBar;
