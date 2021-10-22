import React from 'react';
import ContactInfor from '../../component/ContactInfor';
import FormContact from '../../component/FormContact';
import './style.scss';
ContactPage.propTypes = {

};

function ContactPage(props) {
    return (
        <div className="container">
            <div className="container-contact__wraper layuot pdt-162">
                <div className="container-contact__box layuot-box grid-col-12">
                    <p className="contact-title">contact us</p>
                    <FormContact />
                    <ContactInfor/>

                </div>
            </div>
        </div>
    );
}

export default ContactPage;