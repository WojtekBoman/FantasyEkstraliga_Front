import React from 'react'
import authHeader from '../services/auth-header'
import {Link} from "react-router-dom";
import AuthService from "../services/auth-service"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import StatsCurrent from './StatsCurrent';
import StatsPast from './StatsPast';
import '../styles/squadTable.css';

class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);

        this.state = {
            loading: false,
            message: '',
            riders: [],
            year: 1,
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        let url = "https://fantasy-ekstraliga.herokuapp.com/statistics";

        let options = {
            method: 'GET',
            headers: authHeader()
        };

        fetch(url, options).then(res => res.json()).then(res => this.setState({ riders: res, loading: false }));
    }

    // handleChange(e) {
   
    //     this.setState({
    //         year: e.target.value
    //     })
    // }
    handleChange = (selectedValue) =>{this.setState({year:selectedValue})}



    render() {

        console.log("ridres main", this.state.riders)

        if(!AuthService.getCurrentUser()) return (
            <div className="block-window container bg-light border rounded border-dark shadow-container text-center">
                    <h3>Ekran tylko dla zalogowanych użytkowników</h3>
                    <Link to="/logowanie"><button type="button" style={{width:"50%"}} className="btn btn-dark buttons">Przejdź do ekranu logowania</button></Link>
            </div>
        )

        return (
            <div className="container bg-light border rounded border-dark shadow-container" id="tableWindow">
                <header>
                    <h1>Statystyki zawodników</h1>
                    <br />
                    {/* <hr className="my-4"></hr> */}
                </header>

                <div className="">

                    <div className="d-flex justify-content-center">
                        <ToggleButtonGroup type="radio" value={this.state.year} onChange={this.handleChange} name="years" >
                            <ToggleButton value={1}>Statystyki z obecnego sezonu</ToggleButton>
                            <ToggleButton value={2}>Statystyki z sezonu 2018</ToggleButton>
                        </ToggleButtonGroup>
                    </div>

                    {this.state.loading ?
                        <div className="text-center container bg-light d-flex align-items-center justify-content-center flex-column" style={{ margin: "150px auto" }}>
                            <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
                        </div> : [

                            this.state.year === 1 ? <StatsCurrent riders={this.state.riders} /> : <StatsPast />]}

                </div>

            </div>
        )
    }
}

export default Stats;