import * as S from './elements'
import * as GlobalStyles from '../../global/elements'
import AuthInput from '../../global/authInput/AuthInput'
import { LoginBodyType } from '../../../../global/types';
import { useState } from 'react';
import IconContainer from '../../../../global/hoc/IconContainer';
import { FaRegUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { login } from '../../../../api/authApi';
import routerList from '../../../../routerList';
import authValidate from '../../../../global/helpers/authValidate';
import AuthRememberMe from '../../global/authRememberMe/AuthRememberMe';
import LoadingSpinner from '../../../../global/loadingSpinner/LoadingSpinner';

const LoginBox = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<LoginBodyType>({
        email: "",
        password: "",
    });
    const [error, setError] = useState<string>(" ")
    const [fieldError, setFieldError] = useState<'password' | 'email' | null>(null)
    const [remamberMe, setRemaberMe] = useState<boolean>(true)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
            login(formData).then((r) => {
                setIsLoading(false)
                if (!remamberMe) {
                    window.addEventListener('beforeunload', function () {
                        localStorage.removeItem('tokens');
                    });
                }
                if (r) {
                    console.log("login success");
                    navigate(`/${routerList.HomeUserPage.url}`)
                } else {
                    setError("incorrect login or password")
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
    };

    return (
        <S.Container>
            <S.Wrapper>
                <S.Form onSubmit={(e) => handleLogin(e)}>
                    <S.Row $margin='40px 0 30px 0' >
                        <GlobalStyles.AutPageBoxTitle>
                            Login
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
                    <S.Row $margin={'0'}>
                        <GlobalStyles.AuthErrorParagraph>{error}</GlobalStyles.AuthErrorParagraph>
                        <LoadingSpinner isWhite={true} isLoading={isLoading} />
                    </S.Row>
                    <S.Row $margin='20px 0 20px 0'>
                        <AuthRememberMe isChecked={remamberMe} setChecked={setRemaberMe} />
                        <S.ForgotPassword href='#'>Forgot Password?</S.ForgotPassword>
                    </S.Row>
                    <S.Row $margin='20px 0 20px 0'>
                        <GlobalStyles.AuthButton disabled={(formData.email.length == 0) || (formData.password.length == 0)} type="submit">
                            Login
                        </GlobalStyles.AuthButton>
                    </S.Row>
                </S.Form>
            </S.Wrapper>
        </S.Container>

    )
}

export default LoginBox