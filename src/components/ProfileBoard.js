import React from 'react';
import ReactDOM from 'react-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import AuthService from "../services/auth-service"
import TeamCreator from "./TeamCreator"
import "../styles/profileInfo.css"

class ProfileBoard extends React.Component {

    constructor(props) {
        super(props);
        console.log("Current user :",AuthService.getCurrentUser());

        this.state = {
            currentUser: AuthService.getCurrentUser()
        }
    }

    render() {

        const {currentUser} = this.state;
        console.log(AuthService.getCurrentUser());

        return(
            
            <div>
            {currentUser.team ? (<div className="container bg-light border rounded border-dark shadow-container" id="profile-info">
                    <header>
                        <h3>Profil użytkownika <strong>{currentUser.login}</strong></h3>
                        <hr className="my-4"></hr>
                    </header>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <FontAwesomeIcon size="7x" icon={faUser}/>
                        </div>
                        <div className="col-md-8">
                        <p style={{fontSize:"20px"}}><strong>Imię:</strong> {currentUser.firstName}</p>
                        <p style={{fontSize:"20px"}}><strong>Nazwisko:</strong> {currentUser.surname}</p>
                        <p style={{fontSize:"20px"}}><strong>Email:</strong> {currentUser.email}</p>
                        </div>
                    </div>
                    <Link className="link-button" to="/transferMarket"><button className="btn btn-dark btn-block">Rynek transferowy</button></Link>
                    <Link className="link-button" to="/teamBuilder"><button className="btn btn-dark btn-block">Twoja drużyna</button></Link>
                    <Link className="link-button" to="/settings"><button className="btn btn-dark btn-block">Ustawienia</button></Link>
                </div>) : (<TeamCreator />) }
      </div>
        )
    }
}

export default ProfileBoard;