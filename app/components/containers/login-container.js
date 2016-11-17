import React, { PropTypes } from 'react';
import LoginForm from '../views/login-form';
import {connect} from 'react-redux';

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

    validation: function (element) {

        const errorMsg = {
            required: "This field is required",
            email: "The email is not valid",
            symbols: "Create password with 6 and more symbols"
        };

        if (element.target.value.length === 0) {
            return errorMsg.required;
        }
        else if (element.target.name === 'email') {
            return (this.validateEmail(element.target.value)) ? '' : errorMsg.email;
        }
        else if (element.target.name === 'password') {
            return (element.target.value.length < 6) ? errorMsg.symbols : '';
        }
    },

    onFieldChange: function (event, val)  {
        let result = this.validation(event);

        switch (event.target.name) {
            case 'email':
                this.setState({loginValidate: result});
                break;
            case 'password':
                this.setState({passwordValidate: result});
                break;
            default:
               return false;
        }
    },

    handleSubmit: function(data) {
        data.preventDefault();
        console.log('Submission received!', data.target.password.value);


        //console.log(this.refs);

        return false;
    },

    render: function () {
        return (
            <LoginForm
                user={this.props}
                validate={this.state}
                onFieldChange = {this.onFieldChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }

});

const mapStateToProps = (store) => {
    return {
        user: store.loginState.user
    };
};

export default connect(mapStateToProps)(LoginContainer);
