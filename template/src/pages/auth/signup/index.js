import React from 'react';
import { NavLink } from 'react-router-dom';
import "./signup.css";

const SignUp = () => {
    return (
        <>
            <button><NavLink to="/">Go to Login</NavLink></button>
        </>
    )
}

export { SignUp }