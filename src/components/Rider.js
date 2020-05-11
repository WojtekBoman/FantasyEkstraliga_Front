import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Rider = (props) => {

    return (
        
    <div className={props.colSize} style={props.styleToPass}> 
    <FontAwesomeIcon size={props.iconSize} icon={faUser}/>
    <h5>{props.name}</h5>
    </div>
    )

}

export default Rider;