import {ThemeConfig} from "antd";

// @ts-ignore
import logo from "@/assets/logo.png";

export const theme = {
    token: {
        colorPrimary: '#4a79d8',
    }
} as ThemeConfig;


export const config = {
    // 主题配置
    theme: theme,
    // 后台名称
    title: 'Admin UI',
    // 后台logo
    logo: logo,
    // 欢迎页路径
    welcomePath: '/welcome',
    // 登录页路径
    loginPath: '/login',
    // 侧边栏宽度
    siderWidth: 210,
    // 侧边栏布局
    layout: 'top' as 'side' | 'top' | 'mix',
    // 水印
    waterMark: 'default waterMark',
}

