import React from 'react';
import { ModalContainer, ModalContent } from './styles';
import { AiOutlineClose } from "react-icons/ai";

const Modal = 
    ({
        onToggle,
    }) => {
        return (
            <ModalContainer>
                <ModalContent>
                    <div className="modal_close">
                        <AiOutlineClose className="modal_closeIcon" onClick={onToggle} />
                    </div>
                    <div className="modal_logoArea">
                        <div className="modal_logo">
                            <img src="/images/icons/covid_icon.png" alt="" />
                        </div>
                    </div>
                    <div className="modal_content">
                        <div className="modal_tit">문의사항이 있으신가요?</div>
                        <div className="modal_sub">
                            <div className="modal_subTxt">문의는 이메일로 부탁드려요</div>
                            <div className="modal_subEmail">
                                <a href="mailto:covid19korea.official@gmail.com">covid19korea.official@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </ModalContent>
            </ModalContainer >
        );
    };

export default Modal;