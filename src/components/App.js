import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './NavigationBar'
import Slider from './Slider'
import WelcomeInfo from './WelcomeInfo'
import Manual from './Manual'
import Footer from './Footer'
import '../styles/app.css'

class App extends React.Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <Slider/>
                <WelcomeInfo/>
                <Manual/>
                <Footer/>
            </div>
        )
    }
}

export default App;