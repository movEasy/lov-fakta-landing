import React from 'react'

// Import third-party libs
import { Link } from 'react-router-dom'; 
import styled, { ThemeProvider } from 'styled-components';

// Import components
import Button from '../Button/Button';

// Create styles
const Navigation = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${ props => props.theme.secondary};
    height: 15rem;
    padding-right: 7rem;
    padding-left: 7rem;

    a {
        color: ${ props => props.theme.primary };
        font-size: 1.4rem;
    }

    h2 {
        color: ${ props => props.theme.primary };
        flex: 2;
    }

    nav.home__login {
        flex: 1;
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;

        button {
            margin-left: -2rem;
        }
    }

    nav.landing-page__logged-in {
        flex: 1;
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        align-items: center;

        button {
            margin-left: -2rem;
        }
    }

`;

const navigation = props => {
    let navItems = (
        <nav className='home__login'>
            <Link to="/">Home</Link>
            <Link to="/contact-page">Contact</Link>
            <Link to="/login">Login</Link>
            <Button largeText inverted large>Login</Button>
        </nav>
    );

    if (props.isAuth) {
        navItems = (
            <nav className='landing-page__logged-in'>
                <Link to="/lovgivning">Lovgivning</Link>
                <Link to="/afgoerelser">Afgørelser</Link>
                <Link to="/om-jural">Om JURAL</Link>
                <Button largeText inverted large>Login</Button>
            </nav>
        );
    }
    return (
        <Navigation>
            <h2>JURAL</h2>
            {navItems}
        </Navigation>
    );
}


export default navigation;