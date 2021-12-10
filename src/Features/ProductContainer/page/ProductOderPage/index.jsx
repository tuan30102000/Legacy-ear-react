import React from 'react';
import ChoiceBox from '../../component/ChoiceBox';
import FormOder from '../../component/FormOder';
import ProductThumbnail from '../../component/ProductThumbnail';
import './style.scss';
ProducOderPage.propTypes = {

};
function ProducOderPage(props) {

    return (
        <>
            <div className='layuot container-detail-page1__wraper pdt-162'>
                <div style={{display:'flex'}} className='layuot-box detai-page1__box'>
                    <ProductThumbnail />
                    <ChoiceBox />
                </div>
            </div>
            <div className='layuot container-detail-page2__wraper pdt-162'>
                <div className='layuot-box detai-page2__box'>
                    <FormOder />
                </div>

            </div>
        </>
    );
}

export default ProducOderPage;