import React, {Component} from 'react'
import Header from '../base/Header'


import { Route , Switch } from 'react-router-dom'
import NotFound from '../base/NotFound';

import {  R_Login, R_USER_HOME, R_MAIN_TEST, R_SCORE_PAGE, R_Register } from '../actions/constants';
import PrivateRoute from '../base/PrivateRoute';
import TestPrivateRoute from '../base/TestPrivateRoute';



import Login from '../menu/Login';
import Register from '../menu/Register';
import UserHomePage from '../home/UserHomePage'
import FinalSubmission from '../test_submission/FinalSubmission'

import UserTest from '../test_page/UserTest';


class Home extends Component {


  state = {
    isVisible : true
  }

  onError = () => {
    this.setState({isVisible:false})
  }
  
  render() {
    const { match } = this.props
    let isVisible = this.state

    switch(this.props.location.pathname){
      
      case R_Login:
      case R_USER_HOME:
      case R_Register:
          isVisible = true
          break;
      
      case R_MAIN_TEST:   
      default:
          isVisible = false
          break;
    }


    return ( 
    <div className="relative h-screen absolute">
              <Switch>
                
                <Route exact path={ R_Login } component={Login}/>
                <Route exact path={ R_Register } component={Register}/>
                <PrivateRoute exact path={ match.url } component={UserHomePage}/>
                <TestPrivateRoute  path={ R_MAIN_TEST } component={UserTest}/>
                <TestPrivateRoute  path={R_SCORE_PAGE} component={FinalSubmission} />
                
                <Route 
                render={(props) =>  <NotFound {...props} data='web' onError={this.onError}/>} />
              </Switch>

              {isVisible ?  <Header/> : null}
              {/* {isVisible ?  <Footer/> : null} */}

          </div>
    )
  }
}




export default Home






