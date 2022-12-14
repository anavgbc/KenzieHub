import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99999;
  left: 0;
  top: 0;

  .modal-box {
    height: 70%;
    width: 80%;
    background-color: var(--grey-3);
    padding: 20px;
    position: relative;
    text-align: start;
    border-radius: 8px;
    margin: 50% auto;

    @media screen and (min-width: 768px) {
      width: 30%;
      margin: 15% auto;
    }

    .modal-header {
      height: 20%;
      background-color: var(--grey-1);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      margin: 0;
      color: var(--grey-0);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 15px;
      align-items: center;
      font-weight: 600;
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;

      button {
        background-color: transparent;
        border: none;
      }
    }
  }
  .modal-main {
    margin-top: 50px;
    color: var(--grey-0);
    text-align: center;

    h3 {
      margin-bottom: 10px;
    }

    span {
      font-size: 14px;
      color: var(--grey-1);
    }

    div {
      width: 100%;
      gap: 20px;
      margin-top: 20px;

      button {
        border: none;
        height: 2.5rem;
        color: #ffffff;
        border-radius: 5px;
        margin: 5px;
      }
    }
  }
`;
