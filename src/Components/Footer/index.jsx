import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
Footer.propTypes = {

};

function Footer(props) {
    return (
        <footer className="footer">
            <div className="layuot footer-layuot__wraper">
                <div className="layuot-box footer-layuot__box grid-col-12">
                    <div className="footer__related">
                        <Link to='#' className="footer__logo logo">
                            <img  src="https://lh3.google.com/u/0/d/1wbh7KEpPP5iVW__U3mfLr5kBpQoCgKz7=w1920-h867" alt="" />
                            <span>Legacy</span>
                        </Link>
                        <p className="footer__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi non pariatur numquam animi
                            nam at impedit odit nisi. </p>
                        <ul className="footer__social-network">
                            <li className="social-network__items"><Link to='#' className="social-network__links"><i className="fab fa-facebook-square" aria-hidden="true" /></Link></li>
                            <li className="social-network__items"><Link to='#' className="social-network__links"><i className="fab fa-twitter-square" aria-hidden="true" /></Link></li>
                            <li className="social-network__items"><Link to='#' className="social-network__links"><i className="fab fa-instagram-square" aria-hidden="true" /></Link></li>
                            <li className="social-network__items"><Link to='#' className="social-network__links"><i className="fab fa-youtube-square" aria-hidden="true" /></Link></li>
                        </ul>
                    </div>
                    <div className="footer__nav">
                        <ul className="nav__list page">
                            <li className="nav-item title">Content</li>
                            <li className="nav-item"><Link to='#' className="nav-link">Products</Link></li>
                            <li className="nav-item"><Link to='#' className="nav-link">Artists</Link></li>
                            <li className="nav-item"><Link to='#' className="nav-link">Terms of Use</Link></li>
                            <li className="nav-item"><Link to='#' className="nav-link">Privacy Policy</Link></li>
                            <li className="nav-item"><Link to='#' className="nav-link">Contact</Link></li>
                        </ul>
                        <ul className="nav__list social">
                            <li className="nav-item title">Company</li>
                            <li className="nav-item"><Link to='#' className="nav-link">About Us</Link></li>
                            <li className="nav-item"><Link to='#' className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer__boder-bt" />
                    <h2 className="footer__authors">by: <Link to='#'>Tuân Phạm</Link>
                    </h2>
                </div>
            </div>
        </footer>
    );
}

export default Footer;