import React from 'react'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {Link} from "react-router-dom";
import authHeader from "../services/auth-header"

const required = value => {
    if(!value) {
      return(
        <div className="alert alert-danger" role="alert">
          To pole jest wymagane !
        </div>
      )
    }
  }

  const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          Hasło musi zawierać od 6 do 40 znaków.
        </div>
      );
    }
  };

class ChangePasswordForm extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeOldPassword = this.onChangeOldPassword.bind(this);
        this.onChangeRepeatedNewPassword = this.onChangeRepeatedNewPassword.bind(this);
        this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);

        this.state = {
            loading:false,
            message:'',
            oldPassword:'',
            repeatedNewPassword:'',
            newPassword:'',
            alertStyle: "alert alert-danger"
        }
    }

    onChangeOldPassword(e) {
        this.setState({oldPassword: e.target.value})
    }

    onChangeRepeatedNewPassword(e) {
        this.setState({repeatedNewPassword: e.target.value})
    }

    onChangeNewPassword(e) {
        this.setState({newPassword:e.target.value})
    }

    handleChangePassword(e) {
        e.preventDefault();

        this.setState({
            loading:true,
        })

        this.form.validateAll();

        if(this.state.newPassword !== this.state.repeatedNewPassword){
            this.setState({
                loading:false,
                message:"Podane hasła są różne",
                alertStyle:"alert alert-danger"
            })

            return;
        }

        if (this.checkBtn.context._errors.length === 0) {

            const {oldPassword,newPassword,repeatedNewPassword} = this.state;
           
            let url = `https://fantasy-ekstraliga.herokuapp.com/api/auth/changePassword?oldPassword=${oldPassword}&newPassword1=${newPassword}&newPassword2=${repeatedNewPassword}`;
            let options = {
            method: 'POST',
            headers: authHeader()
          };

          fetch(url,options)
          .then(
            response => {
              if(response.status === 400) {
                this.setState({
                  alertStyle:"alert alert-danger"
                })
              }else{
                this.setState({
                  alertStyle:"alert alert-success"
                })
              }
              return response.json()
            }
        ).then(response => this.setState({message:response.message,loading:false}))
        }else{
          this.setState({
            loading: false
          });
        }
    }

    render() {

        const {loading,message,oldPassword,repeatedNewPassword,newPassword} = this.state;

        return(
        <div className="container shadow-container bg-light border rounded border-dark" id="changePasswordForm">
            <header className="text-center">
                <h2>Zmiana hasła</h2>
                <hr className="my-4"></hr>
            </header>

            <Form onSubmit={this.handleChangePassword} ref={c => this.form = c}>
                <div class="form-group">
                    <label for="exampleInputOldPassword">Podaj swoje stare hasło</label>
                    <Input type="password" className="form-control" value={oldPassword} onChange={this.onChangeOldPassword} validations={[required]}  id="exampleInputOldPassword" placeholder="Podaj swoje stare hasło"/>
                </div>

                <div class="form-group">
                    <label for="exampleInputNewPassowrd">Podaj nowe hasło</label>
                    <Input type="password" className="form-control" value={newPassword} onChange={this.onChangeNewPassword} validations={[required,vpassword]}  id="exampleInputNewPassowrd" placeholder="Podaj nowe hasło"/>
                </div>

                <div class="form-group">
                    <label for="exampleInputRepeatedOldPassword">Powtórz swoje stare hasło</label>
                    <Input type="password" className="form-control" value={repeatedNewPassword} onChange={this.onChangeRepeatedNewPassword} validations={[required,vpassword]}  id="exampleInputRepeatedOldPassword" placeholder="Powtórz nowe hasło"/>
                </div>

                <button
                className="btn btn-block btn-dark"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Zmień hasło</span>
              </button>

                {message && (
                  <div className="form-group">
                    <div className={this.state.alertStyle} role="alert">
                        {message}
                    </div>
                  </div>
                )}

                <Link to="/settings"><button style={{margin:"20px auto"}} className="btn btn-block btn-dark">Powrót</button></Link>

                <CheckButton
                  style={{display:"none"}}
                  ref={c => {this.checkBtn = c;}}
                  />
                </Form>

        </div>
        );
    }

}

export default ChangePasswordForm;