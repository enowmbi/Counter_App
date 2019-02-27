import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Counters from './components/Counters';
import Footer from './components/layout/Footer';


class App extends Component {

    state = {
     counters: [
         {id:1, value: 0},
         {id:2, value: 1},
         {id:3, value: 2}
     ]
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <Counters />
                <Footer/>
            </React.Fragment>
        )

    }
}

export default App;
