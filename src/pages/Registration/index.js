import React, { Component } from 'react';
import SignUp from './../../components/SignUp';
import './styles.scss';

class Registration extends Component {

    render() {
        return (
            <div className="container">
                <SignUp />
            </div>
        );
    }
}

export default Registration;