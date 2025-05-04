import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RegistrationPage.css';

const RegistrationPage = () => {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        password: ''
    });

    const handleRegistrationChange = (e) => {
        const { name, value } = e.target;
        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRegistrationSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/register', registrationData);
        } catch (error) {
            console.log(error);
        }

        setRegistrationData({ username: '', password: '' });
    };

    return (
        <div className="register-container">
            <form onSubmit={handleRegistrationSubmit} className="register-form">
                <h1 className="register-title">Create an Account</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={registrationData.username}
                    onChange={handleRegistrationChange}
                    required
                    className="register-input"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registrationData.password}
                    onChange={handleRegistrationChange}
                    required
                    className="register-input"
                />
                <button type="submit" className="register-button">Register</button>
                <p className="register-footer">
                    Already registered? <Link to="/login" className="login-link">Login Here</Link>
                </p>
            </form>
        </div>
    );
};

export default RegistrationPage;
