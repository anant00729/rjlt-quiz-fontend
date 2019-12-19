import React, { Component } from 'react'
import TestCheckBox from './TestCheckBox'
import QuestionNavigator from './QuestionNavigator'
import QuestionTimer from './QuestionTimer'
import QuestionBottomNav from './QuestionBottomNav'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllQuestions , sumbitResult} from '../actions/questionActions'
import {R_USER_HOME, R_SCORE_PAGE} from '../actions/constants'




//import {withRouter} from 'react-router';

class UserTest extends Component {

  state = {
    value : 1,
    defaultQIndex : 0,
    testContent : []
  }

  toggleChange = (index) => {
    let { testContent, defaultQIndex } = this.state
    testContent[defaultQIndex].answered = index
    this.setState({
      value : index,
      testContent 
    })
  }


  componentDidMount(){
    
    if(!this.props.auth.isQuizTokenPresent){
      this.props.history.push(R_USER_HOME)
    }else {

      if(this.props.questions.testContent.length === 0){
        this.props.getAllQuestions()
      }
      
    }
    
  }

  componentWillReceiveProps(nextProps){
    if(!nextProps.auth.isQuizTokenPresent){
      this.props.history.push(R_USER_HOME)
    }
    else {
    const { score } = nextProps.auth
     if(score !== ''){
       nextProps.history.push(R_SCORE_PAGE)
     }
      //this.checkForFailedMessage(nextProps)
    }
  }

  // componentWillMount(){
  //   window.history.pushState({name: "browserBack"}, "on browser back click", window.location.href);
  // }




  // componentDidMount() {
  //   window.addEventListener('popstate', (event) => {
  //     if (event.state) {
  //       console.log('ashdjashdkjsah BACK');
  //     }
  //    }, false);
  //   window.history.pushState({name: "browserBack"}, "on browser back click", window.location.href);
  // }


  // routerWillLeave(nextState) { // return false to block navigation, true to allow
  //   if (nextState.action === 'POP') {
  //     // handle "Back" button clicks here
  //   }
  // }



  

  

  static getDerivedStateFromProps(nextProps, prevState){
    let { testContent } = nextProps.questions
    if(testContent!== prevState.testContent){
      return { testContent};
     }


     const { score } = nextProps.auth
     if(score !== ''){
       nextProps.history.push(R_SCORE_PAGE)
     }

     else return null;
 }



  onTimerOver = () => {
    const { testContent } = this.state
    const { quizToken } = this.props.auth

    console.log('timeOver')
    
    this.props.sumbitResult( testContent, quizToken)
  }

  

  render() {
    const { value, testContent, defaultQIndex } = this.state

    let quesTemp = {}
    if(testContent.length > 0){
      quesTemp = testContent[defaultQIndex]
    }

    let options = []

    console.log('testContent[defaultQIndex] :', testContent);
    console.log('defaultQIndex :', defaultQIndex);


    if(quesTemp){
      if(Object.keys(quesTemp).length > 0){
        options = quesTemp.options.map((_opt)=> {
          let isChecked
          const _k = quesTemp.options.indexOf(_opt)
          if(quesTemp.answered === -1){
            isChecked = false
          }else {
            isChecked = quesTemp.answered === _k
          }
          return (<TestCheckBox key={_k} isChecked={isChecked} index={_k} toggleChange={this.toggleChange} optionContent={_opt}/>)
        })
      }
    }
    
    // for(let i = 0 ; i < 4 ; i++){
    //   options.push()
    // }

    
    return testContent ? (
      <div className="bg-gray-200 h-full">
        <div className="lg:max-w-4xl md:max-w-2xl max-w-md block mx-auto mx-16">
          
          <QuestionTimer 
          onTimerOver={this.onTimerOver} 
          seconds={this.props.auth.timer} 
          />
          
          <QuestionNavigator 
          testContentCount={testContent.length} 
          defaultQIndex={defaultQIndex} 
          testContent={testContent}
          onJumpToAnotherQuestion={this.onJumpToAnotherQuestion}
          />
          
          {quesTemp ? 
          (<div className="bg-white rounded p-2 mt-12 shadow-md">
            <p className="mb-8 p-2 text-lg">
            <span>Q{defaultQIndex+1}.</span>&nbsp;&nbsp;&nbsp;&nbsp; {quesTemp.question}
            </p>	
            {options}
          </div>) : null}
          

          <QuestionBottomNav 
          testContentCount={testContent.length} 
          defaultQIndex={defaultQIndex} 
          onNextClicked={this.onNextClicked}
          onPreviousClicked={this.onPreviousClicked}
          />
        </div>
      </div>
      
    ) : null
  }


  onJumpToAnotherQuestion = (defaultQIndex) => {
    this.setState({
      defaultQIndex  
    })
  }


  onPreviousClicked = () => {

    let {defaultQIndex} = this.state
    let count = 0

    if(count === defaultQIndex){
      return
    }

    defaultQIndex -= 1

    this.setState({
      defaultQIndex 
    })
      
  }


  onNextClicked = () => {
    let {defaultQIndex, testContent} = this.state
    
    let count = testContent.length


    

    if(count-1 === defaultQIndex){
      return
    }
    defaultQIndex += 1

    this.setState({
      defaultQIndex 
    })
  }
  
}


UserTest.propTypes = {
  questions : PropTypes.array.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  questions : state.questions,
  auth : state.auth,
  errors : state.errors
  
})
export default connect(mapStateToProps, { getAllQuestions, sumbitResult })(UserTest)
