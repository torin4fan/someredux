import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default React.createClass({

    getQuery: function() {
        return this.refs.login.value;
    },

    render: function() {
        const { handleSubmit, onFieldChange, validate } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    onChange={onFieldChange}
                    ref="login"
                    type="text"
                    defaultValue=""
                    errorText={validate.loginValidate}
                    name="email"
                /><br />
                <TextField
                    ref="password"
                    hintText="Password"
                    floatingLabelText="Password"
                    onChange={onFieldChange}
                    type="password"
                    defaultValue=""
                    errorText={validate.passwordValidate}
                    name="password"
                /><br />
                <RaisedButton label="Log In" type="submit" />
            </form>

        );
    }

});
