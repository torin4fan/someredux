import * as types from '../actions/action-types';

const initialState = {
    email: "",
    password: ""
};

const loginReducer = function(state = initialState, action) {

    switch(action.type) {
        case types.SET_LOGIN_FORM:
            return Object.assign({}, state, {
                email: action.email,
                password: action.password
            });
    }

    return state;

};

export default loginReducer;