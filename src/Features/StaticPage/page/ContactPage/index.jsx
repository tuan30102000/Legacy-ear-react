import React, { useEffect } from 'react';
import ContactInfor from '../../component/ContactInfor';
import FormContact from '../../component/FormContact';
import './style.scss';
ContactPage.propTypes = {

};

function ContactPage() {

    useEffect(() => {
        document.documentElement.scrollTop = 0
        return () => {
        }
    }, [])

    return (
        <div className="container">
            <div className="container-contact__wraper layuot pdt-162">
                <div className="container-contact__box layuot-box grid-col-12">
                    <p className="contact-title">contact us</p>
                    <FormContact />
                    <ContactInfor />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;