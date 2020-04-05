import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Nav} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top">
                <Navbar.Brand href="/">Fantasy ekstraliga</Navbar.Brand>
                <Nav className="ml-auto">
                    <Link to="/logowanie" className="nav-link" >
                        <li className="nav-item">Logowanie</li>
                    </Link>
                    <Link to="/rejestracja" className="nav-link" >
                        <li className="nav-item">Rejestracja</li>
                    </Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar;