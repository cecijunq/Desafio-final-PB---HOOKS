//é nesse arquivo onde criamos o store

import {score, finalAns} from './reducers';
import { createStore, combineReducers } from 'redux';

const reducers = combineReducers({score: score, answer: finalAns}) //ao usar o combineReducers, deve definir um nome ao estado
const store = createStore(reducers, window.__REDUX_STATE__); //está criando o store

export default store;