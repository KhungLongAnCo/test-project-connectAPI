import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/menu';
import routes from './route';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className='container'>

            {this.showContent(routes)}
          </div>
        </div>
      </Router>




    );
  }
  showContent(routes) {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return <Switch>{result}</Switch>;
  }

}

export default App;
