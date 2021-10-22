import React from 'react';
import './style.scss';
ContactInfor.propTypes = {

};

function ContactInfor(props) {
    return (
        <div className="contact-info">
            <div className="contact-info__box meet">
                <p className="contact-info__tille">Let's meet!</p>
                <p className="contact-info__content meet">Contact us anyway you want. We reply to everyone right
                    away. See for yourself.</p>
            </div>
            <div className="contact-info__box email-us">
                <p className="contact-info__tille">call us:</p>
                <a className="contact-info__content email-us">contact@craftears.com</a>
            </div>
            <div className="contact-info__box call-us">
                <p className="contact-info__tille">Call us:</p>
                <p className="contact-info__content call-us">+48 797 847 328</p>
            </div>
            <div className="contact-info__box address">
                <p className="contact-info__tille">Address:</p>
                <p className="contact-info__content address">Forteczna 17B lok. 1.4</p>
                <p className="contact-info__content address">61-772, Poznan, POLAND</p>
            </div>
        </div>
    );
}

export default ContactInfor;