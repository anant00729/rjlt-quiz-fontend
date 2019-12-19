// this is going to be root reducers
import { combineReducers } from 'redux'
import profileReducer from './profileReducer' 
import authReducer from './authReducer' 
import questionsReducers from './questionsReducers' 
import quizResultReducer from './quizResultReducer' 



export default combineReducers({
    profile : profileReducer,
    auth : authReducer,
    questions : questionsReducers,
    quizResults : quizResultReducer 
})