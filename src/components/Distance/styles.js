import styled from "styled-components";

export const MainBox = styled.div`
    display:flex;
    margin-top :40px;
    margin-left: 40px;
`;


export const DistanceBox = styled.div`
    /* border:1px solid gray; */
    width:1025px;
    height:auto;
    margin-left:310px;
`;


export const DistanceState = styled.div`
    display:flex;

    width:650px;
    height:auto;
    border-radius:10px;

    /* border:1px solid gray; */
    
    font-family:"notos";
    color:white;
    padding-bottom:20px;
    margin-bottom:180px;

    background:rgba(229, 219, 255,0.4);

    transition:width 0.4s;

    .distance_mainInfo{
        width:650px;

        /* background:rgba(229, 219, 255,0.4); */
    
        .distance_header{
            display:flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom:30px;

            .distance_tit{
                text-align:center;
                font-size:20px;
                display:flex;
                justify-content: center;
                align-items: center;
                padding:7px;
                font-weight:700;
                width:250px;
                background:#9775fa;
                border:1px solid gray;
            }

            .distance_alert{
                display:flex;
                align-items: center;
                
                .distance_alertIcon{
                    color:red;
                    margin-top:1px;
                    margin-right:2px;
                }
                .distance_alertTxt{
                    color:black;
                    font-size:13px;
                    padding-right:20px;
                }
            }
        }
        
        .distance_content{
            width:100%;
            display:flex;
            align-items: center;
            justify-content: center;
            position:relative;        

            .distance_img{
                /* width:550px; */
                /* height:550px; */
                width:650px;
                height:700px;
                
                img{
                    width:100%;
                    height:100%;
                }
            }
            .localBox{
                z-index:10;
                position:absolute;
                width:45px;
            
                text-align:center;
                top:0;
                left:0;
                font-size:13px;

                cursor:pointer;
            
                .localBoxTit{
                    background:#ffa94d;
                    padding:2px;
                    font-weight:600;
                    color:#212529;
                    width:100%;
                }

                .localBoxLevel{
                    background:#ffd8a8;
                    font-weight:800;
                    font-size:20px;
                }

                &:hover{
                    
                    .localBoxTit{
                        background:#ff6b6b;
                        color:white;
                    }

                    .localBoxLevel{
                        background:#ffc9c9;
                        color:white;
                    }

                }

                .level1{
                    color:#ff8c8c;
                }
                .level2{
                    color:#ff8c8c;
                }
                .level3{
                    color:#ff5050;
                }
                .level4{
                    color:#FF0000;
                }
            }

            // localBox 클릭 시 디자인 변경
            .menuOn{
                .localBoxTit{
                        background:#ff6b6b;
                        color:white;
                    }

                    .localBoxLevel{
                        background:#ffc9c9;
                        color:white;
                    }
            }

            .gyeonggi{
                top:80px;
                left:220px;
            }
            .incheon{
                top:140px;
                left:140px;
            }
            .gangwon{
                top:110px;
                left:350px;
            }
            .seoul{
                top:150px;
                left:260px;
            }
            .chungbuk{
                top:210px;
                left:320px;
            }
            .gyeongbuk{
                top:250px;
                left:400px;
            }
            .daegu{
                top:320px;
                left:420px;
            }
            .daejeon{
                top:280px;
                left:290px;
            }
            .sejong{
                top:230px;
                left:230px;
            }
            .chungnam{
                top:270px;
                left:180px;
            }
            .jeonbuk{
                top:360px;
                left:230px;
            }
            .gwangju{
                top:430px;
                left:240px;
            }
            .jeonnam{
                top:480px;
                left:170px;
            }
            .gyeongnam{
                top:410px;
                left:350px;
            }
            .busan{
                top:460px;
                left:440px;
            }
            .ulsan{
                top:390px;
                left:490px;
            }
            .jeju{
                top:600px;
                left:140px;
            }
        }   
    }
    .distance_subInfo{
        color:black;
        padding:15px;
        display:none;
        width:350px;
        border-left: 1px solid #e5dbff;    
        
        .distance_subInfoHeader{
            display:flex;
            align-items:center;
            margin-bottom:10px;
            .subInfoHeaderTit{
                font-family:"nanum";
                font-size:45px;
                margin-right:15px;
                font-weight:800;
                color:#845ef7;
                
            }
            .subInfoHeaderStage{
                font-size:22px;
                font-weight:800;
            }
        }

        .distance_areaInfo{
            margin-bottom:20px;

            .distance_areaBox{
                display:flex;
                /* align-items:center; */
                .distance_areaDot{

                }
                .distance_areaItem{
                    margin-bottom:3x;
                }
            }
        }

        .distance_stageInfo{
            /* display:flex; */
            margin-bottom:20px;

            .stageInfo_name{
                margin-bottom:3px;
                color :#fa5252;
            }
            .stageInfo_stagelist{
                display:flex;
                margin-bottom:3px;
                .stagelist_btn{
                    padding:5px;
                    border-radius:10px;
                    cursor:pointer;
                    background :#ffe3e3;
                    margin-right:5px;

                    &:hover{
                        background:#ffa8a8;
                    }
                }

                .stageOn{
                    background:#ffa8a8;
                }
            }
            .stageInfo_txt{
                margin-bottom:3px;
                color :#fa5252;
            }
        }

        .distance_local_lists{
            .distance_local_title{
                font-size:20px;
                margin-bottom:15px;
                padding-bottom:3px;
                border-bottom: 1px solid gray;
                font-weight:700;
            }

            .distance_local_list{

                margin-bottom:20px;

                .distance_local_menu{
                    display:flex;
                    align-items: center;
                    font-size:20px;
                    margin-bottom:8px;
                    img{
                        width:45px;
                        height:45px;
                        margin-right:10px;
                    }
                }

                .distance_local_content{
                    margin-bottom:8px;
                }

                .distance_local_alert{
                    /* margin-bottom:8px; */
                }
                
            }
        }
    }

`;

