import { GET_ALL_RESULTS} from '../actions/constants'



const initialState = {
    all_results : [],
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ALL_RESULTS: 
        return {
            ...state,
            all_results : action.payload,
        }
        
        default:
            return state
    }
}