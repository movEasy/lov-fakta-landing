import React, { Component } from 'react'

// Import third-party libs
import styled, { ThemeProvider } from 'styled-components';

// import Theme
import defaultTheme from '../../global_config/Themes/defaultTheme';

// Import Components
import Navigation from '../../components/Navigation/Navigation';

// Create styles
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

class Home extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <HomeContainer>
            <Navigation />
            <p>Home</p>
        </HomeContainer>
      </ThemeProvider>
    )
  }
}

export default Home;