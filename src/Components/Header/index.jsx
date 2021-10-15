import classNames from 'classnames';
import gsap from 'gsap/all';
import React, { useEffect, useState } from 'react';
import './style.scss';
Header.propTypes = {

};

function Header(props) {

    const [stateMenuMobie, setstateMenuMobie] = useState(false)
    const [scrollState, setscrollState] = useState(document.documentElement.scrollTop !== 0)
    useEffect(() => {
        document.onscroll = () => {
            // console.log(document.documentElement.scrollTop)
            setscrollState(document.documentElement.scrollTop === 0)
        }

        return () => {

        }
    }, [])
    useEffect(() => {
        if (stateMenuMobie) {

            gsap.from('.header__item', { duration: 0.8, opacity: 0, stagger: .2, }) 

        }
    }, [stateMenuMobie])
    return (
        <header className={
            classNames({
                'header layuot': true,
                'open-menu': stateMenuMobie,
                'scroll':!scrollState
            })
        }>
            <div className="header-box layuot-box">
                <a className="header__logo logo" href="/">
                    <img className="logo-scroll-show" src="https://lh3.google.com/u/0/d/1HWbbV1ewKU37D52Rh5e5n8Zc6lBU495a=w1920-h867-iv1" alt="" />
                    <img className="logo-scroll-hidden" src="https://lh3.google.com/u/0/d/1wbh7KEpPP5iVW__U3mfLr5kBpQoCgKz7=w1920-h867" alt="" /><span>Legacy</span>
                </a>
                <ul className="header__list-link">
                    <li className="header__item"><a href="#ciem" className="header__item-link">Our CIEM's</a></li>
                    <li className="header__item"><a href="#" className="header__item-link">Works</a></li>
                    <li className="header__item"><a href="#" className="header__item-link">Artists</a></li>
                    <li className="header__item"><a href="#" className="header__item-link">Contact</a></li>
                </ul>
                <div className="navigation">
                    <div className="user-path">
                        <label htmlFor="navigation__user-input" className="header-link__singed  extension-icon"><i className="far fa-user-circle" aria-hidden="true" /></label>
                    </div>
                </div>
                <div className="header__btn-mobie show-mb" onClick={() => { setstateMenuMobie(prev => !prev) }}><span className="open"><i className="fas fa-bars" aria-hidden="true" /></span><span className="close">X</span></div>
            </div>
            <input type="checkbox" hidden id="navigation__user-input" />
            <label htmlFor="navigation__user-input" className="nav-over-play"> </label>
            <div className="navigatio__user-nav">
                <div className="user-nav__box">
                    <img src="https://lolg-cdn.porofessor.gg/img/champion-icons/11.13/64/238.png" alt="" className="user-nav__avt" />
                    <div className="user-nav__list-info">
                        <p className="user-info__name">Tuân Phạm</p>
                        <p className="user-info__point">120 point</p>
                    </div>
                </div>
                <ul className="user-nav__list-link">
                    <li><a href>My Acount</a></li>
                    <li><a href>Log Out</a></li>
                    <li><a href>EN</a></li>
                    <li><label htmlFor="navigation__user-input">Exit <span>X</span></label></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;