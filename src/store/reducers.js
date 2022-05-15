const INIT_STATE = {
    finalScore: 0,
    answers: [],
    answer: {},
    seconds: 0,
    minutes: 0
}
//o reducer precisa receber um estado inicial e uma ação
export const score = (state = INIT_STATE, action) => {
    switch(action.type) {
        case 'change_finalScore':
            return{...state, finalScore: action.payload.finalScore}
        case 'change_answers':
            return{...state, answers: action.payload.answers}
        case 'change_answer':
            return{...state, answer: action.payload.answer}
        case 'set_seconds':
            return{...state, seconds: action.payload.seconds}
        case 'set_minutes':
            return{...state, seconds: action.payload.minutes}
        default:
            return{...state};
    }
}

//reducer PRECISA ter um default que retorne o estado. Senão, ele nunca será inicializado

//REDUCER: DEFINE O ESTADO --> STORE: GUARDA O ESTADO, para que todos possam ouvi-lo

//o reducer é quse como se fosse o estado. Ele define o estado inicial

//combineReducers: é quem combina diferentes reducers --> passa a ter várias variáveis