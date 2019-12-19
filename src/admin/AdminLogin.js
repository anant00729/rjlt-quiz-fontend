import React, { Component } from 'react'

import app_img from '../app_img.jpg';
import TextInputgroup from '../base/TextInputGroup'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { initLogin } from '../actions/authActions'
import { R_Quiz_Results } from '../actions/constants'


class AdminLogin extends Component {


  state = {
    isToggleOn: true, 
    email : '',
    password : '',
    errors : {}
  };


  onChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
  }


  componentDidMount(){
    if(this.props.auth.isAdminAuthenticated){
      this.props.history.push(R_Quiz_Results)
    }
  }

  componentWillReceiveProps(nextProps){
    console.log('nextProps :', nextProps);
    if(nextProps.auth.isAdminAuthenticated){
      this.props.history.push(R_Quiz_Results)
    }
    else {
      this.checkForFailedMessage(nextProps)
    }
  }


  checkForFailedMessage = (nextProps) => {

    
    const { failedMessage  } = nextProps.auth
    
    if(failedMessage){
    let errors = {}
   
      if(failedMessage !== ''){
          errors.password = failedMessage
          this.setState({ errors })
          return
      }
    }
  }

  initLogin = (e) => {
    e.preventDefault()

    
    const {  email , password } = this.state
    let errors = {}
    
   
    if(email === ''){
        errors.email = 'Email is required' 
        this.setState({ errors })
        return
    } 
    if(password === ''){
        errors.password = 'Password is required' 
        this.setState({ errors })
        return
    }


    const pro = { email , password }
    this.props.initLogin(pro, 'admin');
  }


  render() {

    const {  email , password, errors } = this.state
    return (
      <div className="w-full h-screen flex justify-center flex-col bg-gray-900">

      <div className="w-24 content-center mx-auto admin-form-width flex-col flex justify-center">
        <img src={app_img} className="rounded-full shadow-md border-2 border-white-500 w-24 h-24 self-center mb-4"alt="asdasd"/>
        <p className="text-gray-500 mt-1 text-md text-center my-8">Test Admin</p>
      </div>

      <form 
      onSubmit={this.initLogin}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 self-center admin-form-width" >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <TextInputgroup
              name = "email" 
              label = "Email"
              value = {email}
              placeholder = ""
              type = "email" 
            onChange = {this.onChange}
            error = { errors.email }
            />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <TextInputgroup
            name = "password" 
            label = "Password"
            value = {password}
            placeholder = ""
            type = "password" 
            onChange = {this.onChange}
            error = { errors.password }
          />
        </div>
        <div className="flex items-center justify-between">

        <input type="submit" value="Login"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />

          
          {/* <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
            Forgot Password?
          </Link> */}
        </div>
      </form>
      
    </div>
    )
  }
}


AdminLogin.propTypes = {
  loginUser : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth : state.auth,
  errors : state.errors
})



export default connect(mapStateToProps, { initLogin })(AdminLogin)


