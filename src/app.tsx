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

            <ProTable/>
        </>
    )
}

export default Test;
