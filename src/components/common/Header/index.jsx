import React, { useEffect } from 'react';
import { HeaderBox } from './styles';
import { Link } from 'react-router-dom';
import Modal from '../Modal';

const Header = ({ onToggle, modal, setModal }) => {
    return (
        <HeaderBox>
            <Link to="/" className="logoArea">
                <img src="/images/icons/covid_icon.png" alt="" />
                <div>코로나 알리미</div>
            </Link>

            <div className="cateList">
                <Link to="/" id="korea" className="cateItem">
                    <img src="/images/logo/korea.png" alt="" />
                    <div>국내</div>
                </Link>
                <Link to="/distance" id="distance" className="cateItem">
                    <img src="/images/logo/distance.png" alt="" />
                    <div>거리두기</div>
                </Link>
                <Link to="/vaccine" id="vaccine" className="cateItem">
                    <img src="/images/logo/injection.png" alt="" />
                    <div>백신접종</div>
                </Link>
                <Link onClick={onToggle} id="vaccine" className="cateItem">
                    <img src="/images/logo/question.png" alt="" />
                    <div>문의하기</div>
                </Link>
            </div>
            {
                modal &&
                <Modal onToggle={onToggle} />
            }
        </HeaderBox >
    );
};

export default Header;