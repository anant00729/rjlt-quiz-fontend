import { SET_TOKEN , AUTH_FAILED , SET_ADMIN_TOKEN, CREATE_QUIZ_SESSION, ON_QUIZ_SUBMIT, DISPOSE_QUIZ_SUBMIT, ON_TIMER_CHANGE} from '../actions/constants'



const initialState = {
    isAuthenticated : false,
    isAdminAuthenticated : false,
    isQuizTokenPresent : false,
    token : '',
    adminToken : '',
    quizToken : '',
    failedMessage: '',
    score : '',
    timer : 600
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_TOKEN:
        let { token } = action.payload    
        let isAuthenticated = false
        if(token){
            isAuthenticated = true
        }else {
            token = ''
        }

        
        return {
            ...state,
            isAuthenticated,
            token : token,
            failedMessage: ''
        }


        case SET_ADMIN_TOKEN:
        
        let  adminToken  = action.payload.token
        let isAdminAuthenticated = false
        if(adminToken){
            isAdminAuthenticated = true
        }else {
            adminToken = ''
        }

        
        return {
            ...state,
            isAdminAuthenticated,
            adminToken,
            failedMessage: ''
        }

        case CREATE_QUIZ_SESSION:
        
            let  quizToken  = action.payload
            let isQuizTokenPresent = true

            return {
                ...state,
                quizToken,
                isQuizTokenPresent,
                failedMessage: '',
                
            }


        case ON_QUIZ_SUBMIT:
        return {
            ...state,
            score : action.payload.finalScore
        }

        case AUTH_FAILED:
        return {
            ...state,
            failedMessage : action.payload,
        }

        case DISPOSE_QUIZ_SUBMIT:
        return {
            ...state,
            isQuizTokenPresent : false,
            quizToken : '',
            score : '',
        }



        case ON_TIMER_CHANGE:
        return {
            ...state,
            timer : action.payload
        }

        default:
            return state
    }
}