import { useSelector } from "react-redux"
import { selectAuthAuthenticated } from "redux/auth.selector"
import { Navigate } from "react-router-dom";


export const RestictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const authenticated = useSelector(selectAuthAuthenticated);

    return authenticated ? <Navigate to={redirectTo}/> : Component;
};