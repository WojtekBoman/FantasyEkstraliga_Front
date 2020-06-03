import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import LetterAvatar from './LetterAvatar'
import ReactCountryFlag from "react-country-flag"
import { Link } from "react-router-dom";
import "../styles/rider.css"

const getCountryCode = (country) => {
    switch (country) {
      case "Polska":
        return "PL"
      case "Dania":
        return "DK"
      case "Australia":
        return "AU"
      case "W.Brytania":
        return "GB"
      case "Szwecja":
        return "SE"
      case "Czechy":
        return "CZ"
      case "Rosja":
        return "RU"
      case "Słowacja":
        return "SK"
      case "Słowenia":
        return "SI"
      case "Niemcy":
        return "DE"
      default:
        return 'NP';
    }
  }

const Rider = (props) => {

    

    return (
        
    <div className={props.colSize} style={props.styleToPass}> 
    
    <Link to={props.link}><FontAwesomeIcon className="rider" size={props.iconSize} icon={faUser}/></Link>
    {props.riderId > 0 && (<ReactCountryFlag id="flag" countryCode={getCountryCode(props.nationality)} svg style={{ width: '2.5em', height: '2.5em', }} title="US" />)}
    <br></br>
    <div style={{display:"inline-flex"}} >
    <h5>{props.name}</h5>{(props.role === "VICE" || props.role === "CAPTAIN") && (<LetterAvatar letter={props.role[0]}></LetterAvatar>)}
    </div>
    </div>
    )

}

export default Rider;