import React from 'react';
import './style.scss';
Loading.propTypes = {

};

function Loading() {
    return (
        <div className="loader__wraper">
            <div className="loader__box">
                <div className="loader__item" style={{ ['--value']: 1 }} />
                <div className="loader__item" style={{ ['--value']: 2 }} />
                <div className="loader__item" style={{ ['--value']: 3 }} />
                <div className="loader__item" style={{ ['--value']: 4 }} />
                <div className="loader__item" style={{ ['--value']: 5 }} />
                <div className="loader__item" style={{ ['--value']: 6 }} />
                <div className="loader__item" style={{ ['--value']: 7 }} />
                <div className="loader__item" style={{ ['--value']: 8 }} />
            </div>
        </div>
    );
}

export default Loading;