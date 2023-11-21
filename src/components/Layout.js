import { Suspense } from "react";
import { Loader } from "./Loader";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";

export const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    )
};