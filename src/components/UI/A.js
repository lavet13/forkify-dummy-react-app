import styled from 'styled-components';

const A = styled.a`
    &,
    &:link,
    &:visited {
        background-image: linear-gradient(to right bottom, #fbdb89, #f48982);
        border-radius: 10rem;
        border: none;
        text-transform: uppercase;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: all 0.2s;

        padding: 1.5rem 4rem;
        font-size: 1.5rem;
        font-weight: 600;

        & svg {
            height: 2.25rem;
            width: 2.25rem;
            fill: currentColor;
        }

        &:hover {
            transform: scale(1.05);
        }

        &:focus {
            outline: none;
        }

        & > *:first-child {
            margin-right: 1rem;
        }

        font-size: 1.4rem;
        font-weight: 600;
        padding: 1.25rem 2.25rem;
        text-decoration: none;

        & svg {
            height: 1.75rem;
            width: 1.75rem;
            fill: currentColor;
        }
    }
`;

export default A;
