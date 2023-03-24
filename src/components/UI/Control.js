import styled, { css } from 'styled-components';

const Control = styled.div`
    display: grid;
    grid-column: 1 / span 2;
    grid-template-columns: 1fr 2.8fr ${({ btnDelete }) =>
            btnDelete ? '0.2fr' : ''};
    align-items: center;
    gap: 1.5rem;
    padding-right: 10px;

    ${({ btnDelete }) =>
        btnDelete &&
        css`
            & button {
                visibility: hidden;
                opacity: 0;
            }

            &:hover button {
                visibility: visible;
                opacity: 1;
            }
        `}

    ${({ invalid }) =>
        invalid &&
        css`
            & label {
                color: red;
            }

            & input {
                border-color: red;
                background: #f9f5f3;
            }
        `}
`;

export default Control;
