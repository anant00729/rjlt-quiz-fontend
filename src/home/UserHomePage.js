import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { R_MAIN_TEST } from '../actions/constants'
import TextInputgroup from '../base/TextInputGroup'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { creatQuizSession  } from '../actions/authActions'

class UserHomePage extends Component {



  static getDerivedStateFromProps(nextProps, prevState){
    
    let { isQuizTokenPresent} = nextProps.auth
    if(isQuizTokenPresent){
      nextProps.history.push(R_MAIN_TEST)
    }
    else return null;
  }


  

  onStartClick = () => {
    const { history , creatQuizSession } = this.props
    creatQuizSession(history)
  }

  render() {
    return (
      <div className="pt-20 h-full bg-gray-200">
        <p className="text-center text-2xl">
          Marking Scheme
        </p>
        <ol className="mx-20 mt-8 max-w-sm md:max-w-lg mx-auto md:text-xl md:text-sm md:text-left" style={{ listStyleType: "decimal" }}>
          <li>For every correct answer, 1 marks will be given.</li> 
          <li>For every incorrect answer, 0 marks will be deducted.</li> 
          <li>No marks will be given for the unattempted questions.</li> 
        </ol>





      <div className="mt-8 max-w-md md:max-w-xl mx-auto md:text-xl md:text-sm md:text-left">
          <div className="flex">

            <div 
                className={`cursor-pointer max-w-xs rounded-full mr-4 w-16 align-top my-2 shadow-md bg-white text-gray-700 block`}
                >
               <div className="px-6 py-4">
                 <p className="text-base whitespace-pre-wrap text-center">
                  {1}
                 </p>
                 
               </div>
              </div>
              <p className="self-center">Not Answered</p>
          </div>
  
            <div className="flex">
              <div 
                className={`cursor-pointer max-w-xs rounded-full mr-4 w-16 align-top my-2 shadow-md bg-indigo-500 text-white`}
                >
               <div className="px-6 py-4">
                 <p className="text-base whitespace-pre-wrap text-center">
                  {1}
                 </p>
                 
               </div>
              </div>
              <p className="self-center">Current Question</p>
            </div>
  
            <div className="flex align-middle">
              <div 
                className={`cursor-pointer max-w-xs rounded-full mr-4 w-16 align-top my-2 shadow-md bg-white text-gray-700 border-indigo-500 border-2`}
                >
               <div className="px-6 py-4">
                 <p className="text-base whitespace-pre-wrap text-center">
                  {1}
                 </p>
                 
               </div>
              </div>
              <p className="self-center">Answered Question</p>
            </div>

      </div> 
       
        <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline
          mt-8
         self-center block mx-auto shadow w-24 text-center"
         onClick={this.onStartClick}
         >
          Start
        </button>
        
      </div>
    )
  }
}


UserHomePage.propTypes = {
  loginUser : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth : state.auth,
  errors : state.errors
})



export default connect(mapStateToProps, { creatQuizSession })(UserHomePage)



