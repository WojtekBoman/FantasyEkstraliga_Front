import React from 'react';
import ReactDOM from 'react-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import '../styles/form.css'

class LoginForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            haslo: "", 
            loading: false,
            message: ""
          };
    }

    render() {
        return(
            <div className="container bg-light border rounded border-dark" id="logForm">
                 <header>
                    <h2>Wejdź do gry !</h2>
                </header>
                <hr className="my-4" />
                <Form>
                <div class="form-group">
                    <label for="exampleInputLogin">Login</label>
                    <Input type="text" className="form-control" value={this.state.email}  id="exampleInputLogin" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputHaslo">Hasło</label>
                    <Input type="password" value={this.state.haslo} className="form-control" id="exampleInputHaslo" placeholder="Enter password"/>
                </div>
                <div className="form-group ">
                <button
                className="btn btn-block btn-dark"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
                </div>
                </Form>
            </div>
        )
    }
    
}


export default LoginForm;