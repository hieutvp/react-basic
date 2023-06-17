import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.scss";
class NavigationBar extends React.Component {
  render() {
    return (
      <div className="top-nav">
        <nav className="navbar navbar-expand-lg navbar-light bg-ligh bg-color-nav ">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink
                  to="/"
                  className="nav-link"
                  activeClassName="active"
                  exact={true}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  to="/todo"
                  className="nav-link"
                  activeClassName="active"
                  exact={true}
                >
                  Todo
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  to="/job"
                  className="nav-link"
                  activeClassName="active"
                  exact={true}
                >
                  Job
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  to="/user"
                  className="nav-link"
                  activeClassName="active"
                  exact={true}
                >
                  User
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavigationBar;
