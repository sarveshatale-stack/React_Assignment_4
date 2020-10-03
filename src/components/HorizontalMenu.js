import React, { Component } from "react";
import "./HorizontalMenu.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./Product";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
class HorizontalMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to Site</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/Product"} className="nav-link">
                  Product
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Product" component={Product} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default HorizontalMenu;
