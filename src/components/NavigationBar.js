import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Nav} from 'react-bootstrap'
import AuthService from "../services/auth-service"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import history from '../history';

class NavigationBar extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {
            currentUser: undefined,
            showUserBoard: false,
            showAdminBoard: false
        }
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if(user) {
            this.setState({
                currentUser: AuthService.getCurrentUser(),
                showUserBoard: user.roles.includes("ROLE_USER"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN")
            })

        }
    }

    logout(){
        AuthService.logout();
        history.push('/logowanie');
    }

    render() {

        const {currentUser,showUserBoard,showAdminBoard} = this.state
        console.log("User :",currentUser)
        console.log("showUserBoard :",showUserBoard)

        return (
            <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top" collapseOnSelect >
                <Navbar.Brand href="/">Fantasy ekstraliga</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
                {currentUser ? (<Nav className="ml-auto">
                <Link to="/mecze" className="nav-link" >
                        <li className="nav-item">Mecze</li>
                    </Link>
                    {this.state.currentUser.team && (
                        <li class="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Skład</a>
                        <div class="dropdown-menu">
                              <Link to={"/teamBuilderTable"} className="dropdown-item">Tabela</Link>
                              <Link to={"/teamBuilder"} className="dropdown-item">Widok podstawowy</Link>
                              <Link to={"/teamCreator"} className="dropdown-item">Stwórz drużynę</Link>
                          </div>
                        </li>
                    )}
                {this.state.currentUser.team && (
                    <Link to="/transferMarket" className="nav-link" >
                        <li className="nav-item">Transfery</li>
                    </Link>
                )}
                <Link to="/ranking" className="nav-link" >
                        <li className="nav-item">Ranking</li>
                    </Link>
                    <Link to="/stats" className="nav-link" >
                        <li className="nav-item">Statystyki</li>
                    </Link>
                    <li class="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">{currentUser.login}</a>
                  <div class="dropdown-menu">
                        <Link to={"/profile"} className="dropdown-item">Profil</Link>
                        <Link to={"/settings"} className="dropdown-item">Ustawienia</Link>
                    </div>
                  </li>
                        <li className="nav-item">
                            <a href="/logowanie" className="nav-link" onClick={this.logout}>
                                Wyloguj
                        </a></li>
                    </Nav>)
                     : (<Nav className="ml-auto">
                    <Link to="/logowanie" className="nav-link" >
                        <li className="nav-item">Logowanie</li>
                    </Link>
                    <Link to="/rejestracja" className="nav-link" >
                        <li className="nav-item">Rejestracja</li>
                    </Link>
                    </Nav>)}

                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;