import React from "react";
import {PageContainer} from "@ant-design/pro-components";
import {Button, Form, Input} from "antd";
import {useNavigate} from "react-router";


const LoginPage = ()=>{

    document.title = 'Login Page ';

    const navigate = useNavigate();

    const handlerLogin = ()=>{
        localStorage.setItem('token','test');
        navigate('/welcome');
    }

    return (
        <PageContainer>
            <Form>
                <Form.Item>
                    <Input type="text" placeholder="username"/>
                </Form.Item>
                <Form.Item>
                    <Input type="password" placeholder="password"/>
                </Form.Item>
            </Form>
            <Button
                onClick={handlerLogin}
            >login</Button>

        </PageContainer>
    )
}

export default LoginPage;
