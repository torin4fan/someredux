import * as types from './action-types';

export function setLoginForm(email, password) {
    return {
        type: types.SET_LOGIN_FORM,
        email,
        password
    };
}