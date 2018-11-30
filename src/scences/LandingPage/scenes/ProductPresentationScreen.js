import React, { Component } from 'react'

// Import styled
import styled from 'styled-components';

// Import components
import ToolCard from '../components/toolCard';

const ProdPresScreenContainter = styled.div`
    background-color: ${props => props.theme.primary};
    opacity: 0.97;
    padding-left: 7.5rem;
    padding-right: 7.4rem;
`;

const SectionInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => 
        (props.left && 'flex-start')
        || (props.center && 'center')
        || (props.right && 'flex-end')
    };
    line-height: 6rem;
    margin-top: 18rem;

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

const SectionVideo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 6rem;

    .section-video__text {
        display: flex;
        flex-direction: column;
        height: 45rem;
        width: 30%;
        margin-right: 5rem;
        
        p {
            margin-top: 0;
            color: ${props => props.theme.secondary};
            opacity: 0.7;
            text-align: left;
        }
    }

    .section-video__video {
        width: 70%;
        height: 100%;
        border: 1px solid white;
    }
    
`;

const SectionCard = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;
    flex-wrap: wrap;
    margin-bottom: 10rem
`;

class ProductPresentationScreen extends Component {
  render() {
    return (
      <ProdPresScreenContainter>
            <SectionInformation left>
                <h1>Simpel & Moderne brugerflade</h1>
                <p>Vi giver dig den bedste oplvelse og det bedste overblik</p>
            </SectionInformation>
            <SectionVideo>
                <div className='section-video__text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit ex eget dictum commodo. Suspendisse vel justo non sem feugiat molestie at non metus. Cras facilisis velit risus, et egestas metus porttitor et.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit ex eget dictum commodo. Suspendisse vel justo non sem feugiat molestie at non metus. Cras facilisis velit risus, et egestas metus porttitor et.</p>
                </div>
                <div className='section-video__video '>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                    <p>IMAGE</p>
                </div>
            </SectionVideo>
            <SectionInformation center>
                <h1>Genkendelig værktøjer i opdateret udgave</h1>
                <p>Udviklet i samarbejde med de bedste indenfor branchen</p>
            </SectionInformation>
            <SectionCard>
                <ToolCard 
                    title='Notebook'
                        desc='Genkendelig værktøjer i opdateret udgave. Genkendelig værktøjer i opdateret udgave. Genkendelig værktøjer i opdateret udgave. Genkendelig værktøjer i opdateret udgave'
                    />
                <ToolCard 
                    title='Timeline'
                        desc='Genkendelig værktøjer i opdateret udgave. Genkendelig værktøjer i opdateret udgave. Genkendelig værktøjer i opdateret udgave. Genkendelig værktøjer i opdateret udgave'
                    />
                <ToolCard 
                    title='Indlæg'
                        desc='Genkendelig værktøjer i opdateret udgave.
                        Genkendelig værktøjer i opdateret udgave.
                        Genkendelig værktøjer i opdateret udgave. Genkendelig værktøjer 
                        i opdateret udgave'
                    />
            </SectionCard>
      </ProdPresScreenContainter>
    )
  }
}

export default ProductPresentationScreen;