import React from 'react'

// Import styled
import styled from 'styled-components';

// Import components
import Button from '../../../components/Button/Button';

const SubCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 45rem;
    width: 30rem;
`;

const SubCardHeader = styled.div`
    background-color: ${props => props.theme.primaryVariation};
    height: 30%;
    display: flex;
    align-items: center;

    p {
        margin: 0 auto;
        color: white;
        font-size: 2.6rem;
        font-weight: 700;
    }
`;

const SubCardPrice = styled.div`
    height: 15%;
    background-color: ${props => props.theme.accent};
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        margin: 0;
        font-size: 1.6rem;
        padding-left: 2rem;
        padding-right: 2rem;
        color: white;
    }

    .sub-card-price__paragraph {
        font-weight: 700;
    }
`;

const SubCardInfo = styled.div`
    height: 55%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    line-height: 2rem;

    p {
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: bold;
    }

    ul {
        margin-top: 1rem;
        margin-bottom: 1.7rem;
        padding: 0;
        list-style: none;
    }

    ul li::before {
        content: '✓';
        padding-right: 1rem;
        font-weight: bold;
    }

    button {
        width: 100%;
    }
`;


const subcriptionCard = (props) => {
  return (
    <SubCard>
      <SubCardHeader><p>{props.title}</p></SubCardHeader>
      <SubCardPrice><p>Mnd. ydelse</p><p className='sub-card-price__paragraph'>{props.price},-</p></SubCardPrice>
      <SubCardInfo>
          <p>{props.info}</p>
          <ul>
              {props.list.map(el => {
                  return <li>{el}</li>
              })}
          </ul>
          <Button primary large mediumText>{props.btnText}</Button>
      </SubCardInfo>
    </SubCard>
  )
}

export default subcriptionCard;