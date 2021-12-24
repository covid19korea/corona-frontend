import React, { useEffect } from 'react';
import { HeaderBox } from './styles';
import { Link, withRouter } from 'react-router-dom';
import Modal from '../Modal';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getContact } from '../../../store/contactData';
import { LISTS } from '../../../constants';

const Header = ({ match }) => {
    const url = match.url;
    let urlProp;

    const dispatch = useDispatch();
    const [modal, setModal] = useState(false);

    const onToggle = () => {
        setModal(!modal);
        dispatch(getContact(!modal));
    }

    const urlCheck = (url) => {
        if (url === "/") urlProp = "korea";
        if (url === "/distance") urlProp = "distance";
        if (url === '/vaccine') urlProp = "vaccine";
    }
    
    urlCheck(url);

    useEffect(() => {
        if (urlProp) {
            const menu = document.getElementById(`${urlProp}`);
            menu.classList.add("menu_on");
        }
    }, [urlProp]);

    return (
        <HeaderBox>
            <Link to="/" className="logoArea">
                <img src="/images/icons/covid_icon.png" alt="" />
                <div>코로나 알리미</div>
            </Link>
            <div className="cateList">
                {
                    LISTS.menuList.map(menu=>
                        <Link to={menu.url} id={menu.engName} className="cateItem">
                            <img src={`/images/logo/${menu.engName}.png`} alt="" />
                            <div>{menu.korName}</div>
                        </Link>
                    )
                }
                <Link onClick={onToggle} className="cateItem">
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

export default withRouter(Header);