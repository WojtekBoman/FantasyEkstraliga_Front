import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Redirect } from "react-router-dom";
import TeamService from '../services/team-service';
import authHeader from '../services/auth-header';
import authService from '../services/auth-service';


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
        this.setState({
          loading:true
        })

        let url = `https://fantasy-ekstraliga.herokuapp.com/createTeam?teamName=${this.state.teamName}`;

        let options = {
          method: 'POST',
          headers : authHeader()
          };
        if (this.checkBtn.context._errors.length === 0){
          fetch(url,options).then(res => res.json()).then(res => 
            {
             
                if(res.team) {
                console.log("RES",res);
                const userToModify = authService.getCurrentUser();
                userToModify['team'] = res.team.teamId
                console.log("Modified user",userToModify);
                localStorage.removeItem("player");
                localStorage.setItem("player",JSON.stringify(userToModify));
                this.setState({loading:false,message:res.info});
                window.location.reload();
                }else {
                  this.setState({loading:false,message:res.info});
                }
              

            }
            )
          .catch(error => {
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
      
          } );
           
            }else{
              this.setState({
                loading: false
              });
            }
    }
    

    render() {

        

        return (
            <div className="container bg-light border rounded border-dark" id="teamcreatorForm">
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