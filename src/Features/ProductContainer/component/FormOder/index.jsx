import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'
import './style.scss'
import InputField from '../../../../Components/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

FormOder.propTypes = {

};

const schema = yup.object().shape({
    name: yup.string().required('vui long nhập tên'),
    email: yup.string().required('vui long nhập email').email('vui long nhật email'),
    ['band/Project']: yup.string(),
    phoneNumber: yup.number('vui long nhap so dien thoai').required('buoc phai nhap truong nay'),
    message: yup.string(),
});
function FormOder(props) {
    const listData = [
        { name: 'name', TypeElm: 'input', text: '' },
        { name: 'email', TypeElm: 'input', text: '' },
        { name: 'phoneNumber', TypeElm: 'input', text: 'phone number' },
        { name: 'band/Project', TypeElm: 'input', text: 'Band/Project' },
        { name: 'message', TypeElm: 'textarea', text: 'Would you like add something' },
    ]
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            ['band/Project']: '',
            message: '',
        },
        resolver: yupResolver(schema)
    })
    const { register, formState, } = form
    return (
        <form className='oder-page__form'>
            <div className="oder-page__form-box">
                {listData.map((item, index) => (
                    <InputField key={index} {...{ ...item, register, formState, formName: 'form-oder' }} />
                ))}
            </div>
            {/* <button>submit</button> */}
        </form>
    );
}

export default FormOder;