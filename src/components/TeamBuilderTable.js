import React from 'react';
import authHeader from '../services/auth-header'
import authService from '../services/auth-service'
import { Link } from "react-router-dom";

import TransferMarketListModal from './TransferMarketListModal';

class TeamBuilderTable extends React.Component {

  constructor(props) {
    super(props);
    this.sellAthlete = this.sellAthlete.bind(this);

    this.state = {
      athletes: null,
      loading: true,
      message: null,
      team: null,
      addModalShow: false,
      isSold: true,
    }
  }

  sellAthlete(athleteId) {


    this.setState({ isSold: false });

    let url = `http://localhost:8080/sell?athleteId=${athleteId}`;

    let options = {
      method: 'POST',
      headers: authHeader()
    };

    fetch(url, options).then(res => res.text()).then(res => this.setState({ message: res, loading: false})).then(() => this.getTeam());
    this.setState({ addModalShow: true });
  }

  async componentDidMount() {
    this.getTeam();

  }

  async getTeam() {
    this.setState({ team: authService.getCurrentUser().team })

    console.log("Team", this.state.team);

    let url = "http://localhost:8080/teamAthletes";

    let options = {
      method: 'GET',
      headers: authHeader()
    };


    fetch(url, options).then(res => res.json()).then((res) => this.setState({ athletes: res.athletes, loading: false, isSold:true  }));
  }

  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    console.log("Athletes", this.state.athletes);

    if (this.state.loading) {
      return (<div className="text-center container bg-light border rounded d-flex align-items-center justify-content-center flex-column" style={{ height: 480 + 'px' }}>
        <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
      </div>)
    } else
    return (

      <div className="container bg-light border rounded border-dark" id="tableWindow">
        <header>
          <h2>Twoja drużyna</h2>
          {/* {this.state.loading && (<div className="d-inline">
            <p>Trwa ładowanie ...</p>
            <span className="spinner-border spinner-border-sm"></span>

          </div>
          )} */}

          {/* {this.state.message && (<p className>{this.state.message}</p>)} */}
          <hr className="my-4" />

        </header>

        
          <div id="twoTablessContainer">
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th scope='col'>Id</th>
                  <th scope="col">Kraj</th>
                  <th scope="col">Zawodnik</th>
                  <th scope="col">Wartość</th>
                  <th scope="col">Klub</th>
                  <th scope="col">Punkty</th>
                  <th scope="col">Akcje</th>
                  <th scope="col">Info</th>
                </tr>
              </thead>

              <tbody>
                {this.state.athletes && (this.state.athletes.map(athlete => {
                  return (<tr>
                    <th scope="row">{athlete.athleteId}</th>
                    <td>{athlete.nationality}</td>
                    <td>{athlete.firstName} {athlete.surname}</td>
                    <td>{athlete.value}</td>
                    <td>{athlete.club}</td>
                    <td>{athlete.points}</td>
                    <td><button onClick={() => this.sellAthlete(athlete.athleteId)} className="btn btn-primary">Sprzedaj</button></td>
                    <td><Link to={"riderDetails/" + athlete.athleteId}><button className="btn btn-primary">Więcej</button></Link></td>
                  </tr>)
                }))}
              </tbody>

            </table>

            <h3>Rezerwowi</h3>

            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th scope='col'>Id</th>
                  <th scope="col">Kraj</th>
                  <th scope="col">Zawodnik</th>
                  <th scope="col">Wartość</th>
                  <th scope="col">Klub</th>
                  <th scope="col">Punkty</th>
                  <th scope="col">Akcje</th>
                  <th scope="col">Info</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>

        {this.state.isSold? <TransferMarketListModal message={this.state.message} show={this.state.addModalShow} onHide={addModalClose} /> : <div></div>}
      </div>
    )
  }
}

export default TeamBuilderTable;