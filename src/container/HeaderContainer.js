import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import Header from '../components/common/Header';
import { useDispatch } from 'react-redux';
import { getContact } from '../store/contactData';

const HeaderContainer = ({ match }) => {
    let urlProp;
    let url = match.url;

    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);

    const onToggle = () => {
        setModal(!modal);
        dispatch(getContact(!modal));
    }


    const urlCheck = (url) => {
        if (url === "/") {
            urlProp = "korea";
        }
        else if (url === "/distance") {
            urlProp = "distance";
        }
        else if (url === '/vaccine') {
            urlProp = "vaccine";
        }
    }

    urlCheck(url);

    useEffect(() => {
        if (urlProp) {
            let menu = document.querySelector(`#${urlProp}`);
            menu.classList.add("menu_on");
        }
    }, [urlProp]);

    return (
        <Header
            onToggle={onToggle}
            setModal={setModal}
            modal={modal}
        />
    );
};

export default withRouter(HeaderContainer);