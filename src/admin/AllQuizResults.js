import React, { Component } from 'react'
import { getAllQuizeResults } from '../actions/quizActions'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class AllQuizResults extends Component {


  state = {
    all_results : []
  }


  componentDidMount = () => {
    window.scrollTo(0, 0)
    this.props.getAllQuizeResults();
  }


  static getDerivedStateFromProps(nextProps, prevState){

    console.log('nextProps :', nextProps);
    let { all_results } = nextProps.quizResults

    if(all_results!==prevState.all_results){
      return { all_results};
     }
     else return null;
 }



  render() {

    let { all_results } = this.state

    console.log('all_results :', all_results);
    
    let _td = []
    
    _td = all_results.map((_a) => {
      
      
      return (
        <tr className="hover:bg-gray-100" key={_a.id}>
              
              <td className="py-4 px-6 border-b">{_a.name}</td>
                <td className="py-4 px-6 border-b">{_a.email}</td>
                <td className="py-4 px-6 border-b">
                  {_a.score}
                </td>
        </tr>
      )
    })

    return (
      <div className="bg-white shadow-md rounded my-6">
          <table className="text-left w-full border-collapse"> 
            <thead>
              <tr>
                <th className="w-20 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b">Name</th>
                <th className="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b">Email</th>
                <th className="w-56 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b">Score</th>
              </tr>
            </thead>
            <tbody>
              {_td}
            </tbody>
          </table>  
        </div>
    )
  }
}


AllQuizResults.propTypes = {
  quizResults : PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
  quizResults : state.quizResults,
  
})


export default connect(mapStateToProps, { getAllQuizeResults })(AllQuizResults)
