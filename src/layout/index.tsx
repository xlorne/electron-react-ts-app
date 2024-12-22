import {ActionType, ProLayout} from '@ant-design/pro-components';
import React, {useRef, useState} from 'react';
import {Route, Routes} from "react-router";
import {useNavigate} from "react-router-dom";
import {config} from "../config/theme";
import AvatarHeader from "./AvatarHeader";
import {menus} from "../config/menus";
import NotFound from "./NotFound";
import WelcomePage from "../pages/welcome";
import "./index";

const welcomePath = config.welcomePath;
const loginPath = config.loginPath;

const Layout = () => {

    const actionRef = useRef<ActionType>(null);
    const [pathname, setPathname] = useState(welcomePath);

    const navigate = useNavigate();

    const username = localStorage.getItem('username');

    return (
        <ProLayout
            siderWidth={config.siderWidth}
            layout={config.layout}
            location={{
                pathname,
            }}
            title={config.title}
            logo={config.logo}
            actionRef={actionRef}
            waterMarkProps={{
                content: username || config.waterMark,
            }}
            menu={{
                request: async () => {
                    return menus;
                }
            }}
            breadcrumbProps={{
                itemRender: (route: any, params, routes, paths) => {
                    return (
                        <label
                            className={"breadcrumb-item"}
                            onClick={() => {
                                return;
                            }}
                        >
                            {route.breadcrumbName}
                        </label>
                    );
                }
            }}
            avatarProps={{
                render: (props, defaultDom) => {
                    return (
                        <AvatarHeader props={props}/>
                    )
                }
            }}
            actionsRender={(props) => {
                return [];
            }}
            onPageChange={(location:any) => {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate(loginPath, {replace: true});
                }else{
                    navigate(location.pathname);
                }
            }}
            menuItemRender={(item, dom) => (
                <div
                    style={{
                        width:"100%"
                    }}
                    onClick={() => {
                        const currentPath = item.path || welcomePath
                        setPathname(currentPath);
                        navigate(currentPath);
                    }}
                >
                    {dom}
                </div>
            )}
        >
            <Routes>
                <Route path={"/welcome"}
                       key={"welcome"}
                       element={<WelcomePage/>}/>
                <Route path={"/*"}
                       key={"404"}
                       element={<NotFound/>}/>
            </Routes>
        </ProLayout>
    );
};

export default Layout;
