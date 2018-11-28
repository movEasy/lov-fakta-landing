import React, { Component } from 'react'

// Import third-party libs
import styled, { ThemeProvider } from 'styled-components';

// Import Scenes
import WelcomeScreen from './scenes/welcomeScreen';

// Create styles
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StatisticBar = styled.div`
    display: flex;
    height: 10rem;
    background-color: ${ props => props.theme.primaryVariation };
    margin-left: 10rem;
`;

class LandingPage extends Component {
  render() {
    return (
      <HomeContainer>
        <WelcomeScreen />
        <StatisticBar />
      </HomeContainer>
    )
  }
}

export default LandingPage;