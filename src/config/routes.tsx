import Login from "../pages/login";
import NotFound from "../layout/NotFound";
import Layout from "../layout";
import WelcomePage from "../pages/welcome";

export const routes = [
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
