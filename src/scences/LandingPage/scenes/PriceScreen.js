import React, { Component } from 'react'

// Import styled
import styled from 'styled-components';

// Import components
import SubcriptionCard from '../components/subcriptionCard';

const PriceScreenContainer = styled.div`
    background-color: ${props => props.theme.primary};
    opacity: 0.97;
    padding-left: 7rem;
    height: 100rem;
`;

const SectionInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 7rem;
    line-height: 6rem;
    margin-top: 20rem;

    h1 {
        margin: 0;
        color: ${props => props.theme.secondary};
        font-size: 4.5rem;
    }

    p {
        margin: 0;
        font-size: 3.2rem;
        font-weight: 0;
        color: white;
    }
`;

const SectionBillingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

class PriceScreen extends Component {
  render() {
    return (
      <PriceScreenContainer>
        <SectionInformation>
            <h1>Konslideret lovgivning & gennemsigtig struktur</h1>
            <p>Jural holder det simplet, du kan få adgang via 3 løsninger</p>
        </SectionInformation>
        <SectionBillingContainer>
            <SubcriptionCard title='Professionel' price='859' info='This is a really really good package' list={['item 1', 'item2', 'item3']} />
        </SectionBillingContainer>
      </PriceScreenContainer>
    )
  }
}

export default PriceScreen;