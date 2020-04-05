import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider'
import WelcomeInfo from './WelcomeInfo'
import Manual from './Manual'

const Home = () => {
    return (
        <div>
                <Slider/>
                <WelcomeInfo/>
                <Manual/>
        </div>
    )
}

export default Home;