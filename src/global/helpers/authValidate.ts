import { LoginBodyType } from '../types';

const authValidate = ({
  email,
  password,
}: LoginBodyType): {
  isError: boolean;
  errorText?: string;
  field?: 'email' | 'password';
} => {
  if (!email.includes('@') || email.length < 3) {
    return { isError: true, errorText: 'incorrect email', field: 'email' };
  }
  if (password.length < 4) {
    return {
      isError: true,
      errorText: 'incorrect password',
      field: 'password',
    };
  }
  return { isError: false };
};

export default authValidate;
