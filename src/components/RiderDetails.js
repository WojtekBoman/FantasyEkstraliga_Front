import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import authHeader from '../services/auth-header'
import TeamBuilderTable from './TeamBuilderTable';
import TransferMarketListModal from './TransferMarketListModal';
import TransferMarketListClick from './TransferMarketListClick';
import { faUser } from '@fortawesome/free-solid-svg-icons'

import athleteService from '../services/athlete-service';

class RiderDetails extends React.Component {

  constructor(props) {
    super(props);
    this.getNextRival=this.getNextRival.bind(this);

    this.state = {
      isLoaded: false,
      isTransfered: true,
      data: [],
      team: null,
      teamAthletes: null,
      isInTeam: false,
      message: null,
      addModalShow: false,
    }
  }

  async componentDidMount() {
    const { data } = await athleteService.getAthleteById(this.props.match.params.id)
    this.setState({ data: data, })
    console.log(data);
    this.getTeam();

  }

  getTeam() {
    // this.setState({team: authService.getCurrentUser().team})
    //   console.log("Team",this.state.team);
    let url = "http://localhost:8080/teamAthletes";
    let options = {
      method: 'GET',
      headers: authHeader()
    };
    fetch(url, options).then(res => res.json()).then((res) => this.setState({ teamAthletes: res.athletes, isLoaded: true, isTransfered: true }));
  }

  sellAthlete(athleteId) {


    this.setState({ isTransfered: false });

    let url = `http://localhost:8080/sell?athleteId=${athleteId}`;

    let options = {
      method: 'POST',
      headers: authHeader()
    };

    fetch(url, options).then(res => res.text()).then(res => this.setState({ message: res})).then(() => this.getTeam());
    
   this.setState({ addModalShow: true });
  }

  buyAthlete(athleteId) {

    this.setState({ isTransfered: false });
    let url = `http://localhost:8080/buy?athleteId=${athleteId}`;

    let options = {
      method: 'POST',
      headers: authHeader()
    };


    fetch(url, options).then(res => res.text()).then(res => this.setState({ message: res})).then(() => this.getTeam());
   this.setState({ addModalShow: true });
  }

  getNextRival(data){
    if(data.nextMatch==null) return "Brak kolejnego meczu"
    else if(data.clubName===data.nextMatch.clubs[0].name)
    return data.nextMatch.clubs[1].name
    else return data.nextMatch.clubs[0].name
  }


  render() {
    let addModalClose = () => this.setState({ addModalShow: false });
    const isLoaded = this.state.isLoaded;
    const data = this.state.data;
    const teamAthletes = this.state.teamAthletes;
    let isInTeam = this.state.isInTeam;
    let teamIds = null;
    if (teamAthletes !== null) {
      teamIds = teamAthletes.map((athlete) => athlete.athleteId);
      isInTeam = teamIds.includes(data.athlete.athleteId);
    }
    console.log("Czy jest w druzynie", isInTeam);




    if (!isLoaded) {
      return (<div className="text-center container bg-light border rounded border-dark d-flex align-items-center justify-content-center flex-column" style={{ height: 480 + 'px',margin:"150px auto" }}>
        <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
      </div>)
    } else
      return (
        <div className="container bg-light border rounded border-dark" id="tableWindow">

          <div class="row">

            {/* <div class="col-sm-1 " id="lefteMargin"></div> */}

            <div class="col-sm-4 d-flex align-items-center flex-column justify-content-center" id="leftSide">
              <FontAwesomeIcon size="10x" icon={faUser} />
              <div class="w-100" style={{ margin: '25px' }}></div>
              
              {this.state.isTransfered ?(
                isInTeam ? <button className="btn btn-primary btn-block" onClick={() => this.sellAthlete(data.athlete.athleteId)}>Sprzedaj</button> :
              <button className="btn btn-primary btn-block" onClick={() => this.buyAthlete(data.athlete.athleteId)}>Kup</button>) :
              <span className="m-2 spinner-border spinner-border-lg"></span>}
               {this.state.isTransfered ? <TransferMarketListModal message={this.state.message} show={this.state.addModalShow} onHide={addModalClose} /> : <div></div>}
                {/* <TransferMarketListModal message={this.state.message} show={this.state.addModalShow} onHide={addModalClose} /> */}

              

              <button className="btn btn-primary btn-block" onClick={this.props.history.goBack}>Zamknij</button>
            </div>
            <div class="col-sm-1 " id="middleMargin"></div>
            <div class=" col-sm-7  col justify-content-center" id="rightSide">

              <div class=" row" id="mainInfo">
                <div class="col-sm-6 col text-center " id="riderNames">
                  <h1 >{data.athlete.firstName} {data.athlete.surname}</h1>
                  {/* {this.props.match.params.id} */}
                  <h5>{data.clubName}</h5>
                </div>
                <div class="col-sm-6 row align-items-center justify-content-center " id="value">
                  <table class="table font-weight-bold text-center">
                    <thead class="thead-dark ">
                      <tr>
                        <th class="">Wartość: </th>
                        <td>{data.athlete.value} mln </td>
                      </tr>
                    </thead>
                  </table>
                </div>

              </div>

              <div class="w-100" style={{ margin: '25px' }}></div>


              <div class=" " id="details">
                <table class="table font-weight-bold text-center">
                  <thead class="thead-dark ">
                    <tr>
                      <th class="">Ostatni występ</th>
              <td class="">{data.lastPerformance==null ? "Nie jechał":data.lastPerformance.points + data.lastPerformance.bonuses }</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Punkty w sezonie</th>
                      <td>{data.athlete.points}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Następny przeciwnik</th>
                      <td>{this.getNextRival(data)}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Narodowość</th>
                      <td>{data.athlete.nationality}</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th>Kategoria</th>
                      <td>{data.athlete.category}</td>
                    </tr>
                  </thead>
                </table>
              </div>

            </div>

            {/* <div class="col-sm-1 " id="rightMargin"></div> */}
          </div>


        </div>

      )
  }
}

export default RiderDetails;