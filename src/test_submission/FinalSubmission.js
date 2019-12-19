import React, { Component } from 'react'
import { R_USER_HOME } from '../actions/constants'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllQuestions } from '../actions/questionActions'
import { onClose } from '../actions/authActions'





class FinalSubmission extends Component {


  componentDidMount(){
    
    if(!this.props.auth.isQuizTokenPresent){
      this.props.history.push(R_USER_HOME)
    }else {
      this.props.getAllQuestions()
    }
    
  }


  onClose = () => {
    this.props.onClose()
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.auth.isQuizTokenPresent){
      this.props.history.push(R_USER_HOME)
    }
  }
  render() {
    return (
      <div className="pt-20 h-full bg-gray-200">
        
        <div className="mx-20 mt-8 max-w-sm md:max-w-lg mx-auto md:text-xl md:text-sm md:text-left ">
        
          <i className="fa fa-check-circle  text-center w-full text-green-400 text-6xl" />
          <p className="text-center text-2xl ">
            Finised
          </p>
    <p className="text-center mt-8">You scored {this.props.auth.score}</p>
        </div>
     
       
        <button
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline
          mt-8
         self-center block mx-auto shadow w-24 text-center"
         onClick={this.onClose}
         >
          Close
        </button>
        
      </div>
    )
  }
}


FinalSubmission.propTypes = {
  questions : PropTypes.array.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  questions : state.questions,
  auth : state.auth,
  errors : state.errors
  
})
export default connect(mapStateToProps, { getAllQuestions, onClose })(FinalSubmission)


