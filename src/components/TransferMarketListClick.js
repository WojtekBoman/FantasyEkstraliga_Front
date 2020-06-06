import React from 'react';
import TransferMarketListModal from './TransferMarketListModal';
import authHeader from '../services/auth-header'


class TransferMarketListClick extends React.Component {

  constructor(props) {
    super(props);
    this.buyAthlete = this.buyAthlete.bind(this);
    this.state = {
      isLoaded: true,
      message: null,
      addModalShow: false,
      
            
    }
 
  }

 buyAthlete(athleteId){

  this.setState({isLoaded:false});
    let url = `http://localhost:8080/buy?athleteId=${athleteId}`;
  
          let options = {
            method: 'POST',
            headers : authHeader()
            };
  
  
            fetch(url,options).then(res => res.text()).then(res => this.setState({message:res,isLoaded:true}));
            this.setState({addModalShow:true});
  }



  render() {
    const isLoaded = this.state.isLoaded;
    let addModalClose = () => {this.setState({addModalShow:false});this.props.getTeam()};

    if (!isLoaded) {
      return (<div>
        <span className="spinner-border spinner-border-lg"></span>
      </div>)
    } else

      return (
        <div>
        <button className="btn btn-primary" onClick={() =>this.buyAthlete(this.props.rider_id)}>Kup</button>
        <TransferMarketListModal message={this.state.message} show={this.state.addModalShow} onHide={addModalClose}/>
        </div>
      )
  }
}

export default TransferMarketListClick;