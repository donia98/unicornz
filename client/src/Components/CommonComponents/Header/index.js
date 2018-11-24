import React from 'react';
import logo from './logo.png'
import { withRouter } from "react-router";
import './style.css';
import alertify from 'alertifyjs';

class HeaderComp extends React.Component {


    signupClickHandler = () => {
        this.props.refreshAppModalState('Signup',true,70,65)
     }

     loginClickHandler = () => {
        this.props.refreshAppModalState('Login',true,40,40)
     }

     userClickHandler = () =>{
        this.props.history.push('/dash')
     }

     signoutClickHandler = () =>{
         fetch('/logout').then(()=>{
             this.props.updateLoggingInfo();
             alertify.set('notifier','position', 'top-center');
             alertify.success('logged out successfuly')
         })
     }
     
    render(){
    return (
        <div className="header">
            <img className="header-img" src={logo} alt="logo" />
            <ul className="header-nav">
                {(this.props.loggedIn==='loggedout')? <li onClick={this.loginClickHandler}>Login</li>:<li onClick={this.userClickHandler}>Hello {this.props.userInfo.first_name}</li>}
                {(this.props.loggedIn==='loggedout')? <li onClick={this.signupClickHandler}>Sign up</li>:<li onClick={this.signoutClickHandler}>Sign out</li>}
            </ul>
        </div>
    );
}
}


export default withRouter(HeaderComp);