import React from 'react'

// Import styled
import styled from 'styled-components';

const ToolCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 30rem;
    width: 25em;
`;

const ToolHeader = styled.div`
    background-color: ${props => props.theme.secondary};
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        margin: 0 auto;
        font-size: 3.2rem;
        font-weight: 700;
        color: ${props => props.theme.primary};
    }
`;

const ToolDesc = styled.div`
    background-color: ${props => props.theme.secondaryVariant};
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;

     p {
        color: ${props => props.theme.secondary};
    }
`;

const toolCard = (props) => {
  return (
    <ToolCard>
      <ToolHeader><p>{props.title}</p></ToolHeader>
      <ToolDesc><p>{props.desc}</p></ToolDesc>
    </ToolCard>
  )
}

export default toolCard;