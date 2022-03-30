import classNames from 'classnames';
import gsap from 'gsap/all';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../../assets/image/logoblack.png'
import logoWhite from '../../assets/image/logowhite.png'
import ScrollIntoView from 'react-scroll-into-view';
import { useMediaQuery } from 'react-responsive'
import './style.scss';
import { Route, Switch } from 'react-router';
Header.propTypes = {

};
function HeaderPage() {
    return (
        <>
            <Switch>
                <Route path='/product/sen' >
                    <Header isRelative={true} />
                </Route>
                <Route path='/product/dongson' >
                    <Header isRelative={true} />
                </Route>
                <Route path={'/product/:productId'}>
                    <Header isRelative={true} backgroundColor='#f7f7f7' canNotResize={true} />
                </Route>
                <Route path={'/collection'}>
                    <Header isRelative={true} />
                </Route>
                <Route path={'/product'}>
                    <Header />
                </Route>
                <Route path='/' exact >
                    <Header isHome={true} />
                </Route>
                <Route path='/' >
                    <Header isRelative={true} />
                </Route>
            </Switch>
        </>
    )
}
function Header({ isRelative = false, canNotResize = false, backgroundColor = '', isHome = false }) {
    const isMobile = useMediaQuery({
        query: '(max-width:757.5px)'
    })
    const [stateMenuMobie, setstateMenuMobie] = useState(false)
    const [scrollState, setscrollState] = useState(document.documentElement.scrollTop === 0)
    useEffect(() => {
        const onScroll = () => {
            setscrollState(document.documentElement.scrollTop === 0)
        }
        document.addEventListener('scroll', onScroll)
        return () => {
            document.removeEventListener('scroll', onScroll)
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
                'scroll': !scrollState,
                'can-not-resize': canNotResize,
                'relative': isRelative
            })
        }
            style={{ backgroundColor: backgroundColor, }}
        >
            <div className="header-box layuot-box">
                <Link to='/' className="header__logo logo">
                    <img className="" src={isRelative ? logoBlack : stateMenuMobie ? logoBlack : scrollState ? logoWhite : logoBlack} alt="" />
                    <span>Legacy</span>
                </Link>
                <ul className="header__list-link">
                    <li className="header__item">
                        {isHome && <ScrollIntoView selector='#ciem'>
                            <Link to='/' className="header__item-link">Oder now</Link>
                        </ScrollIntoView>}
                        {!isHome && <Link to='/' className="header__item-link">Oder now</Link>}
                    </li>
                    <li className="header__item"><Link to='/collection' className="header__item-link">Collection</Link></li>
                    <li className="header__item"><Link to='/product' className="header__item-link">Product</Link></li>
                    <li className="header__item"><Link className="header__item-link" to='/contact'>
                        contact
                    </Link></li>
                </ul>
                {isMobile &&
                    <div className="header__btn-mobie" onClick={() => { setstateMenuMobie(prev => !prev) }}>
                        {!stateMenuMobie && <span className="open"><i className="fas fa-bars" aria-hidden="true" /></span>}
                        {stateMenuMobie && <span className="close">X</span>}
                    </div>
                }
            </div>
        </header>
    );
}



// function HeaderCurrent() {

//     const [stateMenuMobie, setstateMenuMobie] = useState(false)
//     const [scrollState, setscrollState] = useState(document.documentElement.scrollTop === 0)
//     useEffect(() => {
//         document.onscroll = () => {
//             setscrollState(document.documentElement.scrollTop === 0)
//         }

//         return () => {

//         }
//     }, [])
//     useEffect(() => {
//         if (stateMenuMobie) {

//             gsap.from('.header__item', { duration: 0.8, opacity: 0, stagger: .2, })

//         }
//     }, [stateMenuMobie])
//     return (
//         <header className={
//             classNames({
//                 'header layuot': true,
//                 'open-menu': stateMenuMobie,
//                 'scroll': !scrollState
//             })
//         }>
//             <div className="header-box layuot-box">
//                 <Link to='/' className="header__logo logo">
//                     <img className="logo-scroll-show" src="https://lh3.google.com/u/0/d/1HWbbV1ewKU37D52Rh5e5n8Zc6lBU495a=w1920-h867-iv1" alt="" />
//                     <img className="logo-scroll-hidden" src="https://lh3.google.com/u/0/d/1wbh7KEpPP5iVW__U3mfLr5kBpQoCgKz7=w1920-h867" alt="" /><span>Legacy</span>
//                 </Link>
//                 <ul className="header__list-link">
//                     <li className="header__item">
//                         <ScrollIntoView selector='#ciem'>
//                             <Link to='/' className="header__item-link">Oder now</Link>
//                         </ScrollIntoView>
//                     </li>
//                     <li className="header__item"><Link to='/collection' className="header__item-link">Collection</Link></li>
//                     <li className="header__item"><Link to='/product' className="header__item-link">Product</Link></li>
//                     <li className="header__item"><Link className="header__item-link" to='/contact'>
//                         contact
//                     </Link></li>
//                 </ul>
//                 {/* <div className="navigation">
//                     <div className="user-path">
//                         <label htmlFor="navigation__user-input" className="header-link__singed  extension-icon"><i className="far fa-user-circle" aria-hidden="true" /></label>
//                     </div>
//                 </div> */}
//                 <div className="header__btn-mobie show-mb" onClick={() => { setstateMenuMobie(prev => !prev) }}><span className="open"><i className="fas fa-bars" aria-hidden="true" /></span><span className="close">X</span></div>
//             </div>
//             {/* <input type="checkbox" hidden id="navigation__user-input" />
//             <label htmlFor="navigation__user-input" className="nav-over-play"> </label>
//             <div className="navigatio__user-nav">
//                 <div className="user-nav__box">
//                     <img src="https://lolg-cdn.porofessor.gg/img/champion-icons/11.13/64/238.png" alt="" className="user-nav__avt" />
//                     <div className="user-nav__list-info">
//                         <p className="user-info__name">Tuân Phạm</p>
//                         <p className="user-info__point">120 point</p>
//                     </div>
//                 </div>
//                 <ul className="user-nav__list-link">
//                     <li><Link to='#'>My Acount</Link></li>
//                     <li><Link to='#'>Log Out</Link></li>
//                     <li><Link to='#'>EN</Link></li>
//                     <li><label htmlFor="navigation__user-input">Exit <span>X</span></label></li>
//                 </ul>
//             </div> */}
//         </header>
//     );
// }

export default HeaderPage;