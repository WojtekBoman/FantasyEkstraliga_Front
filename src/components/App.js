//IMPORT REACT 
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//IMPORT COMPONENTS
import NavigationBar from './NavigationBar'
import Home from './Home'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import ProfileBoard from './ProfileBoard'
import TeamBuilder from './TeamBuilder'
import TeamBuilderTable from './TeamBuilderTable'
import RiderDetails from './RiderDetails'
import Footer from './Footer'
import TransferMarket from './TransferMarket';


//IMPORT CSS
import '../styles/app.css'



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
                <Route path="/profile" component={ProfileBoard}/>
                <Route path="/teamBuilder" component={TeamBuilder}/>
                <Route path="/riderDetails/:id" component={RiderDetails}/>
                <Route path="/transferMarket" component={TransferMarket}/>
                <Route path="/teamBuilderTable" component={TeamBuilderTable}/>
                </Switch>
                <Footer/>
            </div>
            </Router>
        )
    }
}

export default App;