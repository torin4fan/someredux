import React from 'react';
import LoginForm from '../views/login-form';
import { connect } from 'react-redux';
import { loadSearchLayout } from '../../actions/search-layout-actions';

const LoginContainer = React.createClass({



    handleSubmit: function (values) {
        let searchType = store.searchLayoutState.searchType;
        values.preventDefault();

        console.log(this.refs);


        return false;
    },

    render: function () {
        return (
            <LoginForm  user={this.props.user} handleSubmit={this.handleSubmit} />
        );
    }

});

const mapStateToProps = function(store) {
    return {
        user: store.loginState.user
    };
};

export default connect(mapStateToProps)(LoginContainer);
