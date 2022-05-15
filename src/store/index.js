//é nesse arquivo onde criamos o store

import {score} from './reducers';
import { createStore } from 'redux';

const store = createStore(score); //está criando o store

export default store;