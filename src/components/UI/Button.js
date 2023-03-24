import styled, { css } from 'styled-components';

const Button = styled.button`
    ${({ btn }) =>
        btn &&
        css`
            background-image: linear-gradient(
                to right bottom,
                #fbdb89,
                #f48982
            );
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
            ${({ searchBtn }) =>
                searchBtn &&
                css`
                    font-weight: 600;
                    font-family: inherit;
                `}

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
        `}

    ${({ btnDisabled }) =>
        btnDisabled &&
        css`
            cursor: not-allowed;
            background: #999999;
            &:hover {
                transform: none;
            }
        `}

    ${({ navBtn }) =>
        navBtn &&
        css`
            height: 100%;
            font-family: inherit;
            color: inherit;
            font-size: 1.4rem;
            font-weight: 700;
            text-transform: uppercase;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0 1.5rem;
            transition: all 0.3s;

            display: flex;
            align-items: center;

            & svg {
                height: 2.4rem;
                width: 2.4rem;
                fill: #f38e82;
                margin-right: 0.7rem;
                transform: translateY(-1px);
            }

            &:focus {
                outline: none;
            }

            &:hover {
                background-color: #f2efee;
            }

            &:hover + ${({ bookmarkClass }) => `.${bookmarkClass}`} {
                visibility: visible;
                opacity: 1;
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
            user-select: none;

            display: flex;
            align-items: center;
            transition: all 0.2s;
            ${({ floatLeft }) =>
                floatLeft &&
                css`
                    float: left;
                `}

            ${({ floatRight }) =>
                floatRight &&
                css`
                    float: right;
                `}

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

    ${({ btnCloseModal }) =>
        btnCloseModal &&
        css`
            font-family: inherit;
            color: inherit;
            position: absolute;
            top: 0.5rem;
            right: 1.6rem;
            font-size: 3.5rem;
            cursor: pointer;
            border: none;
            background: none;
        `}

    ${({ uploadBtn }) =>
        uploadBtn &&
        css`
            grid-column: 1 / -1;
            justify-self: center;
        `}

    ${({ uploadBtnColumn }) =>
        uploadBtnColumn &&
        css`
            grid-column: 1 / span 2;
            justify-self: center;
            margin-top: 1rem;
        `}
`;

export default Button;
