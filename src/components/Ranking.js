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
            typeSearch:'team'
        }
    }

    componentDidMount() {
        this.setState({loading:true});
        let url = "http://localhost:8080/ranking";
  
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

        console.log(this.state);
    }

    render() {

        console.log(this.state.users)

        return(
            <div className="container bg-light border rounded border-dark" id="ranking">
                <header>
                    <h1>Ranking graczy</h1>
                    <hr className="my-4"></hr>
                </header>
                <Form onSubmit={this.handleSearch} ref={c => this.form = c}>
                    <header>
                    <h4>Wyszukaj zespół</h4>
                    <hr className="my-4"></hr>
                    </header>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Opcje wyszukiwania</label>
                        <select onChange={this.onChangeTypeSearch} value={this.state.typeSearch} class="form-control" id="exampleFormControlSelect1">
                        <option value="user">Nazwa gracza</option>
                        <option value="team">Nazwa drużyny</option>
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
                
                {!this.state.loading ? (
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