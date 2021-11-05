import React from 'react';
import TextField from '../InpuFieldAuth/TextField';
import { useForm } from 'react-hook-form'
import './style.scss';
import PasswordField from '../InpuFieldAuth/PasswordField';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import userApi from '../../../../api/userApi';
FormLogin.propTypes = {

};
const schema = yup.object().shape({
    email: yup.string().required('vui long nhap email').email('truong nay phai la email'),
    password: yup.string().required('vui long nhap password').min(6, 'vui long nhap du 6 ki tu'),
});
function FormLogin(props) {
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',

        },
        resolver: yupResolver(schema)
    })
    const { register, handleSubmit,formState } = form
    const onSubmit = async (data) => {
       const resData= await userApi.login(data)
       console.log(resData) 
    }
    return (
        <form className='form__auth-box' onSubmit={handleSubmit(onSubmit)}>
            <TextField {...{formState}} name='email' register={register} plhd='Enter your email' />
            <PasswordField  {...{formState}} name='password' register={register} plhd='Enter your password' />
            <Link to='#'>Fogot password?</Link>
            <button className='form__auth-submit'>Login</button>
            <Link to={'/register'} >register</Link>
        </form>
    );
}

export default FormLogin;