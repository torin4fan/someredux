import * as types from './action-types';

export function setLoginForm(user) {
    return {
        type: types.SET_LOGIN_FORM,
        user
    };
}