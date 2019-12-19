import React, { Component } from 'react'
import classnames from 'classnames'

class QuestionNavigator extends Component {


  state = {
    testContentCount : 0,
    defaultQIndex : 0,
    testContent : []
  }

  static getDerivedStateFromProps(nextProps, prevState){
    let { testContentCount , defaultQIndex } = nextProps
    if(testContentCount!== prevState.testContentCount){
      return { testContentCount , defaultQIndex };
     }
     else return null;
 }


 
  

  render() {
    const { testContentCount, defaultQIndex , onJumpToAnotherQuestion, testContent} = this.props

    
    let m_t = []


    m_t = testContent.map((_testObj) => {
      let i = testContent.indexOf(_testObj)
      let _itemSelectedcolor = "bg-white text-gray-700"
      if(defaultQIndex === i){
        _itemSelectedcolor = "bg-indigo-500 text-white"
      }else if(_testObj.answered !== -1){
        _itemSelectedcolor = "bg-white text-gray-700 border-indigo-500 border-2"
      }
      
      return (
        <div 
        className={`cursor-pointer max-w-xs rounded-full mr-4 inline-block align-top my-2 shadow-md ${_itemSelectedcolor}`}
        onClick={() => onJumpToAnotherQuestion(i)}
        >
           <div className="px-6 py-4">
             <p className="text-base whitespace-pre-wrap">
              {i + 1}
             </p>
           </div>
        </div>)
    })

   
    return (
      <div>
        <div className="w-full min-w-full hor-list pb-8 overflow-x-auto whitespace-no-wrap mt-2">    
          {m_t}
        </div>
      </div>
    )
  }
}

export default QuestionNavigator
