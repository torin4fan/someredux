import React from 'react';
import LoginForm from '../views/login-form';

const LoginContainer = React.createClass({



    handleSubmit: function (values) {
        values.preventDefault();

        console.log(this.refs);


        return false;
    },

    render: function () {
        return (
            <LoginForm handleSubmit={this.handleSubmit} />
        );
    }

});

export default LoginContainer;
