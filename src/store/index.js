//é nesse arquivo onde criamos o store

import {score} from './reducers';
import { createStore, combineReducers } from 'redux';

// const reducers = combineReducers(score: finalScore, )
const store = createStore(score); //está criando o store

export default store;