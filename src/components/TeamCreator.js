import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import TeamService from '../services/team-service';


const required = value => {
    if(!value) {
      return(
        <div className="alert alert-danger" role="alert">
          To pole jest wymagane !
        </div>
      )
    }
  }

class TeamCreator extends React.Component {

    constructor(props) {
        super(props);

        this.handleCreate = this.handleCreate.bind(this);
        this.onChangeTeamName = this.onChangeTeamName.bind(this);

        this.state = {
            teamName: '',
            loading: false,
            message:""
        }
    }

    onChangeTeamName(e) {
        this.setState({
            teamName: e.target.value
        })
    }

    handleCreate(e) {
        e.preventDefault();

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0){
            TeamService.createTeam(this.state.teamName).then(
                (res) => {
                  window.location.reload();
                  console.log(res);
                },
                error => {
                  const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
        
                  this.setState({
                    loading: false,
                    message: resMessage
                  });
            
                }
            );
            }else{
              this.setState({
                loading: false
              });
            }
    }
    

    render() {

        return (
            <div className="container bg-light border rounded border-dark" id="teamCreator">
                <header className="text-center">
                    <h2 className="display-4">To już ostatnia prosta !</h2>
                    <hr className="my-4" />
                </header>
                <Form onSubmit={this.handleCreate} ref={c => this.form = c}> 
                <div class="form-group text-center">
                    <label for="exampleInputLogin"><h4>Wprowadź nazwę swojej drużyny !</h4></label>
                    <Input type="text" className="form-control" value={this.state.teamName} onChange={this.onChangeTeamName} validations={[required]}  id="exampleInputTeamName" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group ">
                <button
                className="btn btn-block btn-dark"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Stwórz drużynę</span>
              </button>
                </div>

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
            </div>
        )
    }

}

export default TeamCreator;