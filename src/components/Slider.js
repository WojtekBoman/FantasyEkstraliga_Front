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
          <h1 class="display-2">Dziękujemy za udział w naszej grze !</h1>
      </div>) 
      : (<div> <h1 class="display-2">Załóż drużynę już dzisiaj</h1>
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
    <h2 class="display-2">Poznaj zasady gry !</h2>
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
    <h2 class="display-2">Kontakt nigdy nie był tak prosty</h2>
      <p>Wybierz dogodną opcję kontaku</p>
      <a href="#footer"><Button variant="outline-light">Kontakt</Button></a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        )
    }
}

export default Slider;