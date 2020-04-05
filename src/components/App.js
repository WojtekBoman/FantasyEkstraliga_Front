import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './NavigationBar'
import Home from './Home'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Footer from './Footer'
import '../styles/app.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <Router>
            <div>
                <NavigationBar/>
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/logowanie" component={LoginForm}/>
                <Route path="/rejestracja" component={RegisterForm}/>
                </Switch>
                <Footer/>
            </div>
            </Router>
        )
    }
}

export default App;