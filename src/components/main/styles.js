import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 40px;
`;

export const KoreaBox = styled.div`
  width: 1025px;
  height: auto;
  margin-left: 310px;
  padding-bottom: 180px;
`;

export const NewCovid = styled.div`
  width: 750px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 800;
  color: white;
  background: #495057;
  border-radius: 10px;
  padding: 7px;
  padding-left: 25px;
  margin-bottom: 20px;

  .newCovid_tit {
    margin-right: 10px;
  }
  .newCovid_value {
    color: #d0bfff;
    font-weight: 800;
    font-size: 40px;
    margin-right: 5px;
  }
`;

export const CovidLocate = styled.div`
  width: 750px;
  border-radius: 10px;
  background: rgba(229, 219, 255, 0.4);
  font-family: "notos";
  color: black;

  .covidLocate_header {
    display: flex;
    background: #b197fc;

    justify-content: center;
    align-items: center;
    position: relative;
    .covidLocate_tit {
      text-align: center;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 7px;
      font-weight: 700;
      padding-bottom: 10px;
      background: #b197fc;
      color: white;
    }

    .covidLocate_option {
      border: none;
      width: 90px;
      height: 20px;
      font-size: 12px;
      position: absolute;
      right: 0;
      margin-right: 15px;
    }
  }

  .covidLocate_lists {
    padding: 0 20px;
    .covidLocate_item {
      /* border:1px solid gray; */
      padding: 20px 10px 20px 10px;
      display: flex;
      align-items: center;
      border-top: 1px solid #ced4da;

      .covidLocate_img {
        width: 120px;
        height: 100px;
        border-radius: 50%;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }

      .covidLocate_dataLists {
        display: flex;
        flex-direction: column;
        width: 100%;

        .covidLocate_dataItemBox {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .covidLocate_dataItem {
            width: 130px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .covidLocate_dataItemTit {
              font-size: 14px;
            }
            .covidLocate_dataItemValue {
              font-size: 26px;
              font-weight: 800;
            }
          }

          .deadCovid {
            color: #e03131;
          }
          .releaseCovid {
            color: #3175b1;
          }
          .newCovid {
            color: #561689;
          }
        }
      }
    }
  }
`;
