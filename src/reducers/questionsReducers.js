// this is just one of the reducers

import { GET_QUESTIONS , ON_QUIZ_SUBMIT } from '../actions/constants' 
//import testContent from '../test.json'
const initailState = {
  testContent : [],
  
 }
// on calling this.props.getProfiles() this method get called for GET_PROFILES

 export default function(state = initailState , action){

    switch(action.type){
        case GET_QUESTIONS:
        return {
            ...state,
            testContent : action.payload,
        }
        
        default : 
            return state
    }
 }
