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
        flex: 1 1 60%;
    }

    div.home__login {
        flex: 1 0 40%;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    div.landing-page__logged-in {
        flex: 1 0 40%;
        min-width: 40%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`;

const navigation = props => {
    let navItems = (
        <div className='home__login'>
            <Link to="/">Home</Link>
            <Link to="/contact-page">Contact</Link>
            <Link to="/login">Login</Link>
        </div>
    );

    if (props.isAuth) {
        navItems = (
            <div className='landing-page__logged-in'>
                <Link to="/lovgivning">Lovgivning</Link>
                <Link to="/afgoerelser">Afgørelser</Link>
                <Link to="/om-jural">Om Lov Fakta</Link>
                <Button mediumText inverted medium>Login</Button>
            </div>
        );
    }
    return (
        <Navigation>
            <h2>Lov Fakta</h2>
            {navItems}
        </Navigation>
    );
}


export default navigation;