import React, { } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss'
import method from '../../Constants/method';
PaginationBtn.propTypes = {
    filterFc: PropTypes.func.isRequired,
    paginationInfo: PropTypes.object.isRequired,
};

function PaginationBtn(props) {
    const { filterFc, paginationInfo } = props
    // const [ListBtn, setListBtn] = useState(method.listPaginationBtn(paginationInfo.page, 7, Math.round(x)))
    // useEffect(() => {
    //     setListBtn(method.listPaginationBtn(PageNumber, 1, 1))

    // }, [PageNumber])
    // console.log(ListBtn)
    const ListBtn = method.listPaginationBtn(paginationInfo.page, 7, Math.ceil(paginationInfo.total / paginationInfo._limit))
    const onChange = (page) => {
        if (filterFc) {
            filterFc(page)
        }
        return
    }
    return (
        <div className='pagination__btn-list'>
            <button
                disabled={paginationInfo.page === 1}
                className='pagination__btn next'
                onClick={() => onChange(paginationInfo.page - 1)}>
                <i className="fal fa-chevron-double-left"></i>
            </button>
            {ListBtn.map((item) => <button
                key={item}
                className={classNames({
                    choose: item === paginationInfo.page,
                    'pagination__btn number': true
                })}
                onClick={() => { onChange(item) }}>{item}
            </button>)}
            <button
                className='pagination__btn next'
                disabled={paginationInfo.page === Math.ceil(paginationInfo.total / paginationInfo._limit)}
                onClick={() => onChange(paginationInfo.page + 1)}>
                <i className="fal fa-chevron-double-right"></i>
            </button>
        </div>
    );
}

export default PaginationBtn;