import * as S from './elements'
import * as GlobalStyles from '../../global/elements'
import AuthInput from '../../global/authInput/AuthInput'
import { LoginBodyType } from '../../../../global/types';
import { useState } from 'react';
import IconContainer from '../../../../global/hoc/IconContainer';
import { FaRegUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { register } from '../../../../api/authApi';
import routerList from '../../../../routerList';
import authValidate from '../../../../global/helpers/authValidate';
import AuthRememberMe from '../../global/authRememberMe/AuthRememberMe';
import LoadingSpinner from '../../../../global/loadingSpinner/LoadingSpinner';

const RegisterBox = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<LoginBodyType & { repeatPassword: string }>({
        email: "",
        password: "",
        repeatPassword: "",
    });
    const [error, setError] = useState<string>(" ")
    const [fieldError, setFieldError] = useState<'password' | 'email' | 'repeatPassword' | null>(null)
    const [remamberMe, setRemaberMe] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password !== formData.repeatPassword) {
            setError('Passwords are not the same')
            setFieldError('repeatPassword')
            return
        }
        const validateResult = authValidate(formData)
        if (validateResult.isError) {
            if (validateResult.field) {
                setFieldError(validateResult.field)
            }
            if (validateResult.errorText) {
                setError(validateResult.errorText)
            }
        } else {
            setIsLoading(true)
            register(formData).then(() => {
                setIsLoading(false)
                if (!remamberMe) {
                    window.addEventListener('beforeunload', function () {
                        localStorage.removeItem('tokens');
                    });
                }
                navigate(`/${routerList.HomeUserPage.url}`)
            }).catch(err => {
                setIsLoading(false)
                console.log('err')
                console.log(err)
                if (err.message && Array.isArray(err.message) && err.message.length > 0) {
                    setError(err.message[0])
                }
            })
        }

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(" ")
        if (e.target.name == fieldError) {
            setFieldError(null)
        }
        if (e.target.name == 'password' && fieldError == 'repeatPassword') {
            setFieldError(null)
        }
    };

    return (
        <S.Container>
            <S.Wrapper>
                <S.Form onSubmit={(e) => handleRegister(e)}>
                    <S.Row $margin='40px 0 30px 0' >
                        <GlobalStyles.AutPageBoxTitle>
                            Register
                        </GlobalStyles.AutPageBoxTitle>
                    </S.Row>
                    <S.Row $margin='20px 0 20px 0' >
                        <S.Label $fieldError={fieldError == 'email'}>
                            <AuthInput onChange={handleChange} name={'email'} placeholder='Email' value={formData.email} type={'email'} />
                            <IconContainer color='white' size={30} icon={FaRegUser} />
                        </S.Label>
                    </S.Row>
                    <S.Row $margin='20px 0 20px 0'>
                        <S.Label $fieldError={fieldError == 'password'}>
                            <AuthInput onChange={handleChange} name={'password'} placeholder='Password' value={formData.password} type='password' />
                            <IconContainer color='white' size={30} icon={GiPadlock} />
                        </S.Label>
                    </S.Row>
                    <S.Row $margin='20px 0 20px 0'>
                        <S.Label $fieldError={fieldError == 'repeatPassword'}>
                            <AuthInput onChange={handleChange} name={'repeatPassword'} placeholder='Repeat password' value={formData.repeatPassword} type='password' />
                            <IconContainer color='white' size={30} icon={GiPadlock} />
                        </S.Label>
                    </S.Row>
                    <S.Row $margin='20px 0 20px 0'>
                        <AuthRememberMe isChecked={remamberMe} setChecked={setRemaberMe} />
                        <S.HaveAccount href='#'>Do you have account?</S.HaveAccount>

                    </S.Row>
                    <S.Row >
                        <GlobalStyles.AuthErrorParagraph>{error}</GlobalStyles.AuthErrorParagraph>
                        <LoadingSpinner isWhite={true} isLoading={isLoading} />
                    </S.Row>
                    <S.Row $margin='20px 0 20px 0'>
                        <GlobalStyles.AuthButton disabled={(formData.email.length == 0) || (formData.password.length == 0)} type="submit">
                            Register
                        </GlobalStyles.AuthButton>
                    </S.Row>
                </S.Form>
            </S.Wrapper>
        </S.Container>

    )
}

export default RegisterBox