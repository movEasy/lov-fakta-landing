import React, { Component } from 'react'

// Import third-party libs
import styled from 'styled-components';

// Import Scenes
import WelcomeScreen from './scenes/WelcomeScreen';
import PriceScreen from './scenes/PriceScreen';
import ProductPresenstationScreen from './scenes/ProductPresentationScreen';

import Card from './components/statCard';

// Create styles
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StatisticBar = styled.div`
    display: flex;
    height: 10rem;
    justify-content: space-around;
    align-items: center;
    padding-left: 10rem;
    padding-right: 10rem;
    background-color: ${ props => props.theme.primary };
    box-shadow: 1rem 1rem 1rem white;
`;

class LandingPage extends Component {
  render() {
    return (
        <HomeContainer>
          <WelcomeScreen />
          <StatisticBar>
            <Card number='138.920' name='Krydshenvisninger' />
            <Card number='89.103' name='Kommentarer' />
            <Card number='19.365' name='Afgørelser' />
            <Card number='920' name='Opdaterede love' />
          </StatisticBar>
          <PriceScreen/>
          <ProductPresenstationScreen />
        </HomeContainer>
    )
  }
}

export default LandingPage;