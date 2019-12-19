import React, { Component } from 'react'

export default class BreadCrum extends Component {
  render() {
    
    return (
      <div className="bg-indigo-700 p-2 shadow text-xl text-white mt-12 fixed w-full z-20">
        <h3 className="font-bold pl-2">{this.props.name}</h3>
      </div>  
    )
  }
}
