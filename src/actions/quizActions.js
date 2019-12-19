import {  FAILED, ADMIN_TOKEN, GET_ALL_RESULTS} from './constants'
import axios from 'axios'



export const getAllQuizeResults = () => async dispatch => {
    //dispatch({ type : LOADING })
    const req_d = {}
    req_d.token = localStorage.getItem(ADMIN_TOKEN)
    
    const res = await axios.post('/api/quiz/getAllResults', req_d)

    const res_d = res.data

    if(res_d.Status){
        console.log('res_d :', res_d.quizResList);        
        const action = {type : GET_ALL_RESULTS,payload : res_d.quizResList}
        dispatch(action)
        
    }else {
        const action = {type : FAILED ,payload : res_d.Message}
        dispatch(action)
    }

    
}







