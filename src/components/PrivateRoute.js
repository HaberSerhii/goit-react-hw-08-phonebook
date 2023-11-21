import { useSelector } from "react-redux"
import { selectAuthAuthenticated } from "redux/auth.selector"
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const authenticated = useSelector(selectAuthAuthenticated);

    return authenticated ?  Component : <Navigate to={redirectTo} /> ;

}