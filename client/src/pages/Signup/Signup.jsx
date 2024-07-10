import React, { useState } from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const api_url = import.meta.env.VITE_API_URL;

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post('http://localhost:8080/api/register', { name, email, password });
            console.log(result);
            navigate('/login');
        } catch (err) {
            console.log(err);
        }
    }

    return(
        <div className="registration">
        <h1 className="registration__title">Register</h1>
        <form className="registration__form" onSubmit={handleSubmit}>
            <div className="registration__form-group">
                <label className="registration__label" htmlFor="name">Name</label>
                <input className="registration__input" type="text" id="name" name="name" placeholder='Enter name' onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="registration__form-group">
                <label className="registration__label" htmlFor="email">Email</label>
                <input className="registration__input" type="email" id="email" name="email" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="registration__form-group">
                <label className="registration__label" htmlFor="password">Password</label>
                <input className="registration__input" type="password" id="password" name="password" placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button className="registration__button" type="submit">Register</button>
        </form>
        <Link to='/login' className="registration__login-link">Already have an account</Link>
    </div> 
    );
}

export default Signup;