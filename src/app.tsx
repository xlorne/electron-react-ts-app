import React from "react";
import {Button} from "antd";
import {ProTable} from "@ant-design/pro-components";
import {useNavigate} from "react-router";
import {test} from "./api/test";
import {invoke} from "./api";

const Test = () => {

    document.title = 'Test';

    const navigate = useNavigate();

    return (
        <>
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
                    test().then(res=>{
                        console.log(res);
                    })
                }}
            >
                api
            </Button>

            <ProTable/>
        </>
    )
}

export default Test;
