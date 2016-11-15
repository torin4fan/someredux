import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default React.createClass({


    render: function() {
        console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit}>
                <TextField
                    hintText="Login"
                    floatingLabelText="Login"
                /><br />
                <TextField
                    hintText="Password"
                    floatingLabelText="Password"
                    type="password"
                /><br />
                <RaisedButton label="Login" type="submit" />
            </form>

        );
    }

});
