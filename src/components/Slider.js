import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/slider.css'
import AuthService from "../services/auth-service"
import {Carousel,Button} from 'react-bootstrap';
import Background1 from '../img/Background1.jpg'
import Background2 from '../img/Background2.jpg'
import Background3 from '../img/Background3.jpg'
import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";

class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogged: AuthService.getCurrentUser()
    }
  }


    render() {
        return(
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Background1}
      alt="First slide"
    />
    <Carousel.Caption>
      {this.state.isLogged ? (<div>
          <p class="titleOfScreen">Dziękujemy za udział w naszej grze !</p>
      </div>) 
      : (<div> <p class="titleOfScreen">Załóż drużynę już dzisiaj</p>
      <h3>Załóż bezpłatnie konto</h3>
      <Link to="/rejestracja"><Button variant="warning" className="buttons">Rejestracja</Button></Link>
      <Link to="/logowanie"><Button variant="light" className="buttons">Logowanie</Button></Link></div>)}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Background2}
      alt="Third slide"
    />

    <Carousel.Caption>
    <p class="titleOfScreen">Poznaj zasady gry !</p>
    <HashLink to="#info"><Button variant="outline-light">Zasady</Button></HashLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Background3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <p class="titleOfScreen">Kontakt nigdy nie był tak prosty</p>
      <p>Wybierz dogodną opcję kontaku</p>
      <HashLink to="#footer"><Button variant="outline-light">Kontakt</Button></HashLink>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    }
}

export default Slider;