import styled from "styled-components";

export const ListHeader = styled.div`
  height: 6%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;

  > button {
    border: none;
    background-color: var(--grey-3);
    height: 25px;
    width: 25px;
    color: var(--grey-1);
    border-radius: 4px;
  }
`;

export const ListContainer = styled.ul`
  width: 95%;

  .list-container {
    width: 100%;
    background-color: var(--grey-3);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    border-radius: 4px;
  }
`;
