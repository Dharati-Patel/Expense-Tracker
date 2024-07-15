import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from '../../assets/Images/avatar.webp';
import { MenuItems } from "../MenuItems/MenuItems";
import { signout } from "../Icons/Icons";
import './Navigation.scss';

const Navigation = ({active, setActive}) => {

    const userName = localStorage.getItem('userName');
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        navigate('/login');
    };

    return(
        <nav className="nav">
            <div className="nav__user">
                <img className="nav__img" src={avatar} alt="avatrat image"/>
                <div className="nav_name">
                    <h2 className="nav__name">{userName}</h2>
                </div>
            </div>    
            <ul className="nav__menu">
                {MenuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`nav__list ${active === item.id ? 'active' : ''}`}>
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="nav__signout">
                <li className="nav__signout--list" onClick={handleSignOut}>
                    {signout} Sign Out
                </li>
            </div>
        </nav>
    );
};

export default Navigation;