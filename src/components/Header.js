import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./Navbar";
import About from './About'
import Property from './Property'
import Home from './Home'


function Header(){
    const [page, setPage] = useState("/")

    return(
        <div>
        <NavBar onChangePage={setPage} />
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
        </div>
    )
}

export default Header