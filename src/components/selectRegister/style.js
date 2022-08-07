import styled from "styled-components";

export const SelectForm = styled.select`
  width: 100%;
  height: 2.2rem;
  background-color: var(--grey-2);
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: var(--grey-1);
`;

export const ContainerSelect = styled.div`
  margin-top: 20px;
  width: 100%;
  label {
    font-size: 12px;
    color: var(--grey-0);
  }
`;
