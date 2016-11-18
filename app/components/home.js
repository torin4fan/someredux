import React from 'react';
import {connect} from 'react-redux';

const Home = React.createClass({
    render: function () {
        return (
            <div className="home-page">
                <h1>The app is now using Redux</h1>
                <p>We can try to Login</p>

                <div className={this.props.email.length > 0 ? '':'none'}>
                    <h3>Our user</h3>
                    <p><strong>Email: </strong> {this.props.email}</p>
                </div>
            </div>
        );
    }
});


const mapStateToProps = (store) => {
    return {
        email: store.loginState.email,
        password: store.loginState.password,
    };
};

export default connect(mapStateToProps)(Home);