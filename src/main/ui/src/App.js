import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import { Users } from './components/Users'
import { DisplayBoard } from './components/DisplayBoard'
import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from './services/UserService'
import Workouts from './components/Workouts';
import Friends from './components/Friends';
import Profile from './components/Profile';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Footer from "./components/Footer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const sections = [
  { title: 'Workouts', url: '/workouts' },
  { title: 'Friends', url: '/friends' },
  { title: 'Profile', url: '/profile' }
];
class App extends Component {

  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }
  /*
  createUser = (e) => {
      createUser(this.state.user)
        .then(response => {
          console.log(response);
          this.setState({numberOfUsers: this.state.numberOfUsers + 1})
      });
      this.setState({user: {}})
  }

  getAllUsers = () => {
    getAllUsers()
      .then(users => {
        console.log(users)
        this.setState({users: users, numberOfUsers: users.length})
      });
  }

  onChangeForm = (e) => {
      let user = this.state.user
      if (e.target.name === 'firstname') {
          user.firstName = e.target.value;
      } else if (e.target.name === 'lastname') {
          user.lastName = e.target.value;
      } else if (e.target.name === 'email') {
          user.email = e.target.value;
      }
      this.setState({user})
  }
  */
  render() {
    
    return (
      <Router>
      <Header title="Sidero" sections={sections} />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/workouts">
            <Workouts />
            <Footer/>
          </Route>
          <Route path="/friends">
            <Friends />
            <Footer/>
          </Route>
          <Route path="/profile">
            <Profile />
            <Footer/>
          </Route>
          <Route component={Error} />
          
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
