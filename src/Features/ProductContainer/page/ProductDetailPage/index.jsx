import React, { useState } from 'react';
import ListOpitonBtn from '../../component/ListOptionBtn';
import ListOpitons from '../../component/ListOpitonsCrical';
import SideChoice from '../../component/SideChoice';
import './style.scss';
import ListOpitonsCrical from '../../component/ListOpitonsCrical';
ProducDetailPage.propTypes = {

};

function ProducDetailPage(props) {
    const listOption = ['shell', 'faceplate', 'artwork', 'cable', 'material']
    const [option, setOpition] = useState('shell')
    const data = {
        shell: {
            name: 'shell',
            value: [1, 2, 3, 4]
        },
        faceplate: {
            name: 'faceplate',
            listOption: [
                {
                    name: 'solid',
                    Value: [1, 2, 3, 4]
                },
                {
                    name: 'translucent',
                    Value: [1, 2, 3, 4]
                }
            ]
        },
        artwork: {
            name: 'artwork',
            listOption: [
                {
                    name: 'logo-color',
                    Value: [1, 2, 3, 4]
                },
                {
                    name: 'speciality',
                    Value: [1, 2, 3, 4]
                }
            ]
        },
        cable: {
            name: 'cable',
            option: [
                {
                    name: '',
                    value: 1
                },
                {
                    name: '',
                    value: 1
                },
                {
                    name: '',
                    value: 1
                },
            ]

        },
    }
    return (
        <div className='layuot container-detail-page1__wraper pdt-162'>
            {/* <div className='layuot-box detai-page1__box'>
                <ListOpitonBtn {...{ listOption, onChange: setOpition, option }} />
                {listOption.map((item, index) => ( item === option && <ListOpitons name={item} key={index} className={false} /> )
                )}

            </div> */}
            <SideChoice name='shell'
                Component={ListOpitonsCrical}
                componentProp={{ listData: data.shell.value }} />


        </div>
    );
}

export default ProducDetailPage;