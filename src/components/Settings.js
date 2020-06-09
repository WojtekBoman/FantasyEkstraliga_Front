import React from 'react'
import {Link} from "react-router-dom";
import AuthService from "../services/auth-service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'

const Settings = (props) => {

    if(!AuthService.getCurrentUser()) return (
        <div className="block-window container bg-light border rounded border-dark shadow-container text-center">
                <h3>Ekran tylko dla zalogowanych użytkowników</h3>
                <Link to="/logowanie"><button type="button" style={{width:"50%"}} className="btn btn-dark buttons">Przejdź do ekranu logowania</button></Link>
        </div>
    )
    
    return(
        <div className="container bg-light border rounded border-dark shadow-container" id="settings">
            <header className="text-center">
            <h3>Ustawienia</h3>
            <FontAwesomeIcon size="5x" icon={faUserCog}/>
            <hr className="my-4"></hr>
            </header>
            <Link className="link-button" to="/changePassword"><button className="btn btn-dark btn-block">Zmień hasło</button></Link>
            <Link className="link-button" to="/deleteAccount"><button  className="btn btn-dark btn-block">Usuń konto</button></Link>
        </div>
    )
}

export default Settings;