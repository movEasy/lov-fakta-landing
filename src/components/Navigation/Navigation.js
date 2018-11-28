import React from 'react'

// Import third-party libs
import { Link } from 'react-router-dom'; 
import styled, { ThemeProvider } from 'styled-components';

// Create styles
const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${ props => props.theme.background};
    height: 5rem;

    nav {
        display: flex;
        width: 15rem;
        justify-content: space-between;
        padding-right: 2rem;
    }

`;

const navigation = props => {
    return (
        <Navigation>
            <nav>
                <Link to="/" replace>Home</Link>
                <Link to="contact-page/" replace>Contact</Link>
                <Link to="login/" replace>Login</Link>
            </nav>
        </Navigation>
    );
}

export default navigation;