import styled from "styled-components";
import { StyledProps } from "./StyledProps";


export const NavbarWrapper = styled.div<StyledProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-height: ${({SomeHeight}) => SomeHeight ? SomeHeight : '100px'};
    min-width: 100px;
    max-width: 1000px;
    background: black;
    border: 1px solid purple;
`