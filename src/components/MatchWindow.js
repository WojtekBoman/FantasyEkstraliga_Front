import React from 'react'
import authHeader from '../services/auth-header'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

class MatchWindow extends React.Component {

    constructor(props) {
        super(props);

        this.getResults = this.getResults.bind(this);
        this.onChangeMatchWeek = this.onChangeMatchWeek.bind(this);
        this.handleMatchWeek = this.handleMatchWeek.bind(this);

        this.state = {
            matches: [],
            loading:false,
            actualMatchWeek: 1,
            chosenMatchWeek: 1
        };

    }

    async getResults(matchWeek) {
        this.setState({loading:true})
        
        let url = `http://localhost:8080/results?matchWeek=${matchWeek}`;

        let options = {
          method: 'GET',
          headers : authHeader()
          };

          fetch(url,options).then(res => res.json()).then(res => this.setState({matches:res,loading:false}))

    } 

    componentDidMount() {
        this.getResults(this.state.actualMatchWeek);
    }

    onChangeMatchWeek(e) {
        this.setState({chosenMatchWeek : e.target.value})
    }

    handleMatchWeek(e) {
        e.preventDefault();

        console.log(this.state)

        const {actualMatchWeek,chosenMatchWeek} = this.state;

        if(chosenMatchWeek != actualMatchWeek) {
            this.getResults(chosenMatchWeek);
            this.setState({actualMatchWeek:chosenMatchWeek});
        }
    }

    render() {

        console.log(this.state.matches)

        const {loading} = this.state

       return( 
       <div className="container bg-light border rounded border-dark" id="matchWindow">
                <header>
                <h3>Kolejka {this.state.actualMatchWeek}</h3>
                    <hr className="my-4"></hr>
                </header>

             <div style={{padding:'30px'}}>
                <Form onSubmit={this.handleMatchWeek} ref={c => this.form = c}>
                <label style={{marginBottom:'30px'}} for="matchWeekInput">Podaj numer kolejki</label>
                <Input min="1" max="2" value={this.state.chosenMatchWeek} onChange={this.onChangeMatchWeek} style={{marginBottom:'30px'}} id="matchWeekInput"  className="form-control" type="number" />
                <button
                style={{marginBottom:'30px'}}
                className="btn btn-block btn-dark"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Wybierz kolejkę</span>
              </button>
                </Form>
                </div>

                {loading ? (
                 <div><span className="spinner-border spinner-border-lg"></span><h4>Wczytywanie ...</h4> </div>
                ) : (
                    <table class="table table-bordered text-center">
                    <thead className="thead-dark">
                        <tr className="d-flex">
                        <th className="col-4" scope="col">Gospodarz</th>
                        <th className="col-4" scope="col">Wynik</th>
                        <th className="col-4" scope="col">Gość</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.matches.map(match => {
                            return (
                                <tr className="d-flex">
                        <td className="col-4" >{match.clubs[0].name}</td>
                        <td className="col-4 table-secondary"> {match.hostResult} : {match.awayResult} </td>
                        <td className="col-4">{match.clubs[1].name}</td>
                        </tr>
                            )
                        })}
                        
                    </tbody>
                    </table>
                )}
            
        </div>
        )

    }
}

export default MatchWindow;