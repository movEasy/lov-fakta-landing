import React, { Component } from 'react'

// Import third-party libs
import styled from 'styled-components';

// Import Scenes

// Create styles
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

class Home extends Component {
  render() {
    return (
        <HomeContainer>
          <p>Please use the login in the top right corner</p>
        </HomeContainer>
    )
  }
}

export default Home;