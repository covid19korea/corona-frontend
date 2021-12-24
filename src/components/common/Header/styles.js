import styled from "styled-components";

export const HeaderBox = styled.div`
  width: 250px;
  position: fixed;

  .logoArea {
    display: flex;
    align-items: center;
    font-size: 35px;
    font-weight: 500;
    font-family: "nanum";
    padding-bottom: 80px;
    padding-left: 10px;
    cursor: pointer;
    color: black;

    img {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
  }
  .cateList {
    .cateItem {
      display: flex;
      align-items: center;
      font-family: "nanum";
      font-size: 25px;
      font-size: 30px;
      height: 60px;
      width: 100%;
      border-radius: 10px;
      padding-left: 10px;
      color: black;
      cursor: pointer;

      &:hover {
        background: #eceff1;
        font-weight: 700;
        color: black;
      }
      img {
        width: 35px;
        height: 35px;
        margin-right: 25px;
      }
    }
    .menu_on {
      background-color: #eceff1;
      font-weight: 700;
      color: black;
    }
  }
`;
