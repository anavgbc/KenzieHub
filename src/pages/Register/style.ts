import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerTotal = styled.div`
  margin: 0 auto;
  width: 85%;
  margin-top: 50px;
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 25%;
  }
`;

export const ContainerMain = styled.div`
  background-color: var(--grey-3);
  width: 100%;
  margin: 0 auto;
  border-radius: 6px;
  margin-bottom: 40px;

  h3 {
    margin: 25px 0 15px 0;
    font-size: 14px;
    font-weight: 700;
    color: var(--grey-0);
    padding: 15px;
  }
  > span {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-1);
  }

  @media screen and (min-width: 768px) {
    width: 25%;
  }
`;
