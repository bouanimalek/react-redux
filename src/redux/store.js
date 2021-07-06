import {createStore} from 'redux'
import rootReducer from './rootReducer';
import logger from 'redux-logger';


const store = createStore(rootReducer)


export default store;