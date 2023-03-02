import React from 'react';
// import './Button.scss';
import styled, { css } from 'styled-components';

const Button = styled.button`
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

    ${({ btnSmall }) =>
        btnSmall &&
        css`
            &,
            &:link,
            &:visited {
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
        `}

    ${({ btnInline }) =>
        btnInline &&
        css`
            color: #f38e82;
            font-size: 1.3rem;
            font-weight: 600;
            border: none;
            background-color: #f9f5f3;
            padding: 0.8rem 1.2rem;
            border-radius: 10rem;
            cursor: pointer;

            display: flex;
            align-items: center;
            transition: all 0.2s;

            & svg {
                height: 1.6rem;
                width: 1.6rem;
                fill: currentColor;
                margin: 0 0.2rem;
            }

            & span {
                margin: 0 0.4rem;
            }

            &:hover {
                color: #f48982;
                background-color: #f2efee;
            }

            &:focus {
                outline: none;
            }
        `}

    ${({ btnRound }) =>
        btnRound &&
        css`
            background-image: linear-gradient(
                to right bottom,
                #fbdb89,
                #f48982
            );
            border-radius: 50%;
            border: none;
            cursor: pointer;
            height: 4.5rem;
            width: 4.5rem;
            // margin-left: auto;
            transition: all 0.2s;

            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                transform: scale(1.07);
            }

            &:focus {
                outline: none;
            }

            & svg {
                height: 2.5rem;
                width: 2.5rem;
                fill: #fff;
            }
        `}

    ${({ btnTiny }) =>
        btnTiny &&
        css`
            height: 2rem;
            width: 2rem;
            border: none;
            background: none;
            cursor: pointer;

            & svg {
                height: 100%;
                width: 100%;
                fill: #f38e82;
                transition: all 0.3s;
            }

            &:focus {
                outline: none;
            }

            &:hover svg {
                fill: #f48982;
                transform: translateY(-1px);
            }

            &:active svg {
                fill: #f48982;
                transform: translateY(0);
            }

            &:not(:last-child) {
                margin-right: 0.3rem;
            }
        `}
`;

// function Button({ className, children, type = 'button' }) {
//     const classes = 'btn ' + (className || '');

//     return (
//         <button className={classes} type={type}>
//             {children}
//         </button>
//     );
// }

export default Button;
