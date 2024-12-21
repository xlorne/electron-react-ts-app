import ReactDOM from 'react-dom/client';
import {createHashRouter, RouterProvider} from 'react-router-dom';
import {createContext} from "react";
import {routes} from "./config/routes";

const RouteContext = createContext(null);

window.onload = () => {
    const div = document.getElementById('root');
    if (div) {
        const root = ReactDOM.createRoot(div);
        root.render(
            <RouteContext.Provider
                value={null}
            >
                <RouterProvider router={createHashRouter(routes)}/>
            </RouteContext.Provider>
        );
    } else {
        console.error("Element with id 'app' not found");
    }
};
