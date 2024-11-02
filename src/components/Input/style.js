import styled from "styled-components";

const InputStyle =styled.input`
    flex: 1;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: 0.3s;

    &:focus {
        border-color: #6200ea;
        outline: none;
    }

    &[type="checkbox"] {
        margin-right: 10px;
        cursor: pointer;
    }

`;

export { InputStyle };
