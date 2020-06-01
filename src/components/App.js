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
import TeamCreator from './TeamCreator'
import MatchWindow from './MatchWindow'
import Settings from './Settings'
import DeleteAccountForm from './DeleteAccountForm'
import ChangePasswordForm from './ChangePasswordForm'


//IMPORT CSS
import '../styles/app.css'
import '../styles/match.css'
import '../styles/menu.css'



class App extends React.Component {

    render() {

        console.log(JSON.parse(localStorage.getItem('player')));

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
                <Route path="/mecze" component={MatchWindow}/>
                <Route path="/riderDetails/:id" component={RiderDetails}/>
                <Route path="/riderDetails/-1" component={TransferMarket}/>
                <Route path="/transferMarket" component={TransferMarket}/>
                <Route path="/teamBuilderTable" component={TeamBuilderTable}/>
                <Route path="/teamCreator" component={TeamCreator}/>
                <Route path="/settings" component={Settings} />
                <Route path="/deleteAccount" component={DeleteAccountForm} />
                <Route path="/changePassword" component={ChangePasswordForm}/>
                </Switch>
                <Footer/>
            </div>
            </Router>
        )
    }
}

export default App;