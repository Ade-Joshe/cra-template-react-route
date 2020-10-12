import React from 'react';
import { NavLink } from 'react-router-dom';
import "./login.css";

const Login = ({ history }) => {

    const loginSubmit = () => {
        localStorage.setItem("authID", JSON.stringify(35535235235235));
        window.location.replace("/home")
    }

    return (
        <>

            <h2>Logging in</h2>

            <button><NavLink to="signup">Sign up</NavLink></button>
            <button onClick={loginSubmit}>Login</button>

        </>
    )
}

export { Login }