import React from 'react';
import {Modal, Button} from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import authHeader from "../services/auth-header"
import AuthService from "../services/auth-service"
import {Link} from "react-router-dom";
import history from '../history';



class AreYouSureModal extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.finishDelete = this.finishDelete.bind(this);
    this.backToForm = this.backToForm.bind(this);
    this.state = {
      message:"Czy na pewno chcesz usunąć konto ?",
      loading:props.defaultValueOfDisplay,
      deleted:props.defaultValueOfDisplay,
      incorrectPassword:props.defaultValueOfDisplay
    }
 
  }

  finishDelete() {
    AuthService.logout();
    history.push('/logowanie');
    window.location.reload()
  }

  backToForm() {
    window.location.reload();
  }

  handleDelete(e) {
    e.preventDefault();

    const {password} = this.props;

        this.setState({loading:true,message:"Ładowanie..."});
           
        let url = `https://fantasy-ekstraliga.herokuapp.com/api/auth/deleteAccount?password=${password}`;
        let options = {
        method: 'POST',
        headers: authHeader()
        };

          
          fetch(url,options)
          .then(
            response => {
              if(response.status === 400) {
                this.setState({
                  loading:false,
                  message:"Podałeś nieprawidłowe hasło, wróć do formularza i spróbuj ponownie !",
                  deleted:false,
                  incorrectPassword:true
                })
              }else {
                this.setState({
                  loading:false,
                  message:"Twoje konto zostało usunięte !",
                  deleted:true,
                  incorrectPassword:false
                })
            
              }
            }
            )
        }
        

  render() {

    const {loading,deleted,incorrectPassword,message} = this.state;

      return (
          <Modal
          {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Usuwanie konta</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className>
        
      <h5 className=" d-flex justify-content-center align-items-center alert alert-dark"> 
      <FontAwesomeIcon className="m-3" size="2x" icon={faInfoCircle} />{message}
      {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
      </h5>
      </div>
        </Modal.Body>
        <Modal.Footer> 
          {!incorrectPassword && !deleted && 
          <div className="col-sm-12 d-flex justify-content-center">
                <button style={{margin:"5px"}}
                className="btn btn-block btn-dark"
                disabled={loading}
                onClick={this.handleDelete}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Tak, zatwierdzam</span>
              </button>
                <Button style={{margin:"5px"}} className="col-sm-6" onClick={this.props.onHide}>Nie </Button>
          </div>}
          {incorrectPassword && (
              <Button style={{margin:"5px"}} onClick={this.backToForm} className="btn btn-block">Powrót do formularza</Button>
          )}
          {deleted && 
          (
            <Button style={{margin:"5px"}} className="btn btn-block" onClick={this.finishDelete}>Zakończ</Button>
          )}

        </Modal.Footer>
      </Modal>
      );
  }
}

export default AreYouSureModal;