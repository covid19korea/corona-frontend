import styled from "styled-components";

export const MainBox = styled.div`
    display:flex;
    margin-top :40px;
    margin-left: 40px;
`;


export const VaccineBox = styled.div`
    width:1025px;
    height:auto;
    margin-left:310px;
    padding-bottom:180px;
`;

export const VaccineState = styled.div`
    font-family:"notos";
    /* width:750px; */
    width:600px;
    border-radius:10px;
    background:#495057;
    color:white;
    margin-bottom:30px;

    
    .vaccine_tit{
        text-align:center;
        font-size:20px;
        display:flex;
        justify-content: center;
        align-items: center;
        padding:7px;
        font-weight:700;
        border-bottom:1px solid gray;

    }

    .vaccine_lists{
        display:flex;
        justify-content: space-around;

        .vaccine_item{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            padding:17px 0;

            .vaccine_itemTit{
                font-size:18px;
                margin-bottom:10px;
            }

            .vaccine_num{
                display:flex;
                align-items: center;

                .vaccine_circle{
                    margin-right:10px;
                }

                .vaccine_data{
                    display:flex;
                    flex-direction:column;
                    align-items: center;
                    justify-content:center;

                    .vaccine_itemValue{
                        font-size:25px;
                        font-weight:800;
                    }

                    .vaccine_rate{
                        display:flex;
                        align-items: center;

                        .vaccine_itemComp{
                            font-size:18px;
                        }

                        .vaccineImg{
                            width:15px;
                            height:14px;
                            margin-left:3px;
                            margin-top:3px;
                        }
                    }
                }
            }
        }
    }
`;

export const VaccineMap = styled.div`
    font-family:"notos";
    width:750px;
    border-radius:10px;
    height:auto;
    background:rgba(229, 219, 255,0.4);
    
    color:white;
    padding-bottom:60px;

    
    .vaccineMap_tit{
        text-align:center;
        font-size:20px;
        display:flex;
        justify-content: center;
        align-items: center;
        padding:7px;
        font-weight:700;
        width:250px;
        background:#9775fa;
    }

    .vaccineMap_option{
        margin-bottom:20px;
        color:black;

        display:flex;
        align-items: center;
        justify-content: space-between;


        .vaccineMap_menulist{
                display:flex;

                .vaccineMap_menu{
                display:flex;
                align-items: center;
                margin-left:10px;
                color:#868e96;
                
                .menuDot{
                    display:flex;
                    font-size:40px;
                }
                .menuTit{
                    margin-right:12px;
                    cursor:pointer;
                }
            }
            
            .menuOn{
                .menuDot{
                    color:#862e9c;
                }
                .menuTit{
                    color:black;
                    font-weight:800;
                }
            }
        }
        .vaccineMap_choicelist{
            display:flex;
            align-items: center;
            background:#e5dbff;
            cursor:pointer;

            font-size:15px;
            margin-right:20px;

            .vaccineMap_choice{
                padding:4px 0px;
                width:80px;
                text-align:center;

                &:hover{
                    background:#d0bfff;
                }
            }
            .choiceOn{
                /* background:#b197fc !important; */
                background:#9775fa !important;
                color:white;
            }


        }
    }

    .vaccineMap_content{
        width:100%;
        display:flex;
        align-items: center;
        justify-content: center;
        position:relative;

        .vaccineMap_img{
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
            width:55px;
        
            text-align:center;
            top:0;
            left:0;

            .localBoxTit{
                /* background:#d0bfff; */
                background:#ffa94d;
                padding:2px;
                font-weight:600;
                color:#212529;
                width:100%;
                font-size:12px;
            }

            .localBoxLevel{
                display:flex;
                align-items: center;
                justify-content: center;
                /* background:#e5dbff; */
                background:#ffd8a8;
                color:#8D021F;
                font-weight:800;
                /* padding:6px 4px; */
                font-size:11px;
                height:25px;
            }

            .localBoxRate{
                display:flex;
                align-items: center;
                justify-content: center;
                /* background:#e5dbff; */
                background:#ffd8a8;
                color:#8D021F;
                font-weight:800;
                /* padding:6px 4px; */
                
                font-size:13px;
                height:25px;
            }
        }
        .gyeonggi{
            top:80px;
            left:260px;
        }
        .incheon{
            top:140px;
            left:180px;
        }
        .gangwon{
            top:110px;
            left:390px;
        }
        .seoul{
            top:150px;
            left:300px;
        }
        .chungbuk{
            top:210px;
            left:360px;
        }
        .gyeongbuk{
            top:250px;
            left:440px;
        }
        .daegu{
            top:320px;
            left:460px;
        }
        .daejeon{
            top:280px;
            left:330px;
        }
        .sejong{
            top:230px;
            left:270px;
        }
        .chungnam{
            top:270px;
            left:210px;
        }
        .jeonbuk{
            top:360px;
            left:270px;
        }
        .gwangju{
            top:430px;
            left:280px;
        }
        .jeonnam{
            top:480px;
            left:210px;
        }
        .gyeongnam{
            top:410px;
            left:390px;
        }
        .busan{
            top:460px;
            left:480px;
        }
        .ulsan{
            top:390px;
            left:530px;
        }
        .jeju{
            top:600px;
            left:230px;
        }


    }
`;
