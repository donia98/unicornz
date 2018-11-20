import React, { Component } from 'react';
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer'
import workExperienceDetails from './Pages/WorkExpDetails';
import Signup from '../Components/Pages/SignUp';
import Login from '../Components/Pages/Login';
import workExperienceList from './Pages/WorkExpList';
import Category from '../Components/Pages/Category';

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
       <Header />
      <BrowserRouter>
       <div>
         <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/dash" component={Dashboard}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/workexperiencedetails" component={workExperienceDetails}/>
            <Route path="/category" component={Category}/>
            <Route path="/workexperiencelist" component={workExperienceList}/>
            <Route path="*"  component={LandingPage} />
          </Switch>
       </div>
      </BrowserRouter>
      <Footer />
      </div>
    );
  }
}


export default App;
