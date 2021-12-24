import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "notos";
`;

export const ModalContent = styled.div`
  width: 330px;
  height: 380px;
  background: white;
  opacity: 1;
  z-index: 40;
  border-radius: 12px;
  padding: 15px;

  .modal_close {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    .modal_closeIcon {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .modal_logoArea {
    width: 100%;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    .modal_logo {
      width: 160px;
      height: 160px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .modal_content {
    text-align: center;

    .modal_tit {
      font-size: 22px;
      color: #8b00ff;
      font-weight: 800;
      margin-bottom: 10px;
      margin-bottom: 20px;
    }

    .modal_sub {
      font-size: 15px;
      .modal_subTxt {
        margin-bottom: 3px;
      }
      .modal_subEmail {
        text-decoration: underline;
        a {
          color: black;
        }
      }
    }
  }
`;

//
