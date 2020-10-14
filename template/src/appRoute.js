import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { AuthRoute, MainRoute } from "./routes";
import { Home, Login, SignUp } from "./pages";

function AppRoute() {

    const [isAuthenticated, setisAuthenticated] = useState(Boolean(JSON.parse(localStorage.getItem("authID"))));

    useEffect(() => {
        setisAuthenticated(Boolean(JSON.parse(localStorage.getItem("authID"))));
    }, [isAuthenticated]);

    return (
        <Router>
            <Switch>

                {/* auth route for unauthenticated routes */}
                <AuthRoute path="/" Component={Login} exact isAuthenticated={isAuthenticated} />
                <AuthRoute path="/signup" Component={SignUp} exact isAuthenticated={isAuthenticated} />

                {/* main route for authorized routes */}
                <MainRoute path="/home" Component={Home} exact isAuthenticated={isAuthenticated} />

            </Switch>
        </Router>
    );
}

export default AppRoute;