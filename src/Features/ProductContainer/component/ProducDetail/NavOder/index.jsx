import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'
import './style.scss'
NavOder.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    handleClickOder: PropTypes.func,
};

function NavOder({ name = '', price = 0, id = '' }) {
    const history = useHistory()
    const handleClick = () => {
        history.push('oder/' + id)
    }

    return (
        <div className="nav-oder__wraper">
            <div className="nav-oder layuot">
                <div className="nav-oder__box layuot-no-pd">
                    <h3 className="oder__name-product">{name}</h3>
                    <p className="oder__price-product hidden-on-mobie"><span>Price:</span>{price}$</p>
                    <div onClick={handleClick} className="oder__btn">ODER</div>
                </div>
            </div>
        </div>
    );
}

export default NavOder;