import React from 'react';
import { Button } from 'react-bootstrap';
import authHeader from '../services/auth-header';
import authService from '../services/auth-service';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import TransferMarketListModal from './TransferMarketListModal';
import ChangeRoleModal from './ChangeRoleModal';
import LetterAvatar from './LetterAvatar';
import '../styles/squadTable.css';
import ReactCountryFlag from "react-country-flag"
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'


class TeamBuilderTable extends React.Component {

  constructor(props) {
    super(props);
    this.sellAthlete = this.sellAthlete.bind(this);
    this.changeRole = this.changeRole.bind(this);
    this.changeSub = this.changeSub.bind(this);
    this.getTeam = this.getTeam.bind(this);

    this.state = {
      athletes: [],
      loading: true,
      message: null,
      team: null,
      addModalShow: false,
      addRoleModalShow: false,
      isSold: true,
      athleteToChangeRole: null,
      changingRole: false,
      budget: -1,
      teamName: "",
      points: 0,
      gameWeekPoints: -1,
      gameWeek: -1,
      userRanking: 0,
      response: null,
      clubs: null,
      selected: 0,

    }
  }

  async componentDidMount() {
    this.getTeam();

  }

  changeRole(athleteId, role) {

    this.setState({ changingRole: true });
    let url = `https://fantasy-ekstraliga.herokuapp.com/setRole?athleteId=${athleteId}&role=${role}`;

    let options = {
      method: 'POST',
      headers: authHeader()
    };

    fetch(url, options).then(res => res.text())
      .then(res => this.setState({ message: res, loading: false }))
      .then(() => this.getTeam())
      .then(res => this.setState({ addRoleModalShow: false, addModalShow: true }));
  }

  changeSub(regularId, subId) {

    this.setState({ changingRole: true });
    let url = `https://fantasy-ekstraliga.herokuapp.com/setSub?regularId=${regularId}&subId=${subId}`;

    let options = {
      method: 'POST',
      headers: authHeader()
    };

    fetch(url, options).then(res => res.text()).then()
      .then(res => this.setState({ message: res, loading: false }))
      .then(() => this.getTeam())
      .then(res => this.setState({ addRoleModalShow: false, addModalShow: true }));
  }

  sellAthlete(athleteId) {

    this.setState({ isSold: false });
    this.setState({ changingRole: true });
    let url = `https://fantasy-ekstraliga.herokuapp.com/sell?athleteId=${athleteId}`;

    let options = {
      method: 'POST',
      headers: authHeader()
    };

    fetch(url, options).then(res => res.text())
      .then(res => this.setState({ message: res, loading: false }))
      .then(() => this.getTeam());
    this.setState({ addModalShow: true });

  }

  async getTeam() {

    this.setState({ team: authService.getCurrentUser().team })



    let url = "https://fantasy-ekstraliga.herokuapp.com/teamAthletes";

    let options = {
      method: 'GET',
      headers: authHeader()
    };

    fetch(url, options).then(res => res.json())
      .then((res) => this.setState({
        response: res, athletes: res.team.athletes, budget: res.team.budget, teamName: res.team.name, points: res.team.points,
        loading: false, isSold: true, addRoleModalShow: false, selected: res.team.athletes.length, clubs: res.clubs, userRanking:res.ranking,
        gameWeek:res.matchWeek,gameWeekPoints:res.points
      }));

    console.log("Riders", this.state.athletes);

  }

  showRole(athlete) {
    if (athlete.teamRole === null) return "Brak roli";
    else return athlete.teamRole;

  }

  getClubName(club) {
    switch (club) {
      case 1:
        return "Unia Leszno"
      case 2:
        return "Stal Gorzów"
      case 3:
        return "Sparta Wrocław"
      case 4:
        return "Włókniarz Częstochowa"
      case 5:
        return "Apator Toruń"
      case 6:
        return "GKM Grudziądz"
      case 7:
        return "Falubaz Zielona Góra"
      case 8:
        return "Motor Lublin"
      default:
        return 'Nie załadowano...';
    }
  }

