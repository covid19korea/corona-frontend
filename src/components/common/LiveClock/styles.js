import styled from "styled-components";

export const LiveClockBox = styled.div`
    display:flex;
    width:450px;
    height:50px;
    align-items: center;
    background:#e9ecef;

    border-radius:10px;
    border:none;
    font-family:"notos";
    padding:10px;
    padding-left:20px;
    margin-bottom:30px;

    .clockTxtStart{
        padding-right:10px;
    }
    .clockTxtEnd{
        padding-left:4px;
    }
    .time{
        color:#561689;
        font-weight:800;
        font-size:20px;
    }
    
`;
