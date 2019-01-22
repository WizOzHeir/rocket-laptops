import styled from 'styled-components';

export const ButtonContainer = styled.button`
    color: ${props => props.cart ? "var(--bg-default)" : "var(--dark-color)"};
    text-transform: uppercase;
    font-size: 1.3rem;
    padding: 15px 0;
    line-height: 1;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &:hover {
        color: var(--bg-default);
        border-color: ${props => props.cart ? "var(--bg-default)" : "transparent"};
        transition: all 500ms ease 0s;
    }
`;