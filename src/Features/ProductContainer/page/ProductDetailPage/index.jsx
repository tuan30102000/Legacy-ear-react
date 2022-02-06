import React, { useMemo } from 'react';
import './style.scss';
import NavOder from '../../component/ProducDetail/NavOder'
import DetailPageSixth from '../../component/ProducDetail/DetailPageSixth';
import DetailPageFifth from '../../component/ProducDetail/DetailPageFifth';
import DetailPageSecond from '../../component/ProducDetail/DetailPageSecond';
import DetailPageThird from '../../component/ProducDetail/DetailPageThird';
import DetailPageFourth from '../../component/ProducDetail/DetailPageFourth';
import DetailPageFirst from '../../component/ProducDetail/DetailPageFirst';
import { useRouteMatch } from 'react-router-dom';
import useFecthDetail from '../../../../hook/useFecthDetail';
import productApi from '../../../../api/productApi';
import { ApiUrl } from '../../../../Constants/ApiUrl';
import method from '../../../../Constants/method';
import Loading from '../../../../Components/Loading';
ProducDetailPage.propTypes = {

};

function ProducDetailPage(props) {
    const Match = useRouteMatch()
    const id = Match.params.productId
    const { data, loadState } = useFecthDetail(productApi.getItem, id)
    const check = !!data._id
    if (check) {
        return (
            <>
                {loadState && <Loading />}
                <NavOder name={data.name} price={data.minPrice} id={id} />
                <DetailPageFirst name={data.name} caption={method.checkExistsObj(data.caption, 0)} imgSrc={ApiUrl.srcStart + data.imgSrc} />
                <DetailPageSecond caption={data.caption[1]} description={data.description[0]} subSrc={method.addStringForItemArr(data.subSrc, ApiUrl.srcStart)} />
                <DetailPageThird title={data.title} description={data.description[1]} />
                <DetailPageFourth parameter={data.parameter} />
                <DetailPageFifth name={data.name} minPrice={data.minPrice} maxPrice={data.maxPrice} description={data.description} imgSrc={data.imgSrc} />
                <DetailPageSixth />
            </>

        );
    }
    return <Loading />
}

export default ProducDetailPage;