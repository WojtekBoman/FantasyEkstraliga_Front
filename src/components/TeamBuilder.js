import React from 'react';
import authHeader from "../services/auth-header"
import authService from "../services/auth-service"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import Rider from './Rider'
import RiderGrid from './RiderGrid'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

class TeamBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.renderLoadingDiv = this.renderLoadingDiv.bind(this);

        this.state = {
            team:null,
            athletes:null,
            firstRowData:[],
            secondRowData:[],
            thirdRowData:[],
            substituteRidersData:[],
            loading:true,
            teamData:null
        }
    }

    renderLoadingDiv() {
        return (<div className="text-center container bg-light d-flex align-items-center justify-content-center flex-column">
        <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
      </div>);
    }

    async componentDidMount() {
        // this.setState({team: authService.getCurrentUser().team})
  
        // console.log("Team",this.state.team);
  
        let url = "https://fantasy-ekstraliga.herokuapp.com/teamAthletes";
  
        let options = {
          method: 'GET',
          headers : authHeader()
          };
  
  
          fetch(url,options).then(res => res.json())
          .then(res => {this.setState({teamData:res}); this.renderGrid() })
        //   .then((res) => this.setState({athletes: res.athletes,loading:false})).then(() => this.renderGrid());

        
         
    }

    renderGrid() {

        let unknownId = -1;
        
        const unknownRider = (id) => {
            return ({
            athleteId: id,
            category: "obcokrajowiec",
            club: -1,
            firstName: "Brak",
            nationality: "",
            performances: [],
            points: 0,
            surname: "zawodnika",
            teamRole: null,
            teams: [],
            value: 0
            })
        }

        

        console.log(this.state.teamData)

        let substituteRiders = this.state.teamData.team.athletes.filter(rider => rider.teamRole.slice(0,3) == "SUB");
        let regularRiders = this.state.teamData.team.athletes.filter(rider => rider.teamRole.slice(0,3) != "SUB")
        let firstRowData = [];
        let secondRowData = [];
        let thirdRowData = [];
        let substituteRidersData = []
        let dataToSplit = [];
        let substituteToSplit = []
        

        if(regularRiders != null) dataToSplit = [...regularRiders];
        if(substituteRiders != null) substituteToSplit = [...substituteRiders]



        let len = 7;
        if(typeof(regularRiders.length) != undefined) len = 7 - regularRiders.length

        for(let i = 0; i < len; i++) {
            dataToSplit = [...dataToSplit,unknownRider(unknownId--)]
        }

        let subLen = 3;
        if(typeof(substituteRiders.length) != undefined) subLen = 3 - substituteRiders.length

        for(let i = 0; i < subLen; i++) {
            substituteToSplit = [...substituteToSplit,unknownRider(unknownId--)]
        }


        for(let i = 0; i < 2; i++) {
      
            firstRowData = [...firstRowData,dataToSplit[i]]
        }

        for(let i = 2; i < 4; i++) {
            secondRowData = [...secondRowData,dataToSplit[i]]
        }

        for(let i = 4; i < 7; i++) {
            thirdRowData = [...thirdRowData,dataToSplit[i]]
        }

        for(let i = 0; i < 3; i++) {
            substituteRidersData = [...substituteRidersData,substituteToSplit[i]]
        }

        this.setState({substituteRidersData,thirdRowData,secondRowData,firstRowData,loading:false})


    } 

    

    render() {

        return(
        <div>
             

            <div className="row">
                <div className={"container bg-light border rounded border-dark col-md-6"} id="teamBuilderForm">

                {this.state.teamData ? (<div>
                        <header>
                            <h2>{this.state.teamData.team.name}</h2>
                            <hr className="my-4"/>
                           
                        </header>
                        <Link to="/transferMarket"><button className="btn btn-primary btn-block">Kup zawodnika</button></Link>
                   
                        <br></br>
                        {this.state.loading ? 
                        (<div className="text-center container bg-light d-flex align-items-center justify-content-center flex-column">
                        <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
                      </div>) : 
                        (
                        <div>
                        <RiderGrid iconSize="6x" colSize="col-md-6" riders={this.state.firstRowData} styleToPass={{margin:"5px auto"}}/>

                        <RiderGrid iconSize="6x" colSize="col-md-6" riders={this.state.secondRowData} styleToPass={{margin:"5px auto"}}/>
                        
                        <RiderGrid iconSize="6x" colSize="col-md-4" riders={this.state.thirdRowData} styleToPass={{margin:"10px auto"}}/>

                        <header>
                            <h3>Rezerwowi</h3>
                            <hr className="my-4"></hr>
                        </header>
                        <RiderGrid styleToPass={{margin:'10px auto'}} iconSize="6x" colSize="col-md-4" riders={this.state.substituteRidersData}/>
                        
                        </div>)}    
                        </div>) 
                    :
                    (<div className="text-center container bg-light d-flex align-items-center justify-content-center flex-column">
                    <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
                  </div>)    
                    }


                </div>

                <div className="container bg-light border rounded border-dark col-md-3" id="teamBuilderForm">
                <header>
                    <h2>Statystyki</h2>
                            <hr className="my-4"/>
                    </header>
                {this.state.teamData ? (<div>
                    <div className="row text-center">
                        <div className="col-sm-12" style={{margin:"7% auto"}}>
                            <FontAwesomeIcon size="6x" icon={faGlobeEurope}/>
                            <h3>Ranking : <span>{this.state.teamData.ranking}</span></h3>
                            </div>
                        <div className="col-sm-12" style={{margin:"7% auto"}}>
                            <FontAwesomeIcon size="6x" icon={faStar}/>
                            <h3>Punkty : <span>{this.state.teamData.team.points}</span></h3>
                            </div>
                        <div className="col-sm-12" style={{margin:"7% auto"}}>  
                            <FontAwesomeIcon size="6x" icon={faMoneyBillWave}/>
                            <h3>Budżet : <span>{parseFloat(this.state.teamData.team.budget).toFixed(3)} mln</span></h3>
                            </div>
                            <div className="col-sm-12" style={{margin:"7% auto"}}>  
                            <FontAwesomeIcon size="6x" icon={faMotorcycle}/>
                            <h3>Kolejka: <span>2</span></h3>
                            </div>
                    </div>
                
            </div>) : (<div className="text-center container bg-light d-flex align-items-center justify-content-center flex-column loading" >
                    <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
                  </div>)}
                
            </div>
            </div>
           
        </div>
        )
    }


}

export default TeamBuilder;