import React from "react";
import {Button} from "antd";
import {ProTable} from "@ant-design/pro-components";
import {useNavigate} from "react-router";

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
                    // @ts-ignore
                    window.ipcRenderer.invoke('test', 'test').then((res) => {
                        console.log(res);
                    });
                }}
            >handler</Button>

            <ProTable/>
        </>
    )
}

export default Test;
