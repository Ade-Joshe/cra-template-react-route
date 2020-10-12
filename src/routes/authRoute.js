import React from "react";
import { Route } from "react-router-dom";
import { AuthLayout } from "../components/layout";

const AuthRoute = ({ Component, path, exact, purpose, isAuthenticated, ...rest }) => {
    
    return (
        <Route
            exact={exact}
            path={path}
            {...rest}
            render={(props) => {
                return (
                    <AuthLayout history={props.history} isAuthenticated={isAuthenticated}>
                        <Component {...rest} {...props} />
                    </AuthLayout>
                );
            }}
        />
    );
};

export { AuthRoute }