import React, { Component } from 'react';

// Import third-party libs
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Import Components
import Navigation from '../../components/Navigation/Navigation';

// import Theme
import defaultTheme from '../../global_config/Themes/defaultTheme';

// Import actions from services
import * as actions from '../../services/index';

const AuthForm = styled.form`

    ul {

    }

    button {

    }

`;


class Authentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                userEmail: '',
                userPassword: '',
            }
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        const initialState = {...this.state.user};

        initialState[name] = value;

        this.setState({
            user: initialState
        });
    }

    submitHandler = (e) => {
        e.preventDefault();
        let email = this.state.user.userEmail;
        let password = this.state.user.userPassword;

        this.props.onAuth( email, password );
    }

    render() {
        const { email, password } = this.state.user;
        let authRedirect = null;

        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to="/landing-page/" />
        }
        return (
            <ThemeProvider theme={defaultTheme}>
                <>
                    {authRedirect}
                    <Navigation />
                    <AuthForm onSubmit={this.submitHandler}>
                        <ul>
                            <li>
                                <label>User Name</label>
                                <input name='userEmail' type='text' value={email} onChange={this.handleChange}/>
                            </li>
                            <li>
                                <label>Password</label>
                                <input name='userPassword' type='password' value={password} onChange={this.handleChange}/>
                            </li>
                            <button>Login</button>
                        </ul>
                    </AuthForm>
                </>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.services.session.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);