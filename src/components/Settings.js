import React from 'react'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCog } from '@fortawesome/free-solid-svg-icons'

const Settings = (props) => {
    
    return(
        <div className="container bg-light border rounded border-dark" id="settings">
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