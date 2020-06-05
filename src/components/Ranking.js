import React from 'react'
import authHeader from '../services/auth-header'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'

class Ranking extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading:false,
            message:'',
            users:[]
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

    render() {

        console.log(this.state.users)

        return(
            <div className="container bg-light border rounded border-dark" id="ranking">
                <header>
                    <h3>Ranking graczy</h3>
                    <hr className="my-4"></hr>
                </header>

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