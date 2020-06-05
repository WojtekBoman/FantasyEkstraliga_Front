import React from 'react'
import authHeader from '../services/auth-header'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { Tab, Nav, Col, Row } from 'react-bootstrap'
import '../styles/squadTable.css';

class StatsCurrent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            message: '',
            riders: []
        }
    }

    render() {

        console.log("riders", this.props.riders)

        return (



            <div className="mt-5">

                <table className="table ">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" className="text-center"> Msc</th>
                            <th scope="col"> Zawodnik</th>
                            <th scope='col'> Klub</th>
                            <th scope="col"> Kraj</th>
                            <th scope="col"> Kategoria</th>
                            <th scope="col"> Wartość</th>
                            <th scope="col"> Średnia</th>
                            <th scope="col"> Biegi</th>
                            <th scope="col"> Punkty</th>
                            <th scope="col"> Bonusy</th>
                            <th scope="col"> Suma</th>
                        </tr>
                    </thead>

                    <tbody>

                        {this.props.riders.map(rider => <tr>
                            <td className="align-middle">{rider.ranking} </td>
                            <td className="align-middle"><span id="names">{rider.athlete.firstName} {rider.athlete.surname}</span></td>
                            <td className="align-middle font-weight-light">{rider.club}</td>
                            <td className="align-middle">{rider.athlete.nationality}</td>
                            <td className="align-middle">{rider.athlete.category}</td>
                            <td className="align-middle">{rider.athlete.value} mln</td>
                            <td className="align-middle">{parseFloat(rider.average).toFixed(3)}</td>
                            <td className="align-middle">{rider.heats}</td>
                            <td className="align-middle">{rider.points}</td>
                            <td className="align-middle">{rider.bonuses}</td>
                            <td className="align-middle">{rider.overall}</td>





                        </tr>)}

                    </tbody>
                </table>
            </div>




        )
    }
}

export default StatsCurrent;