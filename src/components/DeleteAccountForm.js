import React from 'react';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import authHeader from "../services/auth-header"
import {Link} from "react-router-dom";
import AuthService from "../services/auth-service"
import AreYouSureModal from './AreYouSureModal'

const required = value => {
    if(!value) {
      return(
        <div className="alert alert-danger" role="alert">
          To pole jest wymagane !
        </div>
      )
    }
  }
  

class DeleteAccountForm extends React.Component {

    constructor(props) {
        super(props);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.state = {
            loading:false,
            message: "",
            password:"",
            showAYSmodal:false
        }
    }

    onChangePassword(e) {
        this.setState({password:e.target.value})
    }

    handleDelete(e) {
        e.preventDefault();

        this.setState({
            loading:true,
            message:""
        })

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {

          this.setState({showAYSmodal:true,loading:false})

        //     const {password} = this.state;
           
        //     let url = `https://fantasy-ekstraliga.herokuapp.com/api/auth/deleteAccount?password=${password}`;
        //     let options = {
        //     method: 'POST',
        //     headers: authHeader()
        //   };

          
        //   fetch(url,options)
        //   .then(
        //     response => {
        //       if(response.status === 400) {
        //         this.setState({
        //           loading:false,
        //           message:"Podałeś nieprawidłowe hasło"
        //         })
        //         console.log(response);
        //       }else {
        //         this.props.history.push('/')
        //         window.location.reload();
        //         AuthService.logout();
        //         alert("Twoje konto zostało usunięte");
        //       }
        //     }
        //     )
        // }else{
        //   this.setState({
        //     loading: false
        //   });
        }else{
          this.setState({loading:false})
        }
        

        
    }

    render() {

       const {loading,message,password} = this.state;

       const hideModal = () => this.setState({showAYSmodal:false});

        return (
            <div className="container bg-light border rounded border-dark" id="delAccForm">
                <header className="text-center">
                    <h1>Usuń konto</h1>
                    <hr className="my-4"></hr>
                    <h4>UWAGA !</h4>
                    <p>Ta operacja jest nieodwracalna ! Po usunięciu konta stracisz cały postęp w grze ! Przemyśl czy na pewno chcesz pozbyć się swojego konta !</p>
                </header>
                <Form onSubmit={this.handleDelete} ref={c => this.form = c}>
                <div class="form-group">
                    <label for="exampleInputPassowrd">Podaj swoje hasło aby potwierdzić usunięcie konta</label>
                    <Input type="password" className="form-control" value={password} onChange={this.onChangePassword} validations={[required]}  id="exampleInputPassword" placeholder="Podaj swoje hasło"/>
                </div>

                <button
                className="btn btn-block btn-dark"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Usuń konto</span>
              </button>

              <AreYouSureModal show={this.state.showAYSmodal} onHide={hideModal} password={this.state.password} defaultValueOfDisplay={false}/>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
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
        )
    }


}

export default DeleteAccountForm;