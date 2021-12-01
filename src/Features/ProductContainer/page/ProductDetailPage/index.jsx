import React from 'react';
import ChoiceBox from '../../component/ChoiceBox';
import './style.scss';
ProducDetailPage.propTypes = {

};
function ProducDetailPage(props) {

    return (

        <div className='layuot container-detail-page1__wraper pdt-162'>
            <div className='layuot-box detai-page1__box'>
                <ChoiceBox />


            </div>

            {/* <button onClick={handleSubmit}>submit</button> */}

        </div>
    );
}

export default ProducDetailPage;