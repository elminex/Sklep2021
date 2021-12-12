import styled from "styled-components";
export const StyledButton = styled.button`
   {
    color: ${props => props.disabled ? props.theme.textBlack : props.theme.textWhite};
    display: inline-block;
    min-width: 160px;
    height: 55px;
    border: none;
    border-radius: 3px;
    user-select: none;
    padding: 0 7px;
    font-size: 18px;
    line-height: 56px;
    background-color: ${props => props.disabled ? props.theme.backgroundGray : props.theme.yellow};
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.disabled ? props.theme.backgroundGray : props.theme.backgroundBlack};
    }
  }
`;
