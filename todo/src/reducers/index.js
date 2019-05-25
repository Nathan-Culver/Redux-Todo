import { combineReducers } from 'redux'; 
import {titleReducer} from './titleReducer'; 
import todosReducer from './todosReducer';  

export default combineReducers({ 
  titleReducer, 
  todosReducer 
}); 