import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand">connect api</a>
        <ul className="nav navbar-nav">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Link</a>
          </li>
        </ul>
      </nav>
    );
  }

}

export default Menu;
