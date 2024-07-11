import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:8080/api/login', { email, password });
            console.log(result);
            if(result.data.message === 'Success') {
                const userId = result.data.userId;
                localStorage.setItem('userId', result.data.userId);
                navigate('/dashboard');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div className="login">
            <h1 className="login__title">Login</h1>
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__form-group">
                    <label className="login__label" htmlFor="email">Email</label>
                    <input className="login__input" type="email" id="email" name="email" placeholder='Enter email'  onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="login__form-group">
                    <label className="login__label" htmlFor="password">Password</label>
                    <input className="login__input" type="password" id="password" name="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button className="login__button" type="submit">Login</button>
            </form>
            <Link to='/register' className="login__signup-link">Don't have an account?</Link>
        </div>
    );
};

export default Login;