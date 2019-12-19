import React, { Component } from 'react'

class QuestionBottomNav extends Component {



  render() {

    const { onPreviousClicked , onNextClicked, defaultQIndex, testContentCount} = this.props

  

    return (
      <div className="flex justify-between mt-10">

        <div 
        className="cursor-pointer max-w-xs rounded-full shadow mr-4 bg-white inline-block align-top my-2"
        onClick={onPreviousClicked}
        >
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base whitespace-pre-wrap">
              <i className="fa fa-arrow-left" />
            </p>
          </div>
        </div>

        <div className="max-w-xs rounded-full shadow mr-4 bg-white inline-block align-top my-2">
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base whitespace-pre-wrap">
              {defaultQIndex+1}/{testContentCount}
            </p>
          </div>
        </div>


        <div 
        className="cursor-pointer max-w-xs rounded-full shadow mr-4 bg-white inline-block align-top my-2"
        onClick={onNextClicked}
        >
            <div className="px-6 py-4">
              <p className="text-gray-700 text-base whitespace-pre-wrap">
              <i className="fa fa-arrow-right" />
              </p>
            </div>
          </div>
      </div>

    )
  }
}


export default QuestionBottomNav
