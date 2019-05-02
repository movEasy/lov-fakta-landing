// Import styled
import styled, { keyframes } from 'styled-components';

const ButtonClickSlide = keyframes`
    0% {
        background: white;
    }
    10% {
        background: blue;
    }
    50% {
        background: blue;
    }
    100% {
        background: black;
    }
`;

const Button = styled.button`
    text-align: center;
    position: relative;
    display: inline-block;
    border-radius: ${props => props.theme.baseRadius};
    cursor: pointer;
    border: 0.1rem solid ${props => 
        (props.inverted && props.theme.white)
        || (props.theme.primary)
    };
    color: ${props => props.theme.white};
    font-size: ${props => 
        (props.smallText && '1rem')
        || (props.mediumText && '1.4rem')
        || (props.largeText && '1.6rem')
    };
    background-color: ${props => 
        (props.primary && props.theme.primary)
        || (props.danger && props.theme.danger)
        || ((props.inverted || props.link) && 'transparent')
    };
    width: ${props => 
        (props.large && '12rem')
        || (props.medium && '9rem')
        || (props.small && '7rem')
    };
    

    height: ${props => 
        (props.large && '5rem')
        || (props.medium && '3rem')
        || (props.small && '1.5rem')
    };
`;

export default Button;