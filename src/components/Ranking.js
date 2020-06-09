import React from 'react'
import authHeader from '../services/auth-header'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import AuthService from "../services/auth-service"

class Ranking extends React.Component {

    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.onChangeSearchData = this.onChangeSearchData.bind(this);
        this.onChangeTypeSearch = this.onChangeTypeSearch.bind(this);

        this.state = {
            loading:false,
            message:'',
            users:[],
            searchData:'',
            typeSearch:'TeamName',
            foundTeamData:null,
            loadingFinding:false
        }
    }

    componentDidMount() {
        this.setState({loading:true});
        let url = "https://fantasy-ekstraliga.herokuapp.com/ranking";
  
        let options = {
          method: 'GET',
          headers : authHeader()
          };

          fetch(url,options).then(res => res.json()).then(res => this.setState({users:res,loading:false}));
    }

    onChangeSearchData(e) {
        this.setState({searchData:e.target.value})
    }

    onChangeTypeSearch(e) {
        this.setState({typeSearch:e.target.value})
    }

    handleSearch(e) {
        e.preventDefault();

        this.setState({loadingFinding:true,findErrorMessage:null,foundTeamData:null});

        const parameter = this.state.typeSearch.charAt(0).toLocaleLowerCase() + this.state.typeSearch.slice(1);
        const {typeSearch} = this.state;

        let url = `https://fantasy-ekstraliga.herokuapp.com/getTeamBy${typeSearch}?${parameter}=${this.state.searchData}`;

        let options = {
            method: 'GET',
            headers : authHeader()
            };
  
            fetch(url,options).then(res => res.json()).then(res => this.setState({loadingFinding:false,foundTeamData:res,findErrorMessage:null}))
            .catch(() => this.setState({loadingFinding:false,foundTeamData:null,findErrorMessage:"Nie znaleziono drużyny, spróbuj ponownie !"}));

    }

    render() {

        console.log(this.state.foundTeamData)

        if(!AuthService.getCurrentUser()) return (
            <div className="block-window container bg-light border rounded border-dark shadow-container text-center">
                    <h3>Ekran tylko dla zalogowanych użytkowników</h3>
                    <Link to="/logowanie"><button type="button" style={{width:"50%"}} className="btn btn-dark buttons">Przejdź do ekranu logowania</button></Link>
            </div>
        )

        return(
            <div className="shadow-container container bg-light border rounded border-dark table-responsive" id="ranking">
                <header>
                    <h1>Ranking graczy</h1>
                    <hr className="my-4"></hr>
                </header>

                {/* FINDING TEAM FORM */}

                <Form onSubmit={this.handleSearch} ref={c => this.form = c}>
                    <header>
                    <h4>Wyszukaj zespół</h4>
                    <hr className="my-4"></hr>
                    </header>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Opcje wyszukiwania</label>
                        <select onChange={this.onChangeTypeSearch} value={this.state.typeSearch} class="form-control" id="exampleFormControlSelect1">
                        <option value="User">Nazwa gracza</option>
                        <option value="TeamName">Nazwa drużyny</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Wprowadź dane</label>
                        <Input onChange={this.onChangeSearchData} value={this.state.onChangeSearchData} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Wprowadź dane"/>
                    </div>
                    <button
                className="btn btn-block btn-dark"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Szukaj</span>
              </button>

                {this.state.message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {this.state.message}
                    </div>
                  </div>
                )}
                <CheckButton
                  style={{display:"none"}}
                  ref={c => {this.checkBtn = c;}}
                  />
                </Form>
                <hr className="my-4"></hr>
                
                {/* FINDING TEAM RESULTS */}

                <div>
                {this.state.loadingFinding && (
                    <div className="text-center container bg-light d-flex align-items-center justify-content-center flex-column">
                    <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
                  </div>
                )}

                {this.state.findErrorMessage && (
                    <div className="text-center alert alert-dark" role="alert"><h4>{this.state.findErrorMessage}</h4></div>
                )}

                {this.state.foundTeamData && (
                    <div >
                    <header>
                        <h3>Znaleziono drużynę - {this.state.foundTeamData.team.name}</h3>
                        <hr className="my-4"></hr>
                    </header>
                    
                    <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col"><FontAwesomeIcon size="2x" icon={faCrown}/> Pozycja</th>
                        <th scope="col"><FontAwesomeIcon size="2x" icon={faMotorcycle}/> Drużyna</th>
                        <th scope='col'><FontAwesomeIcon size="2x" icon={faUser}/> Użytkownik</th>
                        <th scope="col"><FontAwesomeIcon size="2x" icon={faStar}/> Punkty</th>
                    </tr>
                    </thead>
                    <tbody>
                    <th scope="row">{this.state.foundTeamData.ranking}</th>
                            <td>{this.state.foundTeamData.team.name}</td>
                            <td>{this.state.foundTeamData.team.user}</td>
                            <td>{this.state.foundTeamData.team.points}</td>
                    </tbody>
                    </table>
                    
                    <hr className="my-4"></hr>
                    </div>
                )}
                
                </div>

                {/* RANKING TABLE */}

                {!this.state.loading ? (
                    <div>
                    <header>
                        <h2>Tabela rankingowa</h2>
                        <hr className="my-4"></hr>
                    </header>
                    <table className="table table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col"><FontAwesomeIcon size="2x" icon={faCrown}/> Pozycja</th>
                        <th scope="col"><FontAwesomeIcon size="2x" icon={faMotorcycle}/> Drużyna</th>
                        <th scope='col'><FontAwesomeIcon size="2x" icon={faUser}/> Użytkownik</th>
                        <th scope="col"><FontAwesomeIcon size="2x" icon={faStar}/> Punkty</th>
                    </tr>
                    </thead>

                    <tbody>
                        
                        {this.state.users.map(user => <tr>
                            <th scope="row">{user.ranking}</th>
                            <td>{user.team.name}</td>
                            <td>{user.team.user}</td>
                            <td>{user.team.points}</td>
                        </tr>)}
                        
                    </tbody>
                    </table>
                    </div>
                )
                :
                (
                    <div className="text-center container bg-light d-flex align-items-center justify-content-center flex-column">
                    <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
                  </div>
                )
            }

                
            </div>
        )
    } 
}

export default Ranking;