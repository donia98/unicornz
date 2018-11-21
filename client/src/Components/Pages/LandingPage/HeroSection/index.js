import React from 'react';
import './style.css'
import start1 from './images/start1.svg';

class HeroComp extends React.Component {

 onClickHandler = () => {
   this.props.history.push('/signup');
}

render(){
 return (

    <div className = "hero">
        <div className="left">
        <div className = "mato">
            Where Girls Become the Future
            <i class="fas fa-star top-left"></i>
            <i class="fas fa-star top-right"></i>
            <i class="fas fa-star bottom-left"></i>
            <i class="fas fa-star bottom-right"></i>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation.</p>
        <button className="signup-button" type="button">Sign up!</button>
        </div>
          <div className="right">
            <img  className ="star1" src = {start1} alt = "" />
          </div>

    </div>

    
 );
}
}

export default HeroComp


