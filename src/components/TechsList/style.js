import styled from "styled-components";

export const Tech = styled.li`
  width: 95%;
  background-color: var(--grey-4);
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 10px;
  border-radius: 4px;
  font-weight: 700;
  color: var(--grey-0);
  font-size: 14px;

  .list-info {
    display: flex;
    font-weight: 400;
    color: var(--grey-1);
    font-size: 12px;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      height: 100%;
      margin: 0 0 0 20px;
    }

    button {
      border: none;
      color: var(--grey-1);
      background-color: transparent;
    }
  }
`;
