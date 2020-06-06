import React from 'react'
import authHeader from '../services/auth-header'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { Tab, Nav, Col, Row } from 'react-bootstrap'
import StatsCurrent from './StatsCurrent';
import StatsPast from './StatsPast';
import '../styles/squadTable.css';

class Stats extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            message: '',
            riders: []
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



    render() {

        console.log("ridres main",this.state.riders)

        return (
            <div className="container bg-light border rounded border-dark" id="tableWindow">
                <header>
                    <h1>Statystyki zawodników</h1>
                    <br/>
                    {/* <hr className="my-4"></hr> */}
                </header>

                <div className="">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="">
                        <Row>
                            <Col sm={12} className="">
                                <Nav variant="tabs" className="d-flex justify-content-center">
                                    <Nav.Item className="">
                                        <Nav.Link className="" eventKey="first">Statystyki z obecnego sezonu</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Statystyki 2018</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row><Row>
                            <Col sm={12}>
                                <Tab.Content className="d-flex justify-content-center">
                                    <Tab.Pane eventKey="first">
                                        
                                        {!this.state.loading ? <StatsCurrent riders={this.state.riders} /> :
                                            <div className="text-center container bg-light d-flex align-items-center justify-content-center flex-column" style={{ margin:"150px auto" }}>
                                            <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
                                          </div>}
                                           
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    {!this.state.loading ? <StatsPast /> :
                                            <div className="text-center container bg-light d-flex align-items-center justify-content-center flex-column" style={{ margin:"150px auto" }}>
                                            <span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie... </h4>
                                          </div>}
                                </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>

            </div>
        )
    }
}

export default Stats;