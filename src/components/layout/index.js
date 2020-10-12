import React, { useEffect } from "react";
import "./layout.css";


const AuthenticatedLayout = ({ history, children, isAuthenticated }) => {

    // authenticated props will come from the redux store or localstorage
    useEffect(() => {
        if (!isAuthenticated) {
            history.replace("/")
        }
    }, [isAuthenticated, history]);

    return (
        <>
            {
                isAuthenticated &&
                children
            }
        </>
    );
};

const AuthLayout = ({ history, children, isAuthenticated }) => {

    useEffect(() => {
        if (isAuthenticated) {
            history.replace("/home")
        }
    }, [isAuthenticated, history]);

    return (
        <>
            {
                !isAuthenticated &&
                children
            }
        </>
    );
};

export { AuthenticatedLayout, AuthLayout };