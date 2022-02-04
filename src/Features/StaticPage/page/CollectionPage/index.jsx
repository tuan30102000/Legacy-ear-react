import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import './style.scss'
import ItemCollection from '../../component/ItemCollection';
import collectionApi from '../../../../api/collectionApi';


function CollectionPage(props) {
    const [dataCollection, setdataCollection] = useState([])
    const [queryParam, setqueryParam] = useState({
        page: 1,
        limit: 2,
    })
    useEffect(() => {
        const getCollection = async () => {
            // console.log(queryParam)
            try {
                let data = await collectionApi.getAll(queryParam)
                const newData = Array.from(dataCollection.concat(data.docs))
                setdataCollection(newData)
            } catch (error) {
                console.log(error)
            }
        }
        getCollection()
    }, [queryParam])
    useEffect(() => {
        const list = document.querySelector('.container__collection-wraper')
        const body = document.getElementById('root')
        document.onscroll = () => {
            // console.log(document.documentElement.scrollTop, list.offsetTop, list.clientHeight, window.innerHeight, body.offsetHeight)
            const listHeight = list.offsetHeight
            const marginTop = list.offsetTop
            const mgBottom = body.offsetHeight - listHeight - marginTop
            const checkDk = body.offsetHeight - window.innerHeight - mgBottom < document.documentElement.scrollTop
            // console.log(body.offsetHeight - window.innerHeight, document.documentElement.scrollTop,body.offsetHeight - window.innerHeight - 3 -listHeight-marginTop)
            // console.log('footer cong thuc' + (body.offsetHeight - listHeight - marginTop), 'footer :' + footer.offsetHeight)
            if (checkDk) {
                const newParams = { ...queryParam }
                // console.log(listHeight, marginTop)
                newParams.page += 1
                // newParams.limit = 2
                setqueryParam(newParams)

            }
        }
        return () => {
        }
    }, [dataCollection])

    return (
        <div className="layuot container__collection-wraper pdt-162">
            <div className="layuot-box collection__box">
                <h1 className="collection__tile">Our <span>Monitors</span></h1>
                <div className="grid-col-12 collection__list-item">
                    {dataCollection.map((item) => <ItemCollection key={item._id} {...item} />)}
                </div>
            </div>
        </div>
    );
}

export default CollectionPage;