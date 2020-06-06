import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/slider.css'
import AuthService from "../services/auth-service"
import {Carousel,Button} from 'react-bootstrap';
import Background1 from '../img/Background1.jpg'
import Background2 from '../img/Background2.jpg'
import Background3 from '../img/Background3.jpg'

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
      <Button variant="warning" className="buttons">Rejestracja</Button>
      <Button variant="light" className="buttons">Logowanie</Button></div>)}
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
    <a href="#info"><Button variant="outline-light">Zasady</Button></a>
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
      <a href="#footer"><Button variant="outline-light">Kontakt</Button></a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    }
}

export default Slider;