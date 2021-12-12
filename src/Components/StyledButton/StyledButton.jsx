import styled from "styled-components";
export const StyledButton = styled.button`
   {
    display: inline-block;
    min-width: 160px;
    height: 55px;
    color: #fff;
    border: none;
    border-radius: 3px;
    user-select: none;
    padding: 0 7px;
    font-size: 18px;
    line-height: 56px;
    background-color: #fbb710;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    text-decoration: none;
    &:hover {
      background-color: $text-black;
    }
  }
`;
