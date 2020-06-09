import React from 'react';
import { Modal, Button ,Dropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";


class ChangeRoleModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      changed:false,
      isOpen:false,
      subButtonText:" Wprowadź do 1. składu2",



    }

  }


  render() {
    const athlete = this.props.athlete;
    const firstTeam = this.props.firstTeam;
    const reserve = this.props.reserve;
    let ridersToShow = [];
    let reserveRidersToShow = [];

    if(athlete!==null && athlete.teamRole==="SUB2") reserveRidersToShow = reserve.filter((item) => { return item.teamRole==="SUB1" });
    else if (athlete!==null && athlete.teamRole==="SUB1") reserveRidersToShow = reserve.filter((item) => { return item.teamRole==="SUB2" });

    if(athlete!==null && athlete.category==="junior") 
    ridersToShow = firstTeam.filter((item) => { return item.category==="junior" });
    else ridersToShow = firstTeam.filter((item) => { return item.category!=="junior" });
    
    let listItems=[];
    if (athlete!==null) listItems = ridersToShow.map((rider) => <Dropdown.Item className="ml-49%" onClick={()=>this.props.changeSub(rider.athleteId, athlete.athleteId)}>
    <h6> {rider.firstName} {rider.surname} </h6> </Dropdown.Item> )

    let listItemsReserve=[];
    if (athlete!==null) listItemsReserve = reserveRidersToShow.map((rider) => <Dropdown.Item className="ml-49%" onClick={()=>this.props.changeSub(rider.athleteId, athlete.athleteId)}>
    <h6> {rider.firstName} {rider.surname} </h6> </Dropdown.Item> )


 return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Fantasy Ekstraliga</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {this.props.changingRole ?  
        <div className="text-center container d-flex align-items-center justify-content-center flex-column ">
        <span className="spinner-border spinner-border-lg"></span><h4>Zmiany w składzie... </h4></div> : 
          <div>
            {athlete === null ? <p>Coś poszło nie tak</p> :
              <h1 className=" d-flex justify-content-center align-items-center "> {athlete.firstName} {athlete.surname}</h1>
              
              }
          </div>}

        </Modal.Body>
        <Modal.Footer>
          {athlete === null  ?
           
            <div className="d-flex flex-column justify-content-center w-100">
               Coś poszło nie tak
            </div> :

           [ ( athlete.teamRole!=="SUB1" && athlete.teamRole!=="SUB2" && athlete.teamRole!=="SUB3" ?
            
            <div className="d-flex flex-column justify-content-center w-100">
            <Button id="makeCapitan" block variant="dark" onClick={()=>this.props.changeRole(athlete.athleteId, 1)}>Kapitan</Button>
            <Button id="makeVice" block   onClick={()=>this.props.changeRole(athlete.athleteId, 2)}>Vice-kapitan</Button>
            <Button block id="sellButton"   onClick={()=>this.props.sell(athlete.athleteId)}>Sprzedaj</Button>
            <Link to={"riderDetails/" + athlete.athleteId}> <Button  className="mt-2" block>Więcej informacji</Button> </Link>
            
          </div>:
          <div className="d-flex flex-column justify-content-center w-100">
            <Dropdown block>
            
            <Dropdown.Toggle   variant="dark" block>
             {/* {this.state.subButtonText} */}
             Wprowadź do 1. składu
             
            </Dropdown.Toggle>
            <Dropdown.Menu  className="w-100"  id="dropdown-basic-button">
               <Dropdown.Item disabled>  <h6> Za kogo:</h6> </Dropdown.Item> 
               {listItems}
        
          </Dropdown.Menu >
          </Dropdown>
          {(athlete!==null && athlete.teamRole!=="SUB3") &&
           <Dropdown block>
            
           <Dropdown.Toggle className="mt-2"   block>
           
               Zmień kolejność rezerwowego
            
           </Dropdown.Toggle>
           <Dropdown.Menu  className="w-100"  id="dropdown-basic-button">
          <Dropdown.Item disabled>  <h6> Za:</h6> </Dropdown.Item> 
         {listItemsReserve}
       
         </Dropdown.Menu >
         </Dropdown>
          
          }
          <Button id="sellButtonReserve" block className="mt-2"  onClick={()=>this.props.sell(athlete.athleteId)}>Sprzedaj</Button>
          <Link to={"riderDetails/" + athlete.athleteId}> <Button  className="mt-2" block>Więcej informacji</Button> </Link>
          
        </div>)]
          }
        </Modal.Footer>
      </Modal>


    );
  }
}

export default ChangeRoleModal;