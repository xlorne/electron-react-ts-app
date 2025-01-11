import React from "react";
import {useNavigate} from "react-router";
import {Button, Image, Row} from "antd";
import {invoke} from "@/api";
import {test} from "@/api/test";
import {PageContainer, ProTable} from "@ant-design/pro-components";

const WelcomePage = () => {

    document.title = 'Welcome Page ';

    const navigate = useNavigate();

    return (
        <PageContainer>
            <Row>
                <Image src={"static://assets/github.png"}/>
                <Image src={"static://Users/lorne/Downloads/123.jpg"}/>
            </Row>

            <Button
                onClick={() => {
                    navigate('/test');
                }}
            >test</Button>


            <Button
                onClick={() => {
                    invoke('test', 'test').then((res) => {
                        console.log(res);
                    });
                }}
            >handler</Button>


            <Button
                onClick={() => {
                    test().then(res => {
                        console.log(res);
                    })
                }}
            >
                api
            </Button>

            <ProTable/>
        </PageContainer>
    )
}

export default WelcomePage;
