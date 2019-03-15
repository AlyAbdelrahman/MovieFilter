import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import data from './data';
// import List from './components/movies/List'
import PostsList from './components/Blog/Posts'
import NavBar from './components/Blog/NavBar';

// import {  Switch } from 'react-router'
// import { Link, Router, Route } from 'react-router-dom'

import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import PostDetails from './components/Blog/PostDetails';
import Home from './components/Blog/Home';
import UserList from './components/Blog/UsersList'
import UserDetails from './components/Blog/UserDetails';
import UserPosts from './components/Blog/UserPosts';
import AddPost from'./components/Blog/AddPost'


class App extends Component {

  render() {

    return (
      <>
      
        <div className="App">
          <Router>
            <div className="PageContainer">
              
              <NavBar />
              <Switch>
              <Route path="/" exact component={Home} />

                <Route path="/users" exact component={UserList} />
                <Route path="/users/:id" exact component={UserDetails} />
                <Route path="/posts" exact component={PostsList} />
                <Route path="/posts/:id" exact component={PostDetails} />
                <Route path="/posts/user/:id" exact component={UserPosts} />
                <Route path="/create" exact component={AddPost} />
                
                
              </Switch>
            </div>
          </Router>


          {/* <List data={data} /> */}
        </div>
      </>
    );
  }
}

export default App;
