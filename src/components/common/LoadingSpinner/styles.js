import styled from "styled-components";

export const LoadingSpinnerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;

  .LoaderBox {
    display: flex;
    flex-direction: column;
    align-items: center;

    .LoaderTxt {
      font-size: 30px;
      font-weight: 600;

      span {
        font-size: 40px;
        margin-left: 5px;
      }
    }
  }
`;
