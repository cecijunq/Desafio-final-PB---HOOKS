const INIT_STATE = {
    finalScore: 0
}
//o reducer precisa receber um estado inicial e uma ação
const score = (state = INIT_STATE, action) => {
    switch(action.type) {
        case 'change_finalScore':
            return{...state, finalScore: action.payload.finalScore}
        default:
            return{...state};
    }
}