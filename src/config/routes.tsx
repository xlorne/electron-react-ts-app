import App from "../app";
import Test from "../compoments/test";

export const routes = [
    {
        path:"/test",
        element: <Test/>,
    },
    {
        path:"/",
        element: <App/>,
    }
];
