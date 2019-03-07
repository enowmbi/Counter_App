import React,{ Component } from 'react';

class Counter extends Component {

    state ={
        count:this.props.counter.value
    }


    formatCount =(value) =>{
        return value === 0 ? 'zero':value        
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-"
        classes += this.state.count === 0 ? "warning" : "primary"
        return classes
    }

    getStyle(counter){
        let style = "btn btn-secondary "
        style += this.state.count === 0 ? "disabled" : "active"
        return style
    }

    render(){
        return(
            <div>
                <p>
                    <span className={this.getBadgeClasses()}>{this.props.counter.value}</span>

                    <button className="btn btn-primary" style={{marginLeft:'20px'}} onClick={() => this.props.onIncrement(this.props.counter)}> + </button>
                    <button className ={this.getStyle()} style={{marginLeft:'20px'}} onClick={() => this.props.onDecrement(this.props.counter)}> - </button>
                    <button className ="btn btn-danger" style={{marginLeft: '20px'}}onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                </p>
            </div> 
        )
    }

}

export default Counter
