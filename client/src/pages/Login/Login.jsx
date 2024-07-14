import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
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
            if (result.data.message === 'Success') {
                localStorage.setItem('userId', result.data.userId);
                navigate('/dashboard');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="login">
            <header className="login__header">
                <div className="login__header-container">
                    <h1 className="login__title">SpendSavvy</h1>
                    <nav className="login__nav">
                        <Link to='/login' className="login__link">Sign In</Link>
                        <Link to='/register' className="login__link">Sign Up</Link>
                    </nav>
                </div>
            </header>
            <div className="login__content">
                <div className="login__info">
                    <h2 className="login__info-title">Welcome back to SpendSavvy</h2>
                    <p className="login__info-text">
                        "Track your expenses effortlessly and manage your finances wisely with SpendSavvy."
                    </p>
                </div>
                <div className="login__separator"></div>
                <div className="login__form-container">
                    <h1 className="login__form-title">Login</h1>
                    <form className="login__form" onSubmit={handleSubmit}>
                        <div className="login__form-group">
                            <label className="login__label" htmlFor="email">Email</label>
                            <input className="login__input" type="email" id="email" name="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="login__form-group">
                            <label className="login__label" htmlFor="password">Password</label>
                            <input className="login__input" type="password" id="password" name="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button className="login__button" type="submit">Login</button>
                    </form>
                    <Link to='/register' className="login__signup-link">Don't have an account?</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;