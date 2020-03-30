import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav} from 'react-bootstrap'

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">Fantasy ekstraliga</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link>Logowanie</Nav.Link>
                    <Nav.Link>Rejestracja</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar;