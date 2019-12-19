// this is just one of the reducers

import { LOADING, SET_TOKEN, PROFILE_FAILED} from '../actions/constants' 
const initailState = {
 }
// on calling this.props.getProfiles() this method get called for GET_PROFILES

 export default function(state = initailState , action){
    switch(action.type){
        case PROFILE_FAILED:
        return {
            ...state,
            failedMessage : action.payload,
        }
        default : 
            return state
    }
 }
