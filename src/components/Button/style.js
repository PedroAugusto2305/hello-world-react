import styled from "styled-components";

const ButtonStyle = styled.button`
    background-color: ${(props) => props.$bgColor || '#6200ea'};
    color: ${(props) => props.$txtColor || '#fff'};
    border: none;
    padding: ${(props) => props.$btnSize || '10px 20px'};
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => props.$hoverColor || '#3700b3'};
    }

    
`;

export default ButtonStyle;