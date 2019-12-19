import { GET_QUESTIONS, FAILED } from './constants'
import axios from 'axios'
import questionData from '../test.json'
import { TOKEN, ON_QUIZ_SUBMIT } from '../actions/constants';


export const getAllQuestions = () => async dispatch => {
    //dispatch({ type : LOADING })
    const req_d = {}
    req_d.token = localStorage.getItem(TOKEN)
    const res = await axios.post('/api/quiz/getAllQuestions', req_d)

    const res_d = res.data
    //const res_d = questionData 

    

    if(res_d.Status){
        const action = {type : GET_QUESTIONS ,payload : res_d.questions}
        dispatch(action)
        
    }else {
        const action = {type : FAILED ,payload : res_d.Message}
        dispatch(action)
    }

    
}


export const sumbitResult = (testContent, quizToken) => async dispatch => {
    

    const req_d = {questions : testContent,quizToken}
    req_d.token = localStorage.getItem(TOKEN)
    const res = await axios.post('/api/quiz/summitScore', req_d)

    const res_d = res.data

    if(res_d.Status){
        const action = {type : ON_QUIZ_SUBMIT ,payload : res_d}
        dispatch(action)
        
    }else {
        const action = {type : FAILED ,payload : res_d.Message}
        dispatch(action)
    }

    
}







