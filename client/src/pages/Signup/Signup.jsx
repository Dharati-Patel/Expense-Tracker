import React from 'react';
//import { useHistory } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
    
    return(
        <div className="registration">
        <h1 className="registration__title">Register</h1>
        <form className="registration__form">
            <div className="registration__form-group">
                <label className="registration__label" htmlFor="name">Name</label>
                <input className="registration__input" type="text" id="name" name="name" placeholder='Enter name' required />
            </div>
            <div className="registration__form-group">
                <label className="registration__label" htmlFor="email">Email</label>
                <input className="registration__input" type="email" id="email" name="email" placeholder='Enter email' required />
            </div>
            <div className="registration__form-group">
                <label className="registration__label" htmlFor="password">Password</label>
                <input className="registration__input" type="password" id="password" name="password" placeholder='Enter password' required />
            </div>
            <button className="registration__button" type="submit">Register</button>
        </form>
        <p className="registration__login-link">Already have an account</p>
    </div> 
    );
}

export default Signup;