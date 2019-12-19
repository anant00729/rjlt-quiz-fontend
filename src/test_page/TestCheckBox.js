import React, { Component } from 'react'

 class TestCheckBox extends Component {
  render() {
    const {optionContent} = this.props
    return (
      <label>
        <div className="flex">
        <input
          type="checkbox"
          className="mt-1"
          checked={this.props.isChecked}
          onChange={() => this.props.toggleChange(this.props.index) } />
          <div className="display-none ml-2 mb-2">{optionContent}</div> 
        </div>
    </label>
    )
  }
}


export default TestCheckBox