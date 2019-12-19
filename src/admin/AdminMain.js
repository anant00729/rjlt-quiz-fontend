import React, {
  Component
} from 'react'


import TopBar from './common/TopBar';
import AdminNavSide from './common/AdminNavSide';
import BreadCrum from './common/BreadCrum';
import AdminLogin from './AdminLogin';
import AllQuizResults from './AllQuizResults';
import classnames from 'classnames'
import NotFound from '../base/NotFound'
import AdminPrivate from '../base/AdminPrivate';

import {
     R_Admin, R_Quiz_Results
} from '../actions/constants';

import { Route , Switch } from 'react-router-dom'


class AdminMain extends Component {


  state = {
    isVisible : true
  }

  onError = () => {
    this.setState({isVisible:false})
  }

  render() {
    let isVisible = this.state
    switch(this.props.location.pathname){
      case R_Quiz_Results:
          isVisible = true
          break;
      case R_Admin:
      default:
          isVisible = false
          break;
    }

    return (
      <div>

        {isVisible ? <TopBar/> : null}
        <div className={classnames('', {'flex flex-col md:flex-row bg-gray-900' : isVisible})}>
        {isVisible ? <AdminNavSide/> : null}
        <div 
        className={classnames('', {'main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5' : isVisible})}>
        {isVisible ? <BreadCrum name={'Quiz Results'}/> : null}
          <div className={classnames('', {'w-full px-6 mt-32' : isVisible})}>
            <Switch>
              <Route exact path={R_Admin} component={AdminLogin} />
              
              <AdminPrivate exact path={R_Quiz_Results} component={AllQuizResults}/>
              
              <Route 
                render={(props) =>  <NotFound {...props} data='admin' onError={this.onError}/>}/>
            </Switch>
          </div>
          
        </div>
        </div>
      </div>          

      
    );
  }
}


export default AdminMain