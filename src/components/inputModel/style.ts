import styled, { css } from "styled-components";

interface ContainerProps {
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin-top: 20px;
  font-size: 12px;
  color: var(--grey-0);

  > span {
    color: var(--negative);
    margin-left: 10px;
  }
`;

export const InputForm = styled.div<ContainerProps>`
  height: 2.2rem;
  background-color: var(--grey-2);
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-top: 10px;

  &:focus-within {
    border-color: var(--grey-0);
  }

  input {
    outline: none;
    width: 80%;
    background-color: transparent;
    border: none;
    color: var(--grey-0);

    ::placeholder {
      color: var(--grey-1);
    }
  }

  svg {
    margin: 0 15px 0 10px;
    color: var(--grey-1);
  }

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid var(--negative);

      svg {
        color: var(--negative);
      }
    `}
`;
