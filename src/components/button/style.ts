import styled from "styled-components";

interface IButtonSubmitProps {
  grayColor?: boolean;
  size?: number;
}

export const ButtonSubmit = styled.button<IButtonSubmitProps>`
  background: ${(props) => (props.grayColor ? "#868E96" : "#FF577F")};
  border: none;
  border-radius: 5px;
  color: #ffffff;
  height: 2.5rem;
  padding: 5px;
  margin: 25px 0 15px 0;
  width: ${(props) => (props.size ? `${props.size}%` : "100%")};

  &:hover {
    transition: 500ms;
    background-color: ${(props) => (props.grayColor ? "#343B41" : "#FF427F")};
  }

  &:disabled {
    background-color: var(--color-primary-negative);
  }
`;
