import React,{ Component } from 'react';
import Counter from '../components/Counter';

class Counters extends Component {

    state = {
     counters: [
         {id:1, value: 0},
         {id:2, value: 1},
         {id:3, value: 2}
     ]
    }

    render(){
        return(

            <Counter />
        
        
        )
    
    
    }

}

export default Counters
