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
        const listChoice = document.querySelectorAll('input[type=radio][currentside=choose]:checked')
        console.log(listChoice)
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


        </div>
    );
}

export default ChoiceBox;