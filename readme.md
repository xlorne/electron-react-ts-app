# Electron-React-Typescript-Webpack


## Electron Add React On Preload
```
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

```

## Reference Documentation

[electron forge ts + react](https://www.electronforge.io/templates/typescript-+-webpack-template)     
[electron forge add typescript](https://www.electronforge.io/guides/framework-integration/react-with-typescript)
[antd pro components](https://procomponents.ant.design/components)    
[antd](https://ant.design/index-cn)    
[how to fix sqlite3 error](https://stackoverflow.com/questions/76684989/electronjs-electron-forge-please-install)  
[hot module replacement](https://www.electronforge.io/config/plugins/webpack#hot-module-replacement)  
