import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'
import app_img from '../app_img.jpg';



import { initLogin  } from '../actions/authActions'

import { R_Register } from '../actions/constants'
import TextInputgroup from '../base/TextInputGroup'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class Login extends Component {

  constructor(props){
    super(props)
    this.state = {isToggleOn: true, 
      email : '',
      password : '',
      errors : {}
    };
  }


  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/')
    }
    else {
      this.checkForFailedMessage(nextProps)
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
    this.props.initLogin(pro, 'nor');
  }

 


 

  onChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
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

  render() {
    const {  email , password, errors } = this.state
    
    return (

      
      <div className="w-full relative pt-12 mb-24">
        <div className="fixed overflow-hidden top-0 w-full h-screen flex flex-col overflow-y-auto items-center bg-gray-200">
                <div className="flex-1 flex flex-col justify-center text-center max-w-sm w-full px-8">
                
                  <div className="w-24 content-center mx-auto">
                        <img src={app_img} className="rounded-full shadow-md border-2 border-white-500"alt="asdasd"/>
                        <p className="text-black mt-1 text-2xl">Evaluator</p>
                  </div>
  
                  <div className="py-2 -mt-4 bg-gray-20 flex-col content-start justify-start">

                  <form onSubmit={this.initLogin}>

                  <p className="text-gray-700 mt-2 text-left">Email</p>
                    <div className="mt-2">

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
  
                    <p className="text-gray-700 mt-2 text-left">Password</p>
                    <div className="mt-2">
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
                    <div className="flex mt-4">


                    <input type="submit" value="Login"
                      className="inline-block border-solid border border-white
                      cursor-pointer
                      mx-auto
                      mt-4
                      text-white px-8 py-3 uppercase tracking-wider 
                      text-xs font-semibold rounded-lg shadow-md 
                      w-full
                      hover:bg-white hover:text-black
                      bg-indigo-500
                      text-center
                      search-btn-text"
                    />



                    </div>
                  </form>
                    <div className="flex mt-1">

                    <Link className="
                    cursor-pointer
                        inline-block border-solid border border-white
                        mx-auto
                        mt-4
                        text-white px-8 py-3 uppercase tracking-wider 
                        text-xs font-semibold rounded-lg shadow-md 
                        w-full
                        hover:bg-white hover:text-black
                        bg-indigo-500
                        text-center
                        search-btn-text
                        "
                        to={R_Register}
                        >Register</Link>
                    </div>
  
                  
              </div>
              </div>
        </div>
      </div>
      )
  }
}


Login.propTypes = {
  loginUser : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth : state.auth,
  errors : state.errors
})



export default connect(mapStateToProps, { initLogin })(Login)
