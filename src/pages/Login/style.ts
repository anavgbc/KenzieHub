import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerLogin = styled.div`
  background-color: var(--grey-3);
  width: 90%;
  margin: 0 auto;
  border-radius: 6px;

  h3 {
    margin-top: 25px;
    color: var(--grey-0);
  }

  @media screen and (min-width: 768px) {
    width: 25%;
  }
`;

export const ContainerButton = styled.div`
  width: 90%;
  margin: 0 auto;
`;
