import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 1px solid #ccc;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  &::focus {
    border: 1px solid #1670be;
    box-shadow: 0 0 3px #1670be;
    outline-offset: 0px;
    outline: none;
  }
`;

export const Image = styled.img`
  background-color: transparent;
`;
