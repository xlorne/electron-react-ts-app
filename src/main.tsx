import ReactDOM from 'react-dom/client';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import {createContext} from "react";
import {routes} from "./config/routes";
import {ConfigProvider} from "antd";

const RouteContext = createContext(null);

document.addEventListener('DOMContentLoaded', () => {
    const div = document.getElementById('root');
    if (div) {
        const root = ReactDOM.createRoot(div);
        root.render(
            <ConfigProvider virtual={false} >
                <RouteContext.Provider
                    value={null}
                >
                    <RouterProvider router={createHashRouter(routes)}/>
                </RouteContext.Provider>
            </ConfigProvider>

        );
    } else {
        console.error("Element with id 'app' not found");
    }
});
