import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  text-align: initial;

  > span {
    font-size: 14px;
    color: var(--grey-1);
    text-align: center;
    font-weight: 600;
  }
`;

export const Input = styled.input`
  height: 2.2rem;
  background-color: var(--grey-2);
  border: 1px solid white;
  border-radius: 4px;
  padding: 5px;

  ::placeholder {
    color: var(--grey-1);
  }
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  border: none;
  border-radius: 5px;
  color: white;
  height: 2.5rem;
  padding: 5px;
`;
