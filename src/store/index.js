import { createStore } from 'redux';
import {score} from './reducers';

const store = createStore(rootReducer); //está criando o store


export default store;