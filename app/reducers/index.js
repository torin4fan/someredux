import { combineReducers } from 'redux';


// Reducers
import LoginReducer from './login-reducer';

// Combine Reducers
let reducers = combineReducers({
    loginState: LoginReducer
});

export default reducers;
