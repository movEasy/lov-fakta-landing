import React, { Component } from 'react'

// Import styled
import styled from 'styled-components';

// Import components
import Button from '../../../components/Button/Button';

const WelcomeScreenContainer = styled.div`
    height: 50rem;
    background-color: ${props => props.theme.secondary};
    padding-left: 7rem;
`;

const WelcomeIntro = styled.div`
    width: 50%;

    p {
        line-height: 5.5rem;
        margin: 1rem 0 1rem 0;
    }

    .first {
        color: white;
        font-size: 3.5rem;
        font-weight: 700;
    }

    .second {
        color: ${ props => props.theme.primary };
        font-size: 6rem;
        font-weight: 700;
    }

    .third {
        color: ${ props => props.theme.primaryVariation };
        font-size: 3rem;
        font-weight: 500;
    }
`;

const WelcomeTrial = styled.div`
    width: 45%;
    margin-top: 5rem;
    display: flex;
    align-items: center;

    p {
        font-size: 1.4rem;
    }

    div {
        width: 50%;
        line-height: 0.5rem;
        margin-left: 2rem;
        color: ${ props => props.theme.primaryVariation };
        
        p {
            font-size: 1.5rem;
        }
    }
`;


class WelcomeScreen extends Component {
  render() {
    return (
        <>
            <WelcomeScreenContainer>
                <WelcomeIntro>
                    <p className='first'>Velkommen</p>
                    <p className='second'>Opslagsværktøj for Dansk Lovgivning & Domme</p>
                    <p className='third'>- samt dit jurale community</p>
                </WelcomeIntro>
                <WelcomeTrial>
                    <Button primary large mediumText>30 dage gratis</Button>
                    <div>
                        <p>Start din gratis prøveperiode allerede i dag</p>
                        <p>- ingen binding, ingen begrænsninger</p>
                    </div>
                </WelcomeTrial>
            </WelcomeScreenContainer>
        </>
    )
  }
}

export default WelcomeScreen;