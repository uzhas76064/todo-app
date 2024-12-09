import {combineReducers} from 'redux';
import todoReducers from './todos';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    todoReducers,
    form: formReducer
})
