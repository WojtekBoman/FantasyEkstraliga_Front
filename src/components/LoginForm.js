import React from 'react';
import ReactDOM from 'react-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import '../styles/form.css'

import AuthService from "../services/auth-service"

const required = value => {
  if(!value) {
    return(
      <div className="alert alert-danger" role="alert">
        To pole jest wymagane !
      </div>
    )
  }
}

class LoginForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            login: "",
            password: "", 
            loading: false,
            message: ""
          };
    }

    onChangeLogin(e) {
      this.setState({
        login: e.target.value
      });
    }

    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }

    handleLogin(e) {
      e.preventDefault();

      this.setState({
        message: "",
        loading: true
      })

      this.form.validateAll();
      
      if (this.checkBtn.context._errors.length === 0) {
        AuthService.login(this.state.login, this.state.password).then(
          () => {
            this.props.history.push("/profile");
            window.location.reload();
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

      const {login,password,message,loading} = this.state;

        return(
            <div className="container bg-light border rounded border-dark" id="logForm">
                 <header>
                    <h2>Wejdź do gry !</h2>
                </header>
                <hr className="my-4" />
                <Form onSubmit={this.handleLogin} ref={c => this.form = c}>
                <div class="form-group">
                    <label for="exampleInputLogin">Login</label>
                    <Input type="text" className="form-control" value={login} onChange={this.onChangeLogin} validations={[required]}  id="exampleInputLogin" aria-describedby="emailHelp" placeholder="Podaj swój login"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputHaslo">Hasło</label>
                    <Input type="password" value={password} onChange={this.onChangePassword} validations={[required]} className="form-control" id="exampleInputHaslo" placeholder="Podaj swoje hasło"/>
                </div>
                <div className="form-group ">
                <button
                className="btn btn-block btn-dark"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
                </div>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
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


export default LoginForm;