import styled from "styled-components";

export const Page = styled.div`
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavBar = styled.div`
  height: 80px;
  width: 100%;
  border-bottom: 2px solid var(--grey-3);
  display: flex;
  align-items: center;
`;

export const ContainerNavBar = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Header = styled.div`
  height: 150px;
  width: 100%;
  border-bottom: 2px solid var(--grey-3);
  color: var(--grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerHeader = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    color: var(--grey-1);
  }
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  p {
    color: var(--grey-1);
  }
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--grey-0);
  height: 100vh;
  margin-top: 20px;
  width: 100%;

  h3 {
    color: var(--grey-1);
    font-weight: 600;
  }

  div {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
`;

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
