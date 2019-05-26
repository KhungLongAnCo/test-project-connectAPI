import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

let MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        return (
          <li className={match ? 'active' : ''}>
            <Link to={to}>
              {label}
            </Link>
          </li>
        )
      }
      }
    />
  )
}
let menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Manager',
    to: '/products-list',
    exact: true
  }
];

class Menu extends Component {
  render() {
    return (

      <div className="navbar navbar-default">
        <Link className="navbar-brand" to='/'>Test Call API</Link>
        <ul className="nav navbar-nav">
          {this.showMenus(menus)}
        </ul>
      </div>

    );
  }
  showMenus = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            to={menu.to}
            label={menu.name}
            activeOnlyWhenExact={menu.exact}
          />
        )
      })
    }
    return result;
  }

}

export default Menu;
