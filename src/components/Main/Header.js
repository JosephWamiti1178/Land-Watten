import { Switch, Route } from "react-router-dom";
//import React, { useState } from "react";
import NavBar from "../Navbar";
import About from './About'
import Property from './Property'
import Home from './Home'


function Header(){
    //const [page, setPage] = useState("/")
    // onChangePage={setPage}

    return(
        <header>
        <NavBar />
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/property">
                <Property />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
        </header>
    )
}

export default Header
