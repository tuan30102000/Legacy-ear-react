import React, { useState } from 'react';
import DisplayComponent from '../../component/DisplayComponent';
import ListOpitonBtn from '../../component/ListOptionBtn';
import FacePlateComponent from '../../component/TypeComponents/FacePlateComponent';
import ShellComponent from '../../component/TypeComponents/ShellComponent';
import './style.scss';
ProducDetailPage.propTypes = {

};

function ProducDetailPage(props) {
    const listOption = ['shell', 'faceplate', 'artwork', 'cable', 'material']
    const [option, setOpition] = useState(0)
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
            <div className='layuot-box detai-page1__box'>
                <ListOpitonBtn {...{ listOption, onChange: setOpition, option, itemStyle: { flex: 1 } }} />
                <DisplayComponent showState={option === 0}>
                    <ShellComponent data={data.shell} />
                </DisplayComponent>
                <DisplayComponent showState={option === 1}>
                    <FacePlateComponent data={data.faceplate} />
                </DisplayComponent>


            </div>



        </div>
    );
}

export default ProducDetailPage;