import React,{ Component } from 'react';
import Counter from '../components/Counter';

class Counters extends Component {

    render(){
        return(
            <div>
                <p>
                    <button className ="btn btn-primary m-2" onClick={this.props.onReset}>Reset</button>
                </p>
                {this.props.counters.map(counter =>(
                <Counter key={counter.id} onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} onDecrement={this.props.onDecrement} counter={ counter }  />
                
                    ))}
            </div>
        )
    }

}

export default Counters
