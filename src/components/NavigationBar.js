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
        AuthService.logout()
    }

    render() {

        const {currentUser,showUserBoard,showAdminBoard} = this.state
        console.log("User :",currentUser)
        console.log("showUserBoard :",showUserBoard)

        return (
            <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top">
                <Navbar.Brand href="/">Fantasy ekstraliga</Navbar.Brand>

                {currentUser ? (<Nav className="ml-auto">
                <Link to="/mecze" className="nav-link" >
                        <li className="nav-item">Mecze</li>
                    </Link>
                <li class="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Skład</a>
                  <div class="dropdown-menu">
                        <Link to={"/teamBuilderTable"} className="dropdown-item">Tabela</Link>
                        <Link to={"/teamBuilder"} className="dropdown-item">Widok podstawowy</Link>
                        <Link to={"/teamCreator"} className="dropdown-item">Stwórz drużynę</Link>
                    </div>
                  </li>
                  <Link to="/transferMarket" className="nav-link" >
                        <li className="nav-item">Transfery</li>
                    </Link>
                    <Link to="/profile" className="nav-link" >
                        <li className="nav-item">{currentUser.login}</li>
                    </Link>
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

                
            </Navbar>
        )
    }
}

export default NavigationBar;