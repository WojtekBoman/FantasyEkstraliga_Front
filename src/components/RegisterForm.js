import React from 'react';
import ReactDOM from 'react-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import '../styles/form.css'


class RegisterForm extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            email: "",
            haslo: "",
            powtorzoneHaslo:"",
            imie: "",
            nazwisko: "",
            successful: false,
            message: ""
        }
    }

    render(){
        return (
            <div className="container bg-light border rounded border-dark" id="regForm">
                <header>
                    <h2>Dołącz do świata Fantasy Ekstraliga</h2>
                </header>
                <hr className="my-4" />
                <Form>
                <div class="form-group">
                    <label for="exampleInputFirstname">Imię</label>
                    <Input type="text" className="form-control"   id="exampleInputFirstname"  placeholder="Podaj swoje imię"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputLastname">Nazwisko</label>
                    <Input type="password" className="form-control" id="exampleInputLastname" placeholder="Podaj swoje nazwisko"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputLogin">Login</label>
                    <Input type="text" className="form-control"   id="exampleInputLogin"  placeholder="Podaj swój login"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputLogin">Email</label>
                    <Input type="text" className="form-control"   id="exampleInputLogin"  placeholder="Podaj swój adres e-mail"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword">Hasło</label>
                    <Input type="password" className="form-control" id="exampleInputPassword" placeholder="Podaj hasło"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputRepeatPassword">Powtórz hasło</label>
                    <Input type="password" className="form-control" id="exampleInputRepeatPassword" placeholder="Powtórz hasło"/>
                </div>
                <div className="form-group ">
                <button
                className="btn btn-block btn-dark"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Stwórz konto</span>
              </button>
                </div>
                </Form>
            </div>
        )
    }
}


export default RegisterForm;