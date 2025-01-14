import React from "react";
import {useNavigate} from "react-router";
import {Button, Image, message, Row} from "antd";
import {invoke} from "@/api";
import {login} from "@/api/test";
import {PageContainer, ProTable} from "@ant-design/pro-components";

const WelcomePage = () => {

    document.title = 'Welcome Page ';


    const navigate = useNavigate();

    return (
        <PageContainer>
            <Row>
                <Image src={"static://assets/github.png"}/>
            </Row>

            <Button
                onClick={() => {
                    navigate('/test');
                }}
            >go</Button>


            <Button
                onClick={async () => {
                    const res = await invoke('test', 'test');
                    message.success(res);
                }}
            >test</Button>


            <Button
                onClick={() => {
                    login().then(res => {
                        console.log(res);
                    })
                }}
            >
                login
            </Button>

            <ProTable/>
        </PageContainer>
    )
}

export default WelcomePage;
