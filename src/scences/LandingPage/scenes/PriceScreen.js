import React, { Component } from 'react'

// Import styled
import styled from 'styled-components';

// Import components
import SubcriptionCard from '../components/subcriptionCard';

const PriceScreenContainer = styled.div`
    background-color: ${props => props.theme.primary};
    opacity: 0.97;
    padding-left: 7.5rem;
    height: 100rem;
`;

const SectionInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 7.4rem;
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
    margin-top: 4rem;
    justify-content: space-between;
    padding-right: 7.4rem;
    flex-wrap: wrap;

    .section-billing-container__extra-text {
        display: flex;
        flex-direction: column;
        height: 45rem;
        width: 27rem;
        text-align: right;
        
        p {
            margin-top: 0;
            color: ${props => props.theme.secondary};
            opacity: 0.7
        }
    }
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
            <SubcriptionCard 
                title='Professionel' price='859' info='This is a really really good package. Like totally awesome and filled with good stuff' 
                list={['item 1', 'item 2', 'item 3']} btnText='Vælg'/>
            <SubcriptionCard
                title='Standard' price='459' info='This is a really really good package. Like totally awesome and filled with good stuff' 
                list={['item 1', 'item 2', 'item 3']} btnText='Vælg' />
            <SubcriptionCard 
                title='Basic' price='259' info='This is a really really good package. Like totally awesome and filled with good stuff' 
                list={['item 1', 'item 2', 'item 3']} btnText='Vælg' />
            <div className='section-billing-container__extra-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit ex eget dictum commodo. Suspendisse vel justo non sem feugiat molestie at non metus. Cras facilisis velit risus, et egestas metus porttitor et.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit ex eget dictum commodo. Suspendisse vel justo non sem feugiat molestie at non metus. Cras facilisis velit risus, et egestas metus porttitor et.</p>
            </div>
        </SectionBillingContainer>
      </PriceScreenContainer>
    )
  }
}

export default PriceScreen;