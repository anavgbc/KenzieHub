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
  @media screen and (min-width: 768px) {
    padding: 20px;
    margin: 20px;
  }
  div {
    width: 50%;

    @media screen and (min-width: 768px) {
      width: 70%;
    }
  }

  .list-info {
    display: flex;
    font-weight: 400;
    color: var(--grey-1);
    font-size: 12px;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 50%;
    gap: 15px;

    @media screen and (min-width: 768px) {
      gap: 20px;
      margin-right: 20px;
      width: 30%;
    }

    button {
      border: none;
      color: var(--grey-1);
      background-color: transparent;
    }
  }
`;
