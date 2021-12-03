import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import ListOpitonBtn from '../ListOptionBtn';
import AllChoice from '../AllChoice';
ChoiceBox.propTypes = {

};

function ChoiceBox(props) {
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
                    Value: [5, 6, 7, 8, 9, 10]
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
                    Value: [5, 6, 7, 8]
                }
            ]
        },
        cable: {
            name: 'cable',
            options: [
                {
                    name: 'SocketType',
                    value: [1, 2],
                    text: ['2-pin', 'ipx']
                },
                {
                    name: 'cableColor',
                    value: [1, 2],
                    text: ['white', 'black']
                }, {
                    name: 'SocketLength',
                    value: [1, 2],
                    text: ['48"', '64"']
                },
            ]

        },
        material: {
            name: 'material',
            options: [
                {
                    name: 'material',
                    value: [1, 2, 3, 4,],
                    text: ['gold', 'platinum', 'dimond', 'master']

                }
            ]


        }
    }
    const handleSubmit = () => {
        const listChoiceElm = document.querySelectorAll('input[type=radio][currentside=choose]:checked')
        const arrFromListChoice = Array.from(listChoiceElm)
        const result = {}
        arrFromListChoice.forEach((item, index) => {
            const forData = item.getAttribute('fordata')
            const value = item.getAttribute('value')
            result[forData] = !Array.isArray(result[forData]) ? [] : result[forData]
            result[forData].push(value)
        })
        console.log(result)
    }
    return (
        <div className='choice-box'>
            <ListOpitonBtn {...{
                listOption,
                onChange: setOpition,
                option,
                itemStyle: {
                    // flex: 1,
                    fontSize: '14px'
                }
            }} />
            <AllChoice data={data} option={option} />

            <button onClick={handleSubmit}>
                submit
            </button>
        </div>
    );
}

export default ChoiceBox;