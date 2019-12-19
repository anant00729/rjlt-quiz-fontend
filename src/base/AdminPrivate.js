import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { R_Admin } from '../actions/constants';


const AdminPrivate = ({component : Component,auth, ...rest}) => (
    <Route 
    {...rest}
    render = {props => 
        auth.isAdminAuthenticated === true ? 
        (<Component {...props}/>) 
        : 
        (<Redirect to={R_Admin}/>)}
    />
)

const mapStateToProps = state => ({
    auth : state.auth
})

AdminPrivate.propTypes = {
    auth : PropTypes.object.isRequired
}

export default connect(mapStateToProps)(AdminPrivate)