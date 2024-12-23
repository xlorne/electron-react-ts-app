import Login from "../pages/login";
import NotFound from "../layout/NotFound";
import Layout from "../layout";
import WelcomePage from "../pages/welcome";
import {Route} from "react-router";
import {RouteObject} from "react-router/dist/lib/context";
import React from "react";

export const routes: RouteObject[] = [
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: "/welcome",
                element: <WelcomePage/>,
            },
            {
                path: '/*',
                element: <NotFound/>,
            }
        ]
    },
];

const loadRoutes  = (routes:RouteObject[]) => {
    return (
        <>
            {routes.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        children={route.children && loadRoutes(route.children)}
                    />
                )
            })}
        </>
    )
}


export const loadLayoutRoutes = () => {
    const rootRoutes = routes
        .filter((route) => route.path === '/');
    if (rootRoutes && rootRoutes.length > 0) {
        const list = rootRoutes[0].children;
        return loadRoutes(list);
    }
    return (
        <></>
    )
}
