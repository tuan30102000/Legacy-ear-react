import React from 'react';
import './style.scss';
StepOder.propTypes = {

};

function StepOder(props) {
    return (
        <ul className="steps">
            <li className="step__item">
                <p className="step-number">1</p>
                <h4 className="step-title">Customize</h4>
                <p className="step-content">fill the form, we'll get back to you</p>
            </li>
            <li className="step__item">
                <p className="step-number">2</p>
                <h4 className="step-title">Visit an audiologist</h4>
                <p className="step-content">you will get your ear cast</p>
            </li>
            <li className="step__item">
                <p className="step-number">3</p>
                <h4 className="step-title">We get to work!
                </h4>
                <p className="step-content">shipment takes up to 21 days</p>
            </li>
        </ul>
    );
}

export default StepOder;