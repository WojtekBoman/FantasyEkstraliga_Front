import React from 'react';
import authHeader from "../services/auth-header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class TeamBuilder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            team:null
        }
    }

    async componentDidMount() {

        let url = "http://localhost:8080/teamAthletes";

        let options = {
          method: 'GET',
          headers : authHeader()
          };


          fetch(url,options).then(res => res.text()).then(res => console.log(res));
        
    }

    render() {
        return(
        <div>
            <div className="row">
                <div className="container bg-light border rounded border-dark col-xl-6" id="teamcreatorForm">
                        <header>
                            <h2>Potężne byki</h2>
                            <hr className="my-4"/>
                           
                        </header>
                        <button className="btn btn-primary btn-block">Kup zawodnika</button>
                        <br/>
                        <div className="row text-center">
                            <div class="alert alert-primary col-md-4">
                                <h4>Punkty : <span>30</span></h4>
                            </div>
                            <div class="alert alert-primary col-md-4 offset-md-4">
                            <h4>Kolejka : <span>2</span></h4>
                            </div>
                        </div>
                        <br/>
                        <div className="row text-center">

                        <div className="col-md-6">
                                <FontAwesomeIcon size="4x" icon={faUser}/>
                                <h5>Chris Holder</h5>
                                </div>
                                <div className="col-md-6">
                                <FontAwesomeIcon size="4x" icon={faUser}/>
                                <h5>Chris Holder</h5>
                                </div>

                                <div class="w-100" style={{margin:'20px'}}></div>

                                <div className="col-md-6">
                                <FontAwesomeIcon size="4x" icon={faUser}/>
                                <h5>Chris Holder</h5>
                                </div>
                                <div className="col-md-6">
                                <FontAwesomeIcon size="4x" icon={faUser}/>
                                <h5>Chris Holder</h5>
                                </div>
                               
                                <div class="w-100" style={{margin:'20px'}}></div>

                                <div className="col-md-4">
                                <FontAwesomeIcon size="4x" icon={faUser}/>
                                <h5>Chris Holder</h5>
                                </div>
                                <div className="col-md-4">
                                <FontAwesomeIcon size="4x" icon={faUser}/>
                                <h5>Chris Holder</h5>
                                </div>
                                <div className="col-md-4">
                                <FontAwesomeIcon size="4x" icon={faUser}/>
                                <h5>Chris Holder</h5>
                                </div>
                        </div>
                </div>

                <div className="container bg-light border rounded border-dark col-xl-3" id="teamcreatorForm">
                        <header>
                            <h2>Rezerwowi</h2>
                            <hr className="my-4"/>
                            <div className="row text-center">
                                <div className="col-sm-12" style={{margin:'15% 0'}}>
                                <FontAwesomeIcon size="6x" icon={faUser}/>
                                <h5>Chris Holder</h5>
                                </div>
                                <div className="col-sm-12" style={{margin:'15% 0'}}>
                                <FontAwesomeIcon size="6x" icon={faUser}/>
                                <h5>Chris Holder</h5>
                                </div>
                            </div>
                        </header>
                </div>
            </div>
            <div className="container bg-light border rounded border-dark" id="teamcreatorForm">
            <header>
                    <h2>Statystki</h2>
                            <hr className="my-4"/>
                    </header>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <FontAwesomeIcon size="6x" icon={faGlobeEurope}/>
                            <h3>Ranking : <span>1</span></h3>
                            </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon size="6x" icon={faStar}/>
                            <h3>Punkty : <span>10000</span></h3>
                            </div>
                        <div className="col-md-4">
                            <FontAwesomeIcon size="6x" icon={faMoneyBillWave}/>
                            <h3>Budżet : <span>10000</span></h3>
                            </div>
                    </div>
                
            </div>
        </div>
        )
    }


}

export default TeamBuilder;