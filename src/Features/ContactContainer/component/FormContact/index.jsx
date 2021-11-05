import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../../../Components/InputField';
import './style.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
FormContact.propTypes = {

};

const schema = yup.object().shape({
    name: yup.string().required('vui long nhập tên'),
    email: yup.string().required('vui long nhập email').email('vui long nhật email'),
    message: yup.string().required('Vui lòng để lại lời nhắn'),
});
function FormContact(props) {
    const form = useForm({
        defaultValues: {
            'name': '',
            'email': '',
            'message': '',
        },resolver:yupResolver(schema)
    })
    const { register, handleSubmit ,formState} = form
    const listData = [
        { name: 'name', TypeElm: 'input' },
        { name: 'email', TypeElm: 'input' },
        { name: 'message', TypeElm: 'textarea' },
    ]
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            {
                listData.map((item, index) => (
                    <InputField key={index} formState={formState} {...item} register={register} formName='contact' />
                ))
            }
            <button className="form__btn contact-btn">SEND</button>
        </form>
    );
}

export default FormContact;