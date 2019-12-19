import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { R_Login, R_MAIN_TEST } from '../actions/constants';
const TestPrivateRoute = ({component : Component,auth, ...rest}) => (
    <Route 
    {...rest}
    render = {(props) => 

      
        {
          


          if(auth.isAuthenticated){

            
            return <Component {...props}/>
          } 
          else {
            
            return <Redirect to={R_Login}/>
          }
        }
      } />)

const mapStateToProps = state => ({
    auth : state.auth
})

TestPrivateRoute.propTypes = {
    auth : PropTypes.object.isRequired
}

export default connect(mapStateToProps)(TestPrivateRoute)