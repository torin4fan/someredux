import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default React.createClass({


    render: function() {
        const { handleSubmit, onFieldChange, validate } = this.props;

        return (
            <form onSubmit={handleSubmit} className="form">
                <TextField
                    hintText="Email"
                    floatingLabelText="Email"
                    onChange={onFieldChange}
                    type="text"
                    defaultValue=""
                    errorText={validate.loginValidate}
                    name="email"
                /><br />
                <TextField
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
