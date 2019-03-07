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

    handleIncrement =(counter) =>{
        const counters = [...this.state.counters] 
        const index = counters.indexOf(counter)
        counters[index].value = counters[index].value + 1
        this.setState({counters: counters})
    }

    handleDecrement =(counter) =>{
        if(counter.value !== 0){
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter)
        counters[index].value = counters[index].value -1
            this.setState({counters: counters})
        }
    }

    handleDelete=(id)=>{
        const counters = this.state.counters.filter(c => c.id !== id)
        this.setState({counters: counters})
    }

    handleReset=()=>{
        const counters = this.state.counters.map(c=>{
            c.value = 0;
            return c;
        }) ;
        this.setState({counters: counters})
    
    }


    render() {
        return(
            <React.Fragment>
                <Header totalCounters={this.state.counters.filter(c => c.value > 0).length} />
                <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} />
                <Footer/>
            </React.Fragment>
        )

    }
}

export default App;
