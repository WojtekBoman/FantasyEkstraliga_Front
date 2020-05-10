import React from 'react'
import Rider from './Rider'

const RiderGrid = (props) => {

    let counter = 0;

    return(
        <div className="text-center row">
            {props.riders.map(rider => {
                return <Rider styleToPass={props.styleToPass} iconSize={props.iconSize} colSize={props.colSize} name={rider.firstName + " " + rider.surname}/>
            })}
        </div>
    )

}

export default RiderGrid;