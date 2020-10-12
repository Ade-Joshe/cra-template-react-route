import React from "react";
import { Route } from "react-router-dom";
import { AuthenticatedLayout } from "../components/layout";

const MainRoute = ({ Component, path, exact, purpose, isAuthenticated, ...rest }) => {
    return (
        <Route
            exact={exact}
            path={path}
            {...rest}
            render={(props) => {
                return (
                    <AuthenticatedLayout history={props.history} isAuthenticated={isAuthenticated}>
                        <Component {...rest} {...props} />
                    </AuthenticatedLayout>
                );
            }}
        />
    );
};

export { MainRoute };