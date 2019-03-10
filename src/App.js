import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data';
import List from './components/movies/List'
// import Posts from './components/Blog/Posts'
import NavBar from './components/Blog/NavBar'
// import { Router, Route, Switch } from 'react-router'
// import { Link, Router, Route, Switch } from 'react-router-dom'
class App extends Component {

  render() {

    return (
      <>
         <div className="App">
         {/* <Router>
           
      <div>
        <ul>
          <li><Link to="/Users">Users</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
        <Switch>
          <Route path="/posts" exact component={Posts} />
         
        </Switch>
      </div>

          </Router> */}

          
          {/* <NavBar/> */}
          <List data={data} />
        </div>
      </>
    );
  }
}

export default App;
