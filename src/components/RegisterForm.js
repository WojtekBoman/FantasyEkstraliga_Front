import React from 'react';
import ReactDOM from 'react-dom';
import AuthService from "../services/auth-service"
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import validator,{ isEmail } from "validator";
import '../styles/form.css'


const required = value => {
    if (!value) {
      return (
  
        <div className="alert alert-danger" role="alert">
          To pole jest wymagane!
        </div>
      
      );
    }
  };
  
  const vemail = value => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          To nie jest poprawny email.
        </div>
      );
    }
  };
  
  const vfname = value => {
    if (value.length < 3 || value.length > 30) {
      return (
        <div className="alert alert-danger" role="alert">
          Imię musi zawierać od 3 do 30 znaków.
        </div>
      );
    }
  };
  
  const vsurname = value => {
      if (value.length < 3 || value.length > 30) {
        return (
          <div className="alert alert-danger" role="alert">
            Nazwisko musi zawierać od 3 do 30 znaków.
          </div>
        );
      }
    };

  const vlogin = value => {
    if (value.length < 6 || value.length > 40) {
        return (
          <div className="alert alert-danger" role="alert">
            Login musi zawierać od 6 do 40 znaków.
          </div>
        );
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


class RegisterForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRepeatPassword = this.onChangeRepeatPassword.bind(this);
        this.translateErrorMessage = this.translateErrorMessage.bind(this);


        this.state = {
            login:"",
            email: "",
            firstName: "",
            surname: "",
            password: "",
            repeatPassword:"",
            successful: false,
            message: "",
            loading:false
        }
    }

    translateErrorMessage(errorType){
      switch (errorType) {
        case 'Network Error':
          return 'Błąd połączenia, spróbuj ponownie za jakiś czas !'
        case "Error: Unauthorized":
          return 'Niepoprawne dane logowania, spróbuj ponownie !'
        default:
          return 'Błąd połączenia';
      }
    }

    onChangeLogin(e) {
        this.setState({
            login: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeSurname(e) {
        this.setState({
            surname: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onChangeRepeatPassword(e){
        this.setState({
            repeatPassword: e.target.value
        })
    }

    handleRegister(e) {
        e.preventDefault()
 
         this.setState({
             message: "",
             succesful: false,
             loading:true
         });
 
 
         this.form.validateAll();
         
         if(this.state.password !== this.state.repeatPassword) {
             this.setState({message : "Hasła są różne.",loading:false});
             return;
         }
 
         if(this.checkBtn.context._errors.length === 0) {
             AuthService.register(
                 this.state.login,
                 this.state.email,
                 this.state.firstName,
                 this.state.surname,
                 this.state.password
             ).then(
                 response => {
                     this.setState({
                         succesful: true,
                         message: response.data.message,
                         loading:false
                     });
                     console.log(this.state.succesful);
                 },
                 error =>{
                     const resMessage =
                     (error.response &&
                         error.response.data &&
                         error.response.data.message) || 
                     error.message ||
                     error.toString();
                     this.setState({
                         message: this.translateErrorMessage(resMessage),
                         succesful: false,
                         loading:false
                     });
                     console.log(this.state.succesful);
                 }
             )
         }else{this.setState({loading:false})}
 
     }

    render(){

        const {loading,succesful,message} = this.state;

        return (
            <div className="container bg-light border rounded border-dark shadow-container" id="regForm">
                <Form onSubmit={this.handleRegister}
                     ref={c => {
                    this.form = c;
            }}>
                {!succesful && (<div> <header>
                    <h2>Dołącz do świata Fantasy Ekstraliga</h2>
                </header>
                <hr className="my-4" />
                <div class="form-group">
                    <label for="exampleInputLogin">Login</label>
                    <Input type="text" value={this.state.login} onChange={this.onChangeLogin} validations={[required,vlogin]} className="form-control"   id="exampleInputLogin"  placeholder="Podaj swój login"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail">Email</label>
                    <Input type="text" value={this.state.email} onChange={this.onChangeEmail} validations={[required,vemail]} className="form-control"   id="exampleInputEmail"  placeholder="Podaj swój adres e-mail"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputFirstname">Imię</label>
                    <Input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} validations={[required,vfname]} className="form-control"   id="exampleInputFirstname"  placeholder="Podaj swoje imię"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputSurname">Nazwisko</label>
                    <Input type="text" value={this.state.surname} onChange={this.onChangeSurname} validations={[required,vsurname]} className="form-control" id="exampleInputSurname" placeholder="Podaj swoje nazwisko"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword">Hasło</label>
                    <Input type="password" value={this.state.password} onChange={this.onChangePassword} validations={[required,vpassword]} className="form-control" id="exampleInputPassword" placeholder="Podaj hasło"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputRepeatPassword">Powtórz hasło</label>
                    <Input type="password" value={this.state.repeatPassword} onChange={this.onChangeRepeatPassword} validations={[required,vpassword]} className="form-control" id="exampleInputRepeatPassword" placeholder="Powtórz hasło"/>
                </div>
                <div className="form-group ">
                <button id="registerButton"
                className="btn btn-block btn-dark"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Stwórz konto</span>
              </button>
                </div>
                </div>)}
                 
                {message && !succesful && (
              <div className="form-group">
                <div
                  className={"alert alert-danger"}
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}

            {succesful && (
              <div className="text-center">
                <header>
                  <h3>Dziękujemy za dołączenie do gry !</h3>
                  <br></br>
                  <h3>Życzymy powodzenia w sezonie</h3>
                </header>
                <hr className="my-4" />
              <div className="form-group" style={{margin: "125px"}}>
                <div
                  className={"alert alert-dark"}
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
              <button type="button" onClick={() => this.props.history.push('/logowanie')} style={{width:"50%"}} className="btn btn-dark">Przejdź do ekranu logowania</button>
              </div>
            )}


            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />

                </Form>
            </div>
        )
    }
}


export default RegisterForm;