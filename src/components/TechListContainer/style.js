import styled from "styled-components";

export const ListContainer = styled.ul`
  width: 95%;
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    width: 90%;
    margin-top: 30px;
  }

  .list-container {
    width: 100%;
    background-color: var(--grey-3);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    border-radius: 4px;

    @media screen and (min-width: 768px) {
      padding: 10px;
    }
  }
`;
