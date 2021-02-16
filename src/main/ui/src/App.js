import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Workouts from './components/Workouts';
import Friends from './components/Friends';
import Profile from './components/Profile';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Footer from "./components/Footer"
import Error from './components/Error'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Alert from '@material-ui/lab/Alert';
var hash = require('object-hash');

const sections = [
  { title: 'Workouts', url: '/workouts' },
  { title: 'Friends', url: '/friends' },
  { title: 'Profile', url: '/profile' }
];
class App extends Component {

  state = {
    email: null,
    errorMessage: ""
  }

  componentDidMount() {
    const account = localStorage.getItem("account");
    const token = localStorage.getItem("token");


    if (token) {
      if(hash(account) === token)
      {
        this.setState({email: JSON.parse(account).email});
      }
   }
  }

  isEmailLoggedIn = (pageName) => {
    if(this.state.email !== undefined && this.state.email !== null && this.state.email !== "")
    {
      if(pageName === "/")
      {
        return <div> <Workouts email={this.state.email}/> 
        <Footer/> </div>
      }
      if(pageName === "workouts")
      {
        return <div> <Workouts email={this.state.email}/>
        <Footer/> </div>
      }
      else if(pageName === "friends")
      {
        return <div> <Friends email={this.state.email}/>
        <Footer/> </div>
      }
      else if(pageName === "profile")
      {
        return <div> <Profile email={this.state.email}/>
        <Footer/> </div>
      }
      else
      {
        return <Error />
      }
    }
    else
    {
      return <SignIn onSubmit={this.handleSignInSubmit} resetError={this.resetError}/>
    }
  }

  resetError = () => {
    this.setState({errorMessage: ""})
  }

  handleSignUpSubmit = async (e, username, email, password) => {
    e.preventDefault();
    if(email !== "")
    {
      if(username !== "")
      {
        if(password !== "")
        {
          var params = {username: username.trim(), email: email.toLowerCase().trim(), password: password}
          var endpoint = "/api/account?"
          var url = new URLSearchParams(params);
  
          await fetch(endpoint + url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
          }).then(async response => {
            if(!response.ok)
            {
              const err = await response.json()
              this.setState({errorMessage: err.message})
            } else {
              const data = await response.json()
              this.setState({email: data.email});
      
              // store the data in localStorage
              localStorage.setItem('account', JSON.stringify(data))
              localStorage.setItem('token',  hash(JSON.stringify(data)))
      
              window.location = '/workouts'
            }
            
          })
        }
        else
        {
          this.setState({errorMessage: "Valid password required"})
        }
      }
      else
      {
        this.setState({errorMessage: "Valid username required"})
      }
    } 
    else
    {
      this.setState({errorMessage: "Valid email required"})
    }
  };
  
  handleSignInSubmit = async (e, email, password) => {
    e.preventDefault();
    if(email !== "")
    {
    var params = {email: email.toLowerCase().trim(), password: password}
    var endpoint = "/api/login?"
    var url = new URLSearchParams(params);
  
    await fetch(endpoint + url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      }).then(async response => {
        if(!response.ok)
        {
          const err = await response.json()
          this.setState({errorMessage: err.message})
        } else {
          const data = await response.json()
          this.setState({email: data.email});
  
          // store the data in localStorage
          localStorage.setItem('account', JSON.stringify(data))
          localStorage.setItem('token',  hash(JSON.stringify(data)))
  
          window.location = '/workouts'
        }
        
      })
    }
    else
    {
      this.setState({errorMessage: "Invalid email or password!"})
    }
  }
  
  
  handleLogout = () => {
    this.setState({'email': null})
    localStorage.clear();
    window.location = '/'
  };

  signinButton = () => {
    window.location = '/signin'
  }
  render() {
    
    return (
      <Router>
      <Header title="Sidero" sections={sections} email={this.state.email} signin={this.signinButton} signout={this.handleLogout}/>
      {this.state.errorMessage && <Alert severity="error">{this.state.errorMessage}</Alert>}
      <div className="App">
        <Switch>
          <Route exact path="/">
            {this.isEmailLoggedIn("/")}
          </Route>
          <Route exact path="/signin">
            <SignIn onSubmit={this.handleSignInSubmit} resetError={this.resetError}/>
          </Route>
          <Route path="/signup">
            <SignUp onSubmit={this.handleSignUpSubmit} resetError={this.resetError}/>
          </Route>
          <Route path="/workouts">
            {this.isEmailLoggedIn("workouts")}
          </Route>
          <Route path="/friends">
            {this.isEmailLoggedIn("friends")}
          </Route>
          <Route path="/profile">
            {this.isEmailLoggedIn("profile")}
          </Route>
          <Route component={Error} />
          
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
