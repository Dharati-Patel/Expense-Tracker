import React, { useState } from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Images/Logo.png';

const api_url = import.meta.env.VITE_API_URL;

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:8080/api/register', { name, email, password }, { name, email, password });
            console.log(result);
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="signup">
            <header className="signup__header">
                <div className="signup__header-container">
                    <div className="signup__brand">
                        <img className="signup__logo" src={Logo} alt="SpendSavvy Logo" />
                        <h1 className="signup__title">SpendSavvy</h1>
                    </div>
                    <nav className="signup__nav">
                        <Link to='/login' className="signup__link">SignIn</Link>
                        <Link to='/register' className="signup__link">SignUp</Link>
                    </nav>
                </div>
            </header>
            <div className="signup__content">
                <div className="signup__info">
                    <h2 className="signup__info-title">Welcome to SpendSavvy</h2>
                    <p className="signup__info-text">
                        "Tracking every penny to pave the way to financial freedom."
                    </p>
                </div>
                <div className="signup__separator"></div>
                <div className="signup__form-container">
                    <h1 className="signup__form-title">Register</h1>
                    <form className="signup__form" onSubmit={handleSubmit}>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="name">Name</label>
                            <input className="signup__input" type="text" id="name" name="name" placeholder='Enter name' onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="email">Email</label>
                            <input className="signup__input" type="email" id="email" name="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="signup__form-group">
                            <label className="signup__label" htmlFor="password">Password</label>
                            <input className="signup__input" type="password" id="password" name="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button className="signup__button" type="submit">Register</button>
                    </form>
                    <Link to='/login' className="signup__login-link">Already have an account?</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;