import React from 'react';
import authHeader from "../services/auth-header"
import authService from "../services/auth-service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import Rider from './Rider'
import RiderGrid from './RiderGrid'
import { faUser } from '@fortawesome/free-solid-svg-icons'

class TeamBuilder extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            team:null,
            athletes:null,
            firstRowData:[],
            secondRowData:[],
            thirdRowData:[],
            substituteRiders:[]
        }
    }

    async componentDidMount() {
        this.setState({team: authService.getCurrentUser().team})
  
        console.log("Team",this.state.team);
  
        let url = "http://localhost:8080/teamAthletes";
  
        let options = {
          method: 'GET',
          headers : authHeader()
          };
  
  
          fetch(url,options).then(res => res.json()).then((res) => this.setState({athletes: res.athletes,loading:false})).then(() => this.renderGrid());
         
         
    }

    renderGrid() {
        
        const unknownRider = {
            athleteId: -1,
            category: "obcokrajowiec",
            club: -1,
            firstName: "Unknown",
            nationality: "",
            performances: [],
            points: 0,
            surname: "Rider",
            teamRole: null,
            teams: [],
            value: 0,
        }

        let dataToSplit = [];

        if(this.state.athletes != null) dataToSplit = [...this.state.athletes];

        let len = 9;
        if(typeof(this.state.athletes.length) != undefined) len = 9 - this.state.athletes.length

        for(let i = 0; i < len; i++) {
            dataToSplit = [...dataToSplit,unknownRider]
        }

        for(let i = 0; i < 2; i++) {
            this.setState({firstRowData:[...this.state.firstRowData,dataToSplit[i]]});
        }

        for(let i = 2; i < 4; i++) {
            this.setState({secondRowData:[...this.state.secondRowData,dataToSplit[i]]});
        }

        for(let i = 4; i < 7; i++) {
            this.setState({thirdRowData:[...this.state.thirdRowData,dataToSplit[i]]});
        }

        for(let i = 7; i < 10; i++) {
            this.setState({substituteRiders:[...this.state.substituteRiders,dataToSplit[i]]});
        }
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
                        

                        {this.state.firstRowData ? <RiderGrid 
                        iconSize="4x" colSize="col-md-6" riders={this.state.firstRowData} styleToPass={{marginTop:'0'}}
                        /> : <div>Brak zawodnikow</div>}

                      

                        {this.state.secondRowData ? <RiderGrid 
                        iconSize="4x" colSize="col-md-6" riders={this.state.secondRowData} styleToPass={{marginTop:'0'}}
                        /> : <div>Brak zawodnikow</div>}

                        {this.state.thirdRowData ? <RiderGrid 
                        iconSize="4x" colSize="col-md-4" riders={this.state.thirdRowData} styleToPass={{marginTop:'0'}}
                        /> : <div>Brak zawodnikow</div>}


                    
                </div>

                <div className="container bg-light border rounded border-dark col-xl-3" id="teamcreatorForm">
                        <header>
                            <h2>Rezerwowi</h2>
                            <hr className="my-4"/>
                            
                            {this.state.substituteRiders ? <RiderGrid styleToPass={{margin:'5% 0'}} iconSize="5x" colSize="col-sm-12" riders={this.state.substituteRiders}/> : <div>Brak zawodnikow</div>}
                                
                    
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