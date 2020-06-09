import React from 'react';
import athleteService from '../services/athlete-service';
import authHeader from '../services/auth-header';
import { Link } from "react-router-dom";
import TransferMarketList from './TransferMarketList';
import '../styles/squadTable.css';
import ReactCountryFlag from "react-country-flag"


class TransferMarket extends React.Component {

  constructor(props) {
    super(props);
    this.getTeam = this.getTeam.bind(this);
    this.getTeamNoLoading = this.getTeamNoLoading.bind(this);
    this.state = {
      isLoaded: false,
      items: [],
      searchCategory: '',
      searchValue: '3',
      searchClub: '',
      clubs: [],
      budget:-1,
      loadingBudget:false
            
    }
 
  }


  async componentDidMount() {
    const riders = await athleteService.getAllAthletes();
    const clubs = await athleteService.getAllClubs();
    this.setState({items: riders.data, clubs:clubs.data})
    this.getTeam();
    console.log(riders)
    console.log(this.state.items)

  }

  async getTeam(){
    this.setState({ isLoaded: false})
    let url = "https://fantasy-ekstraliga.herokuapp.com/teamAthletes";

    let options = {
      method: 'GET',
      headers: authHeader()
    };

    fetch(url, options).then(res => res.json())
      .then((res) => this.setState({
       budget: res.team.budget, isLoaded:true}));
  }

  async getTeamNoLoading(){
    this.setState({ loadingBudget: true})
    let url = "https://fantasy-ekstraliga.herokuapp.com/teamAthletes";

    let options = {
      method: 'GET',
      headers: authHeader()
    };

    fetch(url, options).then(res => res.json())
      .then((res) => this.setState({
       budget: res.team.budget, loadingBudget:false}));
  }

  updateSearchCategory(event) { this.setState({ searchCategory: event.target.value.substr(0, 20) }); }
  updateSearchValue(event) { this.setState({ searchValue: event.target.value.substr(0, 20) }); }
  updateSearchClub(event) { this.setState({ searchClub: event.target.value.substr(0, 20) }); }


  render() {
    const items = this.state.items;
    const isLoaded = this.state.isLoaded;
    

    let filtered1 = items.filter((item) => { return item.category.indexOf(this.state.searchCategory) !== -1 });
    let filtered2 = filtered1.filter((item) => { return (parseFloat(item.value.toString()) <= parseFloat(this.state.searchValue)) });
    let filtered3 = filtered2.filter((item) => { return item.club.toString().indexOf(this.state.searchClub) !== -1 });
    


    if (!isLoaded) {
      return (<div className="shadow-container text-center container bg-light border rounded border-dark d-flex align-items-center justify-content-center flex-column" style={{ height: 480 + 'px',margin:"150px auto" }}>
        <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
      </div>)
    } else

      return (
        <div className="shadow-container container bg-light border rounded border-dark col-xl-8 table-responsive" id="tableWindow">
          <header>
            <div id="top" class="row ">
              <div className="col-sm-9 ">
                <h1>Rynek Transferowy</h1><br /><br />
                <div id="filters" class="row text-center font-weight-bold ">
                  <div class="col-md-4">
                    <label>Kategoria</label>
                    <select class="form-control" id="kategoriaFrom" value={this.state.searchCategory} onChange={this.updateSearchCategory.bind(this)}>
                      <option id="all" value="" >Wszyscy</option>
                      <option id="seniorOption" value="senior">Senior</option>
                      <option id="juniorOption" value="junior">Junior</option>
                      <option id="obcoOption" value="obcokrajowiec">Obcokrajowiec</option>
                    </select>
                  </div>

                  <div class="col-md-4 ">
                    <label >Wartość</label>
                    <select class="form-control" id="wartoscForm" value={this.state.searchValue} onChange={this.updateSearchValue.bind(this)}>
                      <option value="3" >Wszyscy</option>
                      <option value="0.1">do 100 tys.</option><option value="0.2">do 200 tys.</option>
                      <option value="0.3">do 300 tys.</option><option value="0.4">do 400 tys.</option><option value="0.5">do 500 tys.</option>
                      <option value="0.6">do 600 tys.</option><option value="0.7">do 700 tys.</option><option value="0.8">do 800 tys.</option>
                      <option value="0.9">do 900 tys.</option><option value="1">do 1 mln</option><option value="1.1">do 1,1 mln</option>
                      <option value="1.2">do 1,2 mln</option><option value="1.3">do 1,3 mln</option><option value="1.4">do 1,4 mln</option>
                      <option value="1.5">do 1,5 mln</option><option value="1.6">do 1,6 mln</option><option value="1.7">do 1,7 mln</option>
                      <option value="1.8">do 1,8 mln</option><option value="1.9">do 1,9 mln</option><option value="2">do 2 mln</option>


                    </select>
                  </div>

                  <div class="col-md-4 ">
                    <label >Klub</label>
                    <select class="form-control" id="klubForm" value={this.state.searchClub} onChange={this.updateSearchClub.bind(this)}>
                      <option id="allClubs" value="" >Wszyscy</option>
                      <option id="Les" value="1">Unia Leszno</option>
                      <option id="Gor" value="2">Stal Gorzów</option>
                      <option id="Wro" value="3">Sparta Wrocław</option>
                      <option id="Cze" value="4">Włókniarz Częstochowa</option>
                      <option id="Tor" value="5">Apator Toruń</option>
                      <option id="Gru" value="6">GKM Grudziądz</option>
                      <option id="Zie" value="7">Falubaz Zielona Góra</option>
                      <option id="Lub" value="8">Motor Lublin</option>
                    </select>
                  </div>

                </div>
              </div>
              <div className="col-md-3 d-flex align-items-end justify-content-center mt-3 ">
                
              {/* <h5>  <span className="alert alert-primary">
                Budżet:  { this.state.loadingBudget ? "Przeliczanie..." : <strong>{parseFloat(this.state.budget).toFixed(2)} mln</strong>}
                </span></h5> */}

                <h5> <span className="alert alert-primary">Budżet:  <strong>{parseFloat(this.state.budget).toFixed(2)} mln</strong></span></h5>

              </div>
            </div>

            <hr className="my-4" />
          </header>
          <div class="table-responsive-xl">
          <TransferMarketList rider_data={filtered3} getTeam={this.getTeamNoLoading} all_clubs={this.state.clubs}  />
          </div>

        </div>
      )
  }
}

export default TransferMarket;