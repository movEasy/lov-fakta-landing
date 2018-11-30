import React, { Component } from 'react'

// Import styled
import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: ${props => props.theme.primaryVariation};
    height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 5rem;
        color: ${props => props.theme.secondary};
        margin-bottom: 0;
    }
`;

const FooterCompanyInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;

    p {
        color: ${props => props.theme.secondary};
        opacity: 0.4;
    }
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <h2>Lov Fakta</h2>
        <FooterCompanyInfo>
            <p>Choose your country</p>
            <p>Company Information</p>
            <p>Privacy policy</p>
            <p>Cookie policy</p>
            <p>Terms of use</p>
            <p>Contact</p>
        </FooterCompanyInfo>
      </FooterContainer>
    )
  }
}

export default Footer;