import React from 'react'

// Import third-party libs
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 2rem;
    align-items: center;
    justify-content: center;
    
    p {
        margin: 1rem 0 0 0;
        padding: 0;
    }

    .card__paragraph--first {
        color: ${props => props.theme.white};
        font-size: 3.5rem;
        font-weight: 500;
    }

    .card__paragraph--second {
        color: ${props => props.theme.secondary};
    }
`;

const statCard = (props) => {
  return (
    <Card>
      <p className='card__paragraph--first'>{props.number}</p>
      <p className='card__paragraph--second'>{props.name}</p>
    </Card>
  )
}

export default statCard;