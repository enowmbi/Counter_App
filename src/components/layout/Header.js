import React from 'react';
import './Header.css';

const Header=(props)=>{
 
 return(
     <React.Fragment>
         <nav className="header">
             <div> Total Items in cart <span className="badge badge-pill badge-success">{props.totalCounters} </span></div>
         </nav>
     </React.Fragment>
 )

}

export default Header
