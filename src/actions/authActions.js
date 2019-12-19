import { SET_TOKEN, AUTH_FAILED, SET_ADMIN_TOKEN, ADMIN_TOKEN, NOR , ADMIN, R_Login, R_MAIN_TEST, CREATE_QUIZ_SESSION, FAILED, DISPOSE_QUIZ_SUBMIT, ON_TIMER_CHANGE} from './constants'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken';

import { TOKEN, REGISTER_SUCCESS, TEST_TOKEN } from '../actions/constants';


export const initLogin = (p, type = 'nor') => async dispatch => {
    //dispatch({ type : LOADING })
    p.type = type
    const res = await axios.post('/api/auth/login', p)

    const res_d = res.data

    if(res_d.Status){
        // set token to localstorage
        if(type === 'nor'){
            localStorage.setItem(TOKEN, res_d.token)
            dispatch(setCurrentUser(res_d))
        }else {
            localStorage.setItem(ADMIN_TOKEN, res_d.token)
            dispatch(setCurrentAdmin(res_d))
        }
        
        
    }else {
        const action = {type : AUTH_FAILED,payload : res_d.Message}
        dispatch(action)
    }

    
}


export const initLogout = (type) => async dispatch => {
    //dispatch({ type : LOADING })
    let token = ''
    if(type === NOR){
        token = localStorage.Token
    }else {
        token = localStorage.Admin_Token
    }
    const req_d = { token }
    const res = await axios.post('/api/auth/logout', req_d)
    const res_d = res.data
    

    if(res_d.Status){
        if(type === NOR){
            localStorage.removeItem(TOKEN)
            setAuthToken(false)
            dispatch(setCurrentUser({}))
        }else {
            localStorage.removeItem(ADMIN_TOKEN)
            //setAuthToken(false)
            dispatch(setCurrentAdmin({}))
        }
        
        
        
    }else {
        const action = {type : AUTH_FAILED, payload : res_d.Message}
        dispatch(action)
    }

    
}


export const initRegister = (p,history) => async dispatch => {

    const res = await axios.post('/api/auth/register', p)

    const res_d = res.data

    if(res_d.Status){
        // set token to localstorage
        
        history.push(R_Login)
        const action = {type : REGISTER_SUCCESS ,payload : res_d.Message}
        dispatch(action)
        
    }else {
        const action = {type : AUTH_FAILED,payload : res_d.Message}
        dispatch(action)
    }

    
}


export const onClose = () => async dispatch => {
    const action = {type : DISPOSE_QUIZ_SUBMIT ,payload : {}}
    dispatch(action)
}


export const onTimerChange = (timer) => async dispatch => {
    const action = {type : ON_TIMER_CHANGE ,payload : timer}
    dispatch(action)
}





export const creatQuizSession = (history) => async dispatch => {

    let p = localStorage.getItem(TOKEN)

    const res = await axios.post('/api/quiz/createQuizSession', {token : p})
    const res_d = res.data

    if(res_d.Status){
        
        const action = {type : CREATE_QUIZ_SESSION ,payload : res_d.token}
        dispatch(action)
        
    }else {
        const action = {type : FAILED,payload : res_d.Message}
        dispatch(action)
    }

    
}





// set logged in user
export const setCurrentUser = decoded => {
    return {
        type : SET_TOKEN,
        payload : decoded
    }
}


// set logged in user
export const setCurrentAdmin = decoded => {
    return {
        type : SET_ADMIN_TOKEN,
        payload : decoded
    }
}

    


