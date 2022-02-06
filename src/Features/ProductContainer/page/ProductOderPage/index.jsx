import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import productApi from '../../../../api/productApi';
import Loading from '../../../../Components/Loading';
import { ApiUrl } from '../../../../Constants/ApiUrl';
import method from '../../../../Constants/method';
import useFecthDetail from '../../../../hook/useFecthDetail';
import ChoiceBox from '../../component/ChoiceBox';
import FormOder from '../../component/FormOder';
import ProductThumbnail from '../../component/ProductThumbnail';
import './style.scss';
ProducOderPage.propTypes = {

};
function ProducOderPage() {
    const Match = useRouteMatch()
    const { params: { id } } = Match
    const { data, loadState } = useFecthDetail(productApi.getItem, 'oder/' + id)
    const hasData = !!data.thumbnail
    // console.log(data.oderData)
    console.log(data)
    if (hasData) {
        return (
            (<>
                <div className='layuot container-detail-page1__wraper pdt-162'>
                    <div style={{ display: 'flex' }} className='layuot-box detai-page1__box'>
                        <ProductThumbnail url={ApiUrl.srcStart + data.thumbnail} />
                        <ChoiceBox data={data.oderData} listOption={method.getListKeyObj(data.oderData)} />
                    </div>
                </div>
                <div className='layuot container-detail-page2__wraper pdt-162'>
                    <div className='layuot-box detai-page2__box'>
                        <FormOder />
                    </div>

                </div>
            </>)
        );
    }
    return <Loading />
}

export default ProducOderPage;