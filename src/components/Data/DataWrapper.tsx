import styled from "styled-components";
import { StyledProps } from "./StyledProps";

export const DataWrapper = styled.div<StyledProps>`
    border: 2px solid purple;
    width: ${
        ( {someWidth} ) => someWidth ? someWidth : '300px'
    };
    background-color: black;
    color: var(--headingColor);
    font-size: var(--headingSize);
`