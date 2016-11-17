import { combineReducers } from 'redux';


// Reducers
import userReducer from './user-reducer';
import widgetReducer from './widget-reducer';
import searchLayoutReducer from './search-layout-reducer';
import LoginReducer from './login-reducer';

// Combine Reducers
let reducers = combineReducers({
    userState: userReducer,
    widgetState: widgetReducer,
    searchLayoutState: searchLayoutReducer,
    loginState: LoginReducer
});

export default reducers;
