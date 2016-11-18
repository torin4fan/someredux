import React, { PropTypes } from 'react';
import LoginForm from '../views/login-form';
import store from '../../store';
import { setLoginForm } from '../../actions/login-actions'
import { browserHistory } from 'react-router'

const LoginContainer = React.createClass({

    getInitialState: function () {
        return {
            loginValidate: "",
            passwordValidate: ""
        }
    },

    validateEmail: function (email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },

    validation: function (el, val) {

        const errorMsg = {
            required: "This field is required",
            email: "The email is not valid",
            symbols: "Create password with 6 and more symbols"
        };

        if (val.length === 0 && el === 'email') {
            this.setState({loginValidate: errorMsg.required});
            return false;
        }
        else if (val.length === 0 && el === 'password') {
            this.setState({passwordValidate: errorMsg.required});
            return false;
        }
        else if (el === 'email') {
            let emailValid = (this.validateEmail(val)) ? '' : errorMsg.email;
            this.setState({loginValidate: emailValid});
        }
        else if (el === 'password') {
            let passwordValid = (val.length < 6) ? errorMsg.symbols : '';
            this.setState({passwordValidate: passwordValid});
        }
    },

    onFieldChange: function (event)  {
        this.validation(event.target.name, event.target.value);
    },

    handleSubmit: function(data) {
        data.preventDefault();

        let checkEmail = this.validation(data.target.email.name, data.target.email.value);
        let checkPass = this.validation(data.target.password.name, data.target.password.value);

        if(checkEmail === undefined && checkPass === undefined && this.state.loginValidate.length === 0 && this.state.passwordValidate.length === 0) {
            store.dispatch(setLoginForm(data.target.email.value, data.target.password.value));
            browserHistory.push('/');
        }
    },

    render: function () {
        return (
            <LoginForm
                validate={this.state}
                onFieldChange = {this.onFieldChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }

});

export default LoginContainer;
