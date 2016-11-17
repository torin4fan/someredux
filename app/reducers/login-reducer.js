import * as types from '../actions/action-types';

const initialState = {
    user: {
        login: "",
        password: ""
    }
};

const loginReducer = function(state = initialState, action) {

    switch(action.type) {
        case types.SET_LOGIN_FORM:
            return Object.assign({}, state, { user: action.user });
    }

    return state;

};

export default loginReducer;