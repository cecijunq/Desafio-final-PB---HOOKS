export const changeScore = (finalScore) => {
    return {type: 'change_finalScore', payload: {finalScore: finalScore}}
}

export const registerAnswers = (answers) => {
    return {type: 'add_answer', payload: {answers: answers}}
}

export const changeSeconds = (seconds) => {
    return {type: 'set_seconds', payload: {seconds: seconds}}
}

export const changeMinutes = (minutes) => {
    return {type: 'set_minutes', payload: {minutes: minutes}}
}

//reduxtunk: possibilita que uma action seja disparada assincronamente

//payload: é como se fosse um 'caminhãozinho' que guarda a variável que tá sendo alterada