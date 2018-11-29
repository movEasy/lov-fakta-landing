import React, { Component } from 'react';

// Import third-party libs
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

// Import actions from services
import * as actions from '../../../../services/index';

// Import styled components
import Button from '../../../../components/Button/Button';

const FormContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 2rem;
`;

const AuthForm = styled.form`
    margin: 0 auto;
    display: flex;
    align-items: stretch;
    width: 50rem;
    height: 35rem;
    /* box-shadow: 0.3rem 0.3rem 0.2rem black; */

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    li {
        display: flex;
        flex-direction: column;
        list-style: none;
        align-items: center;
        width: 100%;
        margin-bottom: 2rem;

        input {
            width: 90%;
            height: 2.5rem;
        }
    }

    button {
        margin: 0 auto;
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
        console.log('NOT Auth if block')
        let authRedirect = null;
        if ( this.props.isAuthenticated ) {
            console.log('Auth if block')
            authRedirect = <Redirect to='/landing-page' />
        }

        return (
                <FormContainer>
                    {authRedirect}
                    <AuthForm onSubmit={this.submitHandler}>
                        <ul>
                            <li>
                                <label>Email</label>
                                <input name='userEmail' type='email' value={email} onChange={this.handleChange}/>
                            </li>
                            <li>
                                <label>Password</label>
                                <input name='userPassword' type='password' value={password} onChange={this.handleChange}/>
                            </li>
                            <Button primary medium mediumText>Login</Button>
                        </ul>
                    </AuthForm>
                </FormContainer>
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

export default withRouter( connect(mapStateToProps, mapDispatchToProps )(Authentication ) );