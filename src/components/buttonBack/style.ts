import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--grey-3);
  color: var(--grey-0);
  width: 90px;
  height: 30px;
  border: none;
  border-radius: 5px;

  &:hover {
    transition: 500ms;
    background-color: var(--grey-2);
  }
`;
