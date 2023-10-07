import React, { useState } from 'react'
import { LoginBodyType } from '../../global/types';
import { register } from '../../api/authApi';

const RegisterPage = () => {

    const handleRegister: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void = (e) => {
        e.preventDefault();
        register(formData).then((r) => {
            if (r) {
                console.log("login success");
            } else {
                console.log("wring data");
            }
        });
    };

    const [formData, setFormData] = useState<LoginBodyType>({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    value={formData.email}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    value={formData.password}
                />
                <button onClick={(e) => handleRegister(e)}>Login</button>
            </form>
        </div>
    );
}

export default RegisterPage