import React from "react";
import {Button} from "antd";
import {ProTable} from "@ant-design/pro-components";

const Test = () => {

    document.title = 'Test';

    const [version,setVersion] = React.useState(0);

    return (
        <>
            {version}
            <Button
                onClick={()=>{
                    setVersion(Math.random());
                }}
            >test</Button>

            <ProTable/>
        </>
    )
}

export default Test;
