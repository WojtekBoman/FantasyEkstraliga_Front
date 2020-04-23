import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'

import athleteService from '../services/athlete-service';

class RiderDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: [],
    }
  }

  async componentDidMount() {
    const { data } = await athleteService.getAthleteById(this.props.match.params.id)
    this.setState({ isLoaded: true, data: data, })
    console.log(data);
  }



  render() {
    const isLoaded = this.state.isLoaded;
    const data = this.state.data;
    if (!isLoaded) {
      return (<div className="text-center container bg-light border rounded border-dark d-flex align-items-center justify-content-center flex-column" style={{ height: 480 + 'px' }}>
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

              <button className="btn btn-primary btn-block">Sprzedaj/Kup//</button>
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
                      <th class="">Punkty w kolejce</th>
                      <td class="">0//</td>
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
                      <td>Sprta Wrocław//</td>
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