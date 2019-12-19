import React,{ Component, Fragment } from 'react';
import Home from './home/Home';
import {withRouter} from 'react-router-dom';
import { R_Admin, R_USER_HOME  } from './actions/constants';
import {  Route  } from 'react-router-dom'
import './App.css';
import AdminMain from './admin/AdminMain';

class RHome extends Component {
  render(){
    const { pathname } = this.props.location
    const isP = !pathname.includes(R_Admin)
    return (
      <Fragment>
        { isP ? 
        <Route path={R_USER_HOME} component={Home} />
        :
        <Route path={R_Admin} component={AdminMain} />
      }
      </Fragment>
      
    );
  }
}

export default withRouter(RHome);
