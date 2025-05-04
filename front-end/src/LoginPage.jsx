import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', loginData);
            const { success, message } = response.data;

            if (success) {
                console.log("login successfully");
            } else {
                console.log(message);
            }
        } catch (error) {
            console.log(error);
        }

        setLoginData({ username: '', password: '' });
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLoginSubmit} className="login-form">
                <h1 className="login-title">Welcome Back</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    value={loginData.username}
                    onChange={handleLoginChange}
                    required
                    className="login-input"
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                    className="login-input"
                />
                <button type='submit' className="login-button">Login</button>
                <p className="login-footer">
                    Not registered yet? <Link to='/registration' className="register-link">Register Here</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