  getCountryCode(country) {
    switch (country) {
      case "Polska":
        return "PL"
      case "Dania":
        return "DK"
      case "Australia":
        return "AU"
      case "W.Brytania":
        return "GB"
      case "Szwecja":
        return "SE"
      case "Czechy":
        return "CZ"
      case "Rosja":
        return "RU"
      case "Słowacja":
        return "SK"
      case "Słowenia":
        return "SI"
      case "Niemcy":
        return "DE"
      default:
        return 'NP';
    }
  }


  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    let addRoleModalClose = () => this.setState({ addRoleModalShow: false });
    console.log("Response", this.state.response);
    console.log("Athletes", this.state.athletes);
    let athletes = this.state.athletes;
    let firstTeam = null;
    let reserve = null;
    let reserveOrder = 1;

    if (athletes !== null) firstTeam = athletes.filter((item) => { return (this.showRole(item) !== "SUB1" && this.showRole(item) !== "SUB2" && this.showRole(item) !== "SUB3") });
    if (athletes !== null) reserve = athletes.filter((item) => { return (this.showRole(item) === "SUB1" || this.showRole(item) === "SUB2" || this.showRole(item) === "SUB3") });
    if (reserve !== null) reserve.sort(function (a, b) { let x = a.teamRole.toLowerCase(); let y = b.teamRole.toLowerCase(); return x < y ? -1 : x > y ? 1 : 0; });
    console.log("Reserve", reserve);

    if (this.state.loading) {
      return (<div className="shadow-container text-center container bg-light border rounded d-flex align-items-center justify-content-center flex-column" style={{ height: 480 + 'px',margin:"150px auto" }}>
        <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
      </div>)
    } else
      return (

        <div className="container bg-light border rounded border-dark shadow-container" id="tableWindow">

          <header>
            <div id="nameLine" className="row">
              <div className=" d-flex align-items-center"> <h1> {this.state.teamName}</h1></div>
            </div>


            <hr className="my-4" />

            <div id="mainLine" className="row">
              <div className="row text-center col-md-12">
                <div className="col-md-4">
                  <FontAwesomeIcon size="4x" icon={faGlobeEurope} />
                  <h4>Ranking: <span>{this.state.userRanking}</span></h4>
                </div>
                <div className="col-md-4">
                  <FontAwesomeIcon size="4x" icon={faStar} />
                  <h4>Punkty: <span>{this.state.points}</span></h4>
                </div>
                <div className="col-md-4">
                  <FontAwesomeIcon size="4x" icon={faMoneyBillWave} />
                  <h4>Budżet: <span>{parseFloat(this.state.budget).toFixed(2)} mln</span></h4>
                </div>
              </div>

            </div>

            <hr className="my-4" />
            <div className="row  text-center m-1 mt-4 mb-4">

              <div class=" col-md-4 alert alert-primary">
                <h5>Kolejka {this.state.gameWeek}: <span>{this.state.gameWeekPoints} pkt</span></h5>
              </div>

              <div class=" col-md-4 mt-1">
                <Link style={{textDecoration:"none"}} to="/transferMarket"><button className="btn btn-primary btn-block btn-lg mb-4">Kup zawodnika
                   </button></Link>
              </div>
              <div class=" col-md-4 alert alert-primary ">
                <h5>Wybrano: <span>{this.state.selected}/10</span></h5>
              </div>
            </div>

          
            {/* <Link to="/transferMarket"><button className="btn btn-primary btn-block">Kup zawodnika</button></Link> */}
            <br />
          </header>

          <div id="tablesAndStats" className="">


            <div id="twoTablessContainer" className="table-responsive"> 

              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope='col'>Info</th>
                    <th scope="col" >Zawodnik</th>
                    <th scope="col">Klub</th>
                    <th scope="col">Wartość</th>
                    <th className="text-center" scope="col">Punkty</th>
                    <th className="text-center" scope="col">Więcej</th>
                    {/* <th scope="col">Rola</th> */}
                  </tr>
                </thead>

                <tbody>
                  {firstTeam && (firstTeam.map(athlete => {
                    return (
                      <tr key={athlete.athleteId}>
                        <td className="align-middle"><Link to={"riderDetails/" + athlete.athleteId} >
                          <FontAwesomeIcon id="infoIcon" color="black" size="2x" icon={faInfoCircle} /></Link>
                        </td>

                        <td className="align-middle">
                          <div className="row ">

                            <div id="flagDiv" className="col-sm-2 d-flex justify-content-center">
                              <ReactCountryFlag id="flag" countryCode={this.getCountryCode(athlete.nationality)} svg style={{ width: '2.5em', height: '2.5em', }} title="US" />
                            </div>

                            <div className=" col-sm-10  ">
                              <div className=" d-flex align-items-center align-middle"> <span id="names" >{athlete.firstName} {athlete.surname}</span>
                                {this.showRole(athlete) === "CAPTAIN" && <LetterAvatar letter={"C"} > </LetterAvatar>}{this.showRole(athlete) === "VICE" && <LetterAvatar letter={"V"} > </LetterAvatar>}
                              </div>

                              <div className=" d-flex justify-content-start small">{athlete.category}</div>
                            </div>

                          </div>
                        </td>

                        {/* <td className="align-middle font-weight-light">{this.getClubName(athlete.club)}</td> */}
                        <td className="align-middle font-weight-light">{this.state.clubs[`${athlete.club}`]}</td>
                        <td className="align-middle">{athlete.value} mln</td>
                        <td className="align-middle text-center ">{athlete.points}</td>
                        <td className="align-middle text-center"><button id={"moreButton"+athlete.athleteId} onClick={() => this.setState({ addRoleModalShow: true, athleteToChangeRole: athlete, changingRole: false })} className="btn btn-primary">Więcej</button></td>
                        {/* <td className="align-middle">{this.showRole(athlete)}</td> */}
                      </tr>)
                  }))}
                </tbody>
              </table>


              <h3>Rezerwowi</h3>
              <table className="table ">
                <thead className="thead-dark">
                  <tr>
                    <th className="text-center" scope='col'>Nr</th>
                    <th scope='col'>Info</th>

                    <th scope="col">Zawodnik</th>
                    <th scope="col">Klub</th>
                    <th scope="col">Wartość</th>
                    <th className="text-center" scope="col">Punkty</th>
                    <th className="text-center" scope="col">Więcej</th>
                    {/* <th scope="col">Rola</th> */}
                  </tr>
                </thead>

                <tbody>
                  {reserve && (reserve.map(athlete => {
                    return (
                      <tr key={athlete.athleteId}>
                        <td className="align-middle text-center"><strong >{reserveOrder === 3 ? "Junior" : reserveOrder++}</strong></td>
                        <td className="align-middle"><Link to={"riderDetails/" + athlete.athleteId} >
                          <FontAwesomeIcon id="infoIcon" color="black" size="2x" icon={faInfoCircle} /></Link>
                        </td>



                        <td className="align-middle">
                          <div className="row  align-middle">

                            <div id="flagDiv" className="col-sm-2 d-flex justify-content-center">
                              <ReactCountryFlag id="flag" countryCode={this.getCountryCode(athlete.nationality)} svg style={{ width: '2.5em', height: '2.5em', }} title="US" />
                            </div>

                            <div className="col-sm-10">
                              <div className=" d-flex align-items-center align-middle"><span id="names" >{athlete.firstName} {athlete.surname}</span>
                                {this.showRole(athlete) === "CAPTAIN" && <LetterAvatar letter={"C"} > </LetterAvatar>}{this.showRole(athlete) === "VICE" && <LetterAvatar letter={"V"} > </LetterAvatar>}
                              </div>
                              <div className=" d-flex justify-content-start small">{athlete.category}</div>
                            </div>

                          </div>
                        </td>

                        <td className="align-middle font-weight-light">{this.getClubName(athlete.club)}</td>
                        <td className="align-middle">{athlete.value} mln</td>
                        <td className="align-middle text-center ">{athlete.points}</td>
                        <td className="align-middle text-center"><button id={"moreButton"+athlete.athleteId} onClick={() => this.setState({ addRoleModalShow: true, athleteToChangeRole: athlete, changingRole: false })} className="btn btn-primary">Więcej</button></td>
                        {/* <td className="align-middle">{this.showRole(athlete)}</td> */}
                      </tr>)
                  }))}
                </tbody>
              </table>

            </div>

          </div>

          <ChangeRoleModal reserve={reserve} showRole={this.showRole} sell={this.sellAthlete} changingRole={this.state.changingRole}
            athlete={this.state.athleteToChangeRole} show={this.state.addRoleModalShow} onHide={addRoleModalClose} changeRole={this.changeRole} changeSub={this.changeSub}
            getTeam={this.getTeam} firstTeam={firstTeam} />

          {this.state.isSold && <TransferMarketListModal message={this.state.message} show={this.state.addModalShow} onHide={addModalClose} />}
        </div>
      )
  }
}

export default TeamBuilderTable;