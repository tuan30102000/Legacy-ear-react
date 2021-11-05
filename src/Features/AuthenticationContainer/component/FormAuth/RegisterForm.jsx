import React from 'react';
import { useForm } from 'react-hook-form';
import PasswordField from '../InpuFieldAuth/PasswordField';
import TextField from '../InpuFieldAuth/TextField';
import './style.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from 'react-router-dom';
import userApi from '../../../../api/userApi'
FormRegister.propTypes = {

};

const schema = yup.object().shape({
    fullName: yup.string().required('vuilong nhap ten').test('check name', 'vui long nhap ho ten day du', (value) => value.split(' ').length >= 2),
    email: yup.string().required('vui longf nhap email').email(),
    password: yup.string().required('vui long nhap password').min(6, 'vui long nhap du 6 ki tu'),
    passwordRepeat: yup.string().required('vui long nhap lai password').min(6, 'vui long nhap du 6 ki tu').oneOf([yup.ref('password')], 'vui long nhap chinh xac password'),
});

function FormRegister(props) {
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
            password: '',
            passwordRepeat: '',

        }, resolver: yupResolver(schema)
    })
    const { register, handleSubmit,formState } = form
    const onSubmit = async (data) => {
        delete data.passwordRepeat
        const resData= await userApi.register(data)
        console.log(resData)
    }
    return (
        <form className='form__auth-box' onSubmit={handleSubmit(onSubmit)}>
            <TextField {...{formState}} name='fullName' register={register} plhd='Enter your fullName' />
            <TextField {...{formState}} name='email' register={register} plhd='Enter your email' />
            <PasswordField {...{formState}} name='password' register={register} plhd='Enter your password' />
            <PasswordField {...{formState}} name='passwordRepeat' register={register} plhd='Repeat enter your password' />
            <button className='form__auth-submit'>Register</button>
            <Link to={'/login'} >Login</Link>

        </form>
    );
}

export default FormRegister;